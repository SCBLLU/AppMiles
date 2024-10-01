import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import data from "../../data/data.json";
import { useDarkMode } from "../../components/Utils/DarkModeProvider";

const ExerciseDetails = () => {
  const { id } = useLocalSearchParams();
  const { isDarkMode } = useDarkMode();

  const renderLoadingOrError = (message) => (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "#121212" : "#fff" }]}>
      <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}>{message}</Text>
    </View>
  );

  if (!id) {
    return renderLoadingOrError("ID de ejercicio no proporcionado.");
  }

  const exercise = data.exercises.find((ex) => ex.id === id.toString());
  if (!exercise) {
    return renderLoadingOrError("Ejercicio no encontrado.");
  }

  const category = data.categories.find((cat) => cat.id === exercise.category);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Regresar",
          headerStyle: {
            backgroundColor: isDarkMode ? "#121212" : "#fff",
          },
          headerTintColor: isDarkMode ? "#fff" : "#000",
          headerRight: () => (
            category && (
              <View style={[styles.categoryContainer, { backgroundColor: category.color }]}>
                <Text style={styles.categoryText}>{category.name}</Text>
              </View>
            )
          ),
        }}
      />
      <View style={[styles.container, { backgroundColor: isDarkMode ? "#121212" : "#fff" }]}>
        <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}>{exercise.name}</Text>
        <Text style={[styles.description, { color: isDarkMode ? "#b3b3b3" : "#666" }]}>
          Duración: {exercise.duration} minutos{"\n"}
          Calorías quemadas: {exercise.calories}{"\n"}
          Categoría: {category ? category.name : "Desconocida"}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  categoryContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ExerciseDetails;
