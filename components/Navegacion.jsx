import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const Navegacion = () => {
  const router = useRouter();

  return (
    <View style={styles.NavegacionContainer}>
      <TouchableOpacity
        style={styles.NavegacionItem}
        onPress={() => router.push("/")}
      >
        <Text style={styles.NavegacionText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.NavegacionItem}
        onPress={() => router.push("/dashboard")}
      >
        <Text style={styles.NavegacionText}>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.NavegacionItem}
        onPress={() => router.push("/subscriptions")}
      >
        <Text style={styles.NavegacionText}>Planes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.NavegacionItem}
        onPress={() => router.push("/about")}
      >
        <Text style={styles.NavegacionText}>Nosotros</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.NavegacionItem}
        onPress={() => router.push("/collaborate")}
      >
        <Text style={styles.NavegacionText}>Colaborar</Text>
      </TouchableOpacity>
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
