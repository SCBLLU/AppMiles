import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useDarkMode } from "../Utils/DarkModeProvider";
import { useRouter } from "expo-router";

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
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.resultCard,
              { backgroundColor: isDarkMode ? "#444" : "#f9f9f9" },
            ]}
            onPress={() => handleResultPress(item)}
          >
            <Image
              source={{
                uri: item.imageUrl || "https://via.placeholder.com/50",
              }} // Usa imageUrl si existe
              style={styles.exerciseImage}
            />
            <Text
              style={{ color: isDarkMode ? "#fff" : "#000", marginLeft: 10 }}
            >
              {item.name}
            </Text>
            <Text
              style={{ color: isDarkMode ? "#bbb" : "#666", marginLeft: 10 }} // Muestra la categoría
            >
              {item.duration} minutos
            </Text>
          </TouchableOpacity>
        )}
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
  exerciseImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default ResultadosBusqueda;
