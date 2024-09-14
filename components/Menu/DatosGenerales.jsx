import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Footprints, Clock, Flame } from "lucide-react-native";

const DatosGenerales = ({ steps, minutes, calories }) => {
  // Formatea los números con separadores de miles
  const formatNumber = (number) => number.toLocaleString();

  return (
    <View style={styles.container}>
      <View style={styles.statCard}>
        <Footprints size={40} color="#4CAF50" style={styles.icon} />
        <Text style={styles.statValue}>{formatNumber(steps)}</Text>
        <Text style={styles.statLabel}>Pasos</Text>
      </View>

      <View style={styles.statCard}>
        <Clock size={40} color="#2196F3" style={styles.icon} />
        <Text style={styles.statValue}>{formatNumber(minutes)}</Text>
        <Text style={styles.statLabel}>Minutos</Text>
      </View>

      <View style={styles.statCard}>
        <Flame size={40} color="#FF5722" style={styles.icon} />
        <Text style={styles.statValue}>{formatNumber(calories)}</Text>
        <Text style={styles.statLabel}>Calorías</Text>
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
    backgroundColor: "#fff",

    margin: 10,
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
    color: "#333",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
});

export default DatosGenerales;
