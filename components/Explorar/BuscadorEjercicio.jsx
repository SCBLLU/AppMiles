import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useDarkMode } from "../Utils/DarkModeProvider";
import ResultadosBusqueda from "./ResultadosBusqueda";
import BusquedasRecientes from "./BusquedasRecientes";
import TodasCategorias from "./TodasCategorias";

// Mock data for exercises
const exerciseDatabase = [
  "Sentadillas - Fuerza de piernas",
  "Plancha - Core",
  "Burpees - Cardio",
  "Yoga para principiantes - Flexibilidad",
  "Zumba - Baile cardio",
  "Levantamiento de pesas - Fuerza de brazos",
  "Pilates - Estabilidad central",
  "Natación - Cardio de bajo impacto",
  "Estiramientos - Flexibilidad general",
  "HIIT - Entrenamiento de alta intensidad",
];

const BuscadorEjercicio = () => {
  const { isDarkMode } = useDarkMode();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const results = exerciseDatabase.filter((exercise) =>
        exercise.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);

      if (!recentSearches.includes(searchTerm)) {
        setRecentSearches((prev) => [searchTerm, ...prev.slice(0, 4)]);
      }
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const removeRecentSearch = (search) => {
    setRecentSearches((prev) => prev.filter((s) => s !== search));
  };

  const handleSelectSearch = (search) => {
    setSearchTerm(search);
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
          { backgroundColor: isDarkMode ? "#333" : "#e0e0e0" },
        ]}
      >
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: isDarkMode ? "#444" : "#fff",
              color: isDarkMode ? "#fff" : "#000",
            },
          ]}
          placeholder="Buscar ejercicios o rutinas"
          placeholderTextColor={isDarkMode ? "#bbb" : "#888"}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>

      {searchResults.length > 0 && (
        <ResultadosBusqueda results={searchResults} />
      )}
      <BusquedasRecientes
        searches={recentSearches}
        onSelectSearch={handleSelectSearch}
        onRemoveSearch={removeRecentSearch}
      />
      <TodasCategorias />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
});

export default BuscadorEjercicio;
