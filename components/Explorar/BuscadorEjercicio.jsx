import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../Utils/DarkModeProvider";
import ResultadosBusqueda from "./ResultadosBusqueda";
import BusquedasRecientes from "./BusquedasRecientes";
import data from "../../data/data.json";

// Llama a la data de los ejercicios del archivo data.json
const exercises = data.exercises;

export default function BuscadorEjercicio() {
  const { isDarkMode } = useDarkMode();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [showRecentSearches, setShowRecentSearches] = useState(true);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    if (searchTerm.trim()) {
      // Filtrar los ejercicios basados en el nombre
      const results = exercises.filter((exercise) =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
      setShowRecentSearches(false);
      setNoResults(results.length === 0); // Muestra 'No hay resultados' si no encuentra nada
    } else {
      setSearchResults([]);
      setShowRecentSearches(true);
      setNoResults(false); // Oculta el mensaje cuando se limpia la búsqueda
    }
  }, [searchTerm]);

  const handleSearch = () => {
    if (searchTerm.trim() && !recentSearches.includes(searchTerm.trim())) {
      setRecentSearches((prev) => [searchTerm.trim(), ...prev.slice(0, 4)]);
    }
    setSearchTerm("");
  };

  const handleRemoveSearch = (item) => {
    setRecentSearches((prev) => prev.filter((search) => search !== item));
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#121212" : "#fff" },
      ]}
    >
      <View
        style={[
          styles.searchContainer,
          { backgroundColor: isDarkMode ? "#333" : "#fff" },
        ]}
      >
        <FontAwesomeIcon
          icon={faSearch}
          size={20}
          color={isDarkMode ? "#bbb" : "#888"}
        />
        <TextInput
          style={[
            styles.input,
            {
              color: isDarkMode ? "#fff" : "#000",
            },
          ]}
          placeholder="Buscar ejercicios o rutinas"
          placeholderTextColor={isDarkMode ? "#bbb" : "#888"}
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={handleSearch}
        />
        {searchTerm !== "" && (
          <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
            <FontAwesomeIcon
              icon={faTimes}
              size={16}
              color={isDarkMode ? "#bbb" : "#888"}
            />
          </TouchableOpacity>
        )}
      </View>

      {searchResults.length > 0 && (
        <ResultadosBusqueda
          results={searchResults.map((result) => result.name)} // Solo muestra los nombres
          onSelectResult={(selectedResult) =>
            setRecentSearches((prev) => [selectedResult, ...prev.slice(0, 4)])
          }
        />
      )}
      {showRecentSearches && recentSearches.length > 0 && (
        <BusquedasRecientes
          searches={recentSearches}
          onSelectSearch={setSearchTerm}
          onRemoveSearch={handleRemoveSearch}
        />
      )}
      {noResults && (
        <Text
          style={[styles.noResults, { color: isDarkMode ? "#bbb" : "#666" }]}
        >
          No hay resultados. Intenta con otra búsqueda.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
  },
  clearButton: {
    padding: 4,
  },
  noResults: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});
