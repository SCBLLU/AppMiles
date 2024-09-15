import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Bienvenida = () => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Sé Partner de Miles</Text>
            <Text style={styles.subtitle}>
              Únete a nuestra red de entrenadores, gimnasios y marcas de
              fitness. Ofrece tus servicios a miles de usuarios y crece con
              nosotros.
            </Text>
            <Text style={styles.subtitle}>
              Beneficios exclusivos, soporte personalizado y acceso a
              herramientas avanzadas para hacer crecer tu negocio.
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.primaryButton]}>
              <Text style={styles.primaryButtonText}>Únete Ahora</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.outlineButton]}>
              <Text style={styles.outlineButtonText}>Saber Más</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    width: "100%",
    paddingVertical: 38,
    backgroundColor: "black",
  },
  container: {
    paddingHorizontal: 15,
  },
  content: {
    alignItems: "center",
  },
  textContainer: {
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  subtitle: {
    color: "#D1D5DB",
    fontSize: 16,
    textAlign: "center",
    maxWidth: 700,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  primaryButton: {
    backgroundColor: "white",
  },
  primaryButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: "white",
  },
  outlineButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Bienvenida;
