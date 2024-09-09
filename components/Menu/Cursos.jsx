import React from "react";
import { Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const Dashboard = () => {
  const exercises = [
    {
      id: "1",
      title: "Ejercicio para Piernas",
      description: "Fortalece tus piernas con esta rutina.",
    },
    {
      id: "2",
      title: "Rutina de Cardio",
      description: "Mejora tu resistencia cardiovascular.",
    },
    {
      id: "3",
      title: "Entrenamiento de Fuerza",
      description: "Incrementa tu fuerza con estos ejercicios.",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ejercicios Disponibles</Text>
      {exercises.map((exercise) => (
        <TouchableOpacity key={exercise.id} style={styles.card}>
          <Text style={styles.cardTitle}>{exercise.title}</Text>
          <Text style={styles.cardDescription}>{exercise.description}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardDescription: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
  },
});

export default Dashboard;
