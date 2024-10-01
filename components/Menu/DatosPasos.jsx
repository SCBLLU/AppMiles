import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Screen from "../Utils/Screen";
import { useDarkMode } from "../Utils/DarkModeProvider";

const DatosPasos = ({ currentSteps, goalSteps }) => {
  const { isDarkMode } = useDarkMode();

  // Calcula el porcentaje y limita a 100%
  const percentage = Math.min((currentSteps / goalSteps) * 100, 300); // Corregido el límite a +100%
  // Calcula el ancho de la barra de progreso
  const progressWidth = (percentage / 100) * Dimensions.get("window").width;

  // Formatea los números con separadores de miles
  const formatNumber = (number) => number.toLocaleString();

  return (
    <Screen>
      <View
        style={[
          styles.container,
          { backgroundColor: isDarkMode ? "#333" : "#F3F4F6" },
        ]}
      >
        <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#333" }]}>
          Pasos del Día
        </Text>
        <Text
          style={[styles.stepsCount, { color: isDarkMode ? "#fff" : "#000" }]}
        >
          {formatNumber(currentSteps)}
        </Text>
        <Text
          style={[styles.goalText, { color: isDarkMode ? "#aaa" : "#666" }]}
        >
          Objetivo: {formatNumber(goalSteps)} pasos
        </Text>

        <View
          style={[
            styles.progressContainer,
            { backgroundColor: isDarkMode ? "#555" : "#ddd" },
          ]}
        >
          <View
            style={[
              styles.progressBar,
              {
                width: progressWidth,
                backgroundColor: isDarkMode ? "#4CAF50" : "#000",
              },
            ]}
          />
        </View>

        <Text
          style={[styles.percentage, { color: isDarkMode ? "#ddd" : "#333" }]}
        >
          {percentage.toFixed(0)}%
        </Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
    margin: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  stepsCount: {
    fontSize: 48,
    fontWeight: "bold",
  },
  goalText: {
    fontSize: 16,
    marginVertical: 10,
  },
  progressContainer: {
    width: "100%",
    height: 20,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 20,
  },
  progressBar: {
    height: "100%",
  },
  percentage: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DatosPasos;
