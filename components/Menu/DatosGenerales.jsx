import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faWalking, faFire } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useDarkMode } from "../DarkModeProvider";
const DatosGenerales = ({ steps, minutes, calories }) => {
  const { isDarkMode } = useDarkMode();

  // Formatea los números con separadores de miles
  const formatNumber = (number) => number.toLocaleString();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#333" : "#F3F4F6" },
      ]}
    >
      <View style={styles.statCard}>
        <FontAwesomeIcon
          icon={faWalking}
          size={40}
          color={isDarkMode ? "#4CAF50" : "#4CAF50"}
          style={styles.icon}
        />
        <Text
          style={[styles.statValue, { color: isDarkMode ? "#fff" : "#000" }]}
        >
          {formatNumber(steps)}
        </Text>
        <Text
          style={[styles.statLabel, { color: isDarkMode ? "#aaa" : "#666" }]}
        >
          Pasos
        </Text>
      </View>

      <View style={styles.statCard}>
        <FontAwesomeIcon
          icon={faClock}
          size={40}
          color={isDarkMode ? "#2196F3" : "#2196F3"}
          style={styles.icon}
        />
        <Text
          style={[styles.statValue, { color: isDarkMode ? "#fff" : "#000" }]}
        >
          {formatNumber(minutes)}
        </Text>
        <Text
          style={[styles.statLabel, { color: isDarkMode ? "#aaa" : "#666" }]}
        >
          Minutos
        </Text>
      </View>

      <View style={styles.statCard}>
        <FontAwesomeIcon
          icon={faFire}
          size={40}
          color={isDarkMode ? "#FF5722" : "#FF5722"}
          style={styles.icon}
        />
        <Text
          style={[styles.statValue, { color: isDarkMode ? "#fff" : "#000" }]}
        >
          {formatNumber(calories)}
        </Text>
        <Text
          style={[styles.statLabel, { color: isDarkMode ? "#aaa" : "#666" }]}
        >
          Calorías
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    margin: 15,
  },
  statCard: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
    padding: 10,
  },
  icon: {
    marginBottom: 2,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 12,
  },
});

export default DatosGenerales;
