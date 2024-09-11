import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Formulario() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nosotros</Text>
      <Text style={styles.description}>
        Esta es una aplicación simple que utiliza la API de Spotify para mostrar
        las canciones y artistas más populares de un usuario. Fue creada por
        Miles.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
});
