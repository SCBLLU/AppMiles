import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
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
          headerBackTitleVisible: false, // Oculta el título del botón de retroceso en iOS
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

      <ScrollView style={{ backgroundColor: isDarkMode ? "#121212" : "#fff" }}>

        <View style={[styles.container, { backgroundColor: isDarkMode ? "#121212" : "#fff" }]}>
          <Image source={{ uri: exercise.image }} style={styles.image} />
          <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}>{exercise.name}</Text>
          <Text style={[styles.description, { color: isDarkMode ? "#b3b3b3" : "#666" }]}>
            Duración: {exercise.duration} minutos{"\n"}
            Calorías quemadas: {exercise.calories}{"\n"}
            Categoría: {category ? category.name : "Desconocida"}
          </Text>

          <View style={styles.extraInfo}>
            <Text style={[styles.extraTitle, { color: isDarkMode ? "#fff" : "#000" }]}>Músculos Trabajados:</Text>
            <Text style={[styles.extraText, { color: isDarkMode ? "#b3b3b3" : "#666" }]}>
              {exercise.muscles.join(", ")}
            </Text>
            <Text style={[styles.extraTitle, { color: isDarkMode ? "#fff" : "#000" }]}>Consejos:</Text>
            <Text style={[styles.extraText, { color: isDarkMode ? "#b3b3b3" : "#666" }]}>
              {exercise.tips}
            </Text>
          </View>

          <TouchableOpacity style={styles.startButton} onPress={() => alert("¡Ejercicio iniciado!")}>
            <Text style={styles.startButtonText}>Realizar Ejercicio</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
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
    padding: 10,
    borderRadius: 10,
  },
  categoryText: {
    color: "#fff",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  extraInfo: {
    marginVertical: 10,
  },
  extraTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  extraText: {
    fontSize: 16,
    marginBottom: 10,
  },
  startButton: {
    backgroundColor: "#282c34",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  startButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ExerciseDetails;
