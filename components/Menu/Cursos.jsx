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
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  gridContainer: {
    paddingHorizontal: 2,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    margin: 10,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  cardDescription: {
    marginTop: 5,
    fontSize: 14,
    color: "#666",
  },
});

export default Dashboard;
