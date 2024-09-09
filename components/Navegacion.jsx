import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

const Navegacion = () => {
  return (
    <View style={styles.NavegacionContainer}>
      <Link href="/" style={styles.NavegacionItem}>
        <Text style={styles.NavegacionText}>Login</Text>
      </Link>
      <Link href="/dashboard" style={styles.NavegacionItem}>
        <Text style={styles.NavegacionText}>Menu</Text>
      </Link>
      <Link href="/subscriptions" style={styles.NavegacionItem}>
        <Text style={styles.NavegacionText}>Planes</Text>
      </Link>
      <Link href="/about" style={styles.NavegacionItem}>
        <Text style={styles.NavegacionText}>Nosotros</Text>
      </Link>
      <Link href="/collaborate" style={styles.NavegacionItem}>
        <Text style={styles.NavegacionText}>Colaborar</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  NavegacionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#f0f0f0",
  },
  NavegacionItem: {
    padding: 10,
  },
  NavegacionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Navegacion;
