import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";

export default function Ajustes() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);
  const toggleNotifications = () =>
    setNotifications((prevStatus) => !prevStatus);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajustes</Text>

      <View style={styles.option}>
        <Text style={styles.optionText}>Modo Oscuro</Text>
        <Switch
          value={darkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Notificaciones</Text>
        <Switch
          value={notifications}
          onValueChange={toggleNotifications}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notifications ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Configuración guardada")}
      >
        <Text style={styles.buttonText}>Guardar Configuración</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  optionText: {
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: "#007bff",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
