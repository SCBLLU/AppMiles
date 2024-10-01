import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useDarkMode } from "../Utils/DarkModeProvider";
import { useRouter } from "expo-router";
import data from "../../data/data.json";

const ResultadosBusqueda = ({ results, onSelectResult }) => {
  const { isDarkMode } = useDarkMode();
  const router = useRouter();

  const handleResultPress = (exercise) => {
    onSelectResult(exercise); // Llama a la función para actualizar la búsqueda reciente
    if (exercise?.id) {
      router.push(`/exercise/${encodeURIComponent(exercise.id)}`); // Navega a la ruta del ejercicio
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#333" : "#fff" },
      ]}
    >
      <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}>
        Resultados de búsqueda
      </Text>
      <FlatList
        data={results}
        renderItem={({ item }) => {
          const category = data.categories.find(
            (cat) => cat.id === item.category
          );
          return (
            <TouchableOpacity
              style={[
                styles.resultCard,
                { backgroundColor: isDarkMode ? "#444" : "#f9f9f9" },
              ]}
              onPress={() => handleResultPress(item)}
            >
              <View
                style={[
                  styles.categoryCircle,
                  { backgroundColor: category ? category.color : "#ccc" },
                ]}
              />
              <View style={styles.textContainer}>
                <Text style={{ color: isDarkMode ? "#fff" : "#000" }}>
                  {item.name}
                </Text>
                <Text
                  style={{ color: isDarkMode ? "#bbb" : "#666" }}
                >
                  {category ? category.name : "Categoría desconocida"} {/* Mostrar el nombre de la categoría */}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  resultCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  categoryCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 15,
  },
});

export default ResultadosBusqueda;
