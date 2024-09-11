import React from "react";
import {
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

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
    {
      id: "4",
      title: "Ejercicios de Estiramiento",
      description: "Mejora tu flexibilidad con esta rutina.",
    },
    {
      id: "5",
      title: "Rutina de Abdominales",
      description: "Fortalece tu abdomen con estos ejercicios.",
    },
    {
      id: "6",
      title: "Ejercicios para Espalda",
      description: "Fortalece tu espalda con esta rutina.",
    },
  ];

  const renderExercise = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejercicios Disponibles</Text>
      <FlatList
        data={exercises}
        renderItem={renderExercise}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
        scrollEnabled={false} // Desactivar el scroll
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  gridContainer: {
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
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
