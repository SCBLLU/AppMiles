import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import data from "../../data/data.json"; // Ajusta la ruta según tu estructura de archivos

export default function ExerciseDetails() {
  const { exerciseId } = useLocalSearchParams();

  // Buscar el ejercicio en los datos importados
  const exercise = data.exercises.find(ex => ex.id === exerciseId);

  if (!exercise) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cargando...</Text>
      </View>
    );
  }

  // Obtener la categoría del ejercicio
  const category = data.categories.find(cat => cat.id === exercise.category);

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
}

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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 10,
  },
});
