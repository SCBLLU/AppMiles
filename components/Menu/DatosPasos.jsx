import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const DatosPasos = ({ currentSteps, goalSteps }) => {
  // Calcula el porcentaje y limita a 100%
  const percentage = Math.min((currentSteps / goalSteps) * 100, 500);
  // Calcula el ancho de la barra de progreso
  const progressWidth = (percentage / 100) * Dimensions.get("window").width;

  // Formatea los números con separadores de miles
  const formatNumber = (number) => number.toLocaleString();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pasos del Día</Text>
      <Text style={styles.stepsCount}>{formatNumber(currentSteps)}</Text>
      <Text style={styles.goalText}>
        Objetivo: {formatNumber(goalSteps)} pasos
      </Text>

      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: progressWidth }]} />
      </View>

      <Text style={styles.percentage}>{percentage.toFixed(0)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  stepsCount: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#1ED760",
  },
  goalText: {
    fontSize: 16,
    color: "#666",
    marginVertical: 10,
  },
  progressContainer: {
    width: "100%",
    height: 20,
    backgroundColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 20,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#1ED760",
  },
  percentage: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default DatosPasos;
