import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
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
              activeOpacity={0.7} // Efecto de feedback al presionar
            >
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={[styles.resultText, { color: isDarkMode ? "#fff" : "#000" }]}>
                  {item.name}
                </Text>
                <Text
                  style={[styles.categoryText, { color: isDarkMode ? "#bbb" : "#666" }]}
                >
                  {category ? category.name : "Categoría desconocida"}
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
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    marginRight: 12,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 30, // Para esquinas redondeadas
  },
  textContainer: {
    flex: 1, // Para que el contenedor de texto use el espacio disponible
  },
  resultText: {
    fontSize: 14, // Tamaño de fuente más grande para el nombre
    fontWeight: "600", // Cambiar peso de fuente para destacar
  },
  categoryText: {
    fontSize: 14, // Tamaño de fuente para la categoría
  },
});

export default ResultadosBusqueda;
