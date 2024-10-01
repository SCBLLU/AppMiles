import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import data from "../../data/data.json";

const ExerciseDetails = () => {
  const { id } = useLocalSearchParams();

  // Función para renderizar mensajes de carga o error
  const renderLoadingOrError = (message) => (
    <View style={styles.container}>
      <Text style={styles.title}>{message}</Text>
    </View>
  );

  // Verificar si id está definido
  if (!id) {
    return renderLoadingOrError("ID de ejercicio no proporcionado.");
  }

  // Buscar el ejercicio en los datos importados
  const exercise = data.exercises.find((ex) => ex.id === id.toString());

  if (!exercise) {
    return renderLoadingOrError("Ejercicio no encontrado.");
  }

  // Obtener la categoría del ejercicio
  const category = data.categories.find((cat) => cat.id === exercise.category);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>
      <Text style={styles.description}>
        Duración: {exercise.duration} minutos{"\n"}
        Calorías quemadas: {exercise.calories}{"\n"}
        Categoría: {category ? category.name : "Desconocida"}
      </Text>
      {category && (
        <View style={[styles.categoryContainer, { backgroundColor: category.color }]}>
          <Text style={styles.categoryText}>{category.name}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 10,
  },
});

export default ExerciseDetails;
