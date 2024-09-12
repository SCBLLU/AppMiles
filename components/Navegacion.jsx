import React from "react";
import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { House, Gem, UsersRound, Settings } from "lucide-react-native";

const Navegacion = () => {
  return (
    <View style={styles.NavegacionContainer}>
      <Link href="/dashboard" style={styles.NavegacionItem}>
        <House size={24} color="black" style={styles.icon} />
      </Link>
      <Link href="/subscriptions" style={styles.NavegacionItem}>
        <Gem size={24} color="black" style={styles.icon} />
      </Link>
      <Link href="/collaborate" style={styles.NavegacionItem}>
        <UsersRound size={24} color="black" style={styles.icon} />
      </Link>
      <Link href="/settings" style={styles.NavegacionItem}>
        <Settings size={24} color="black" style={styles.icon} />
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
    alignItems: "center",
  },
  NavegacionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  icon: {
    marginBottom: 5,
  },
});

export default Navegacion;
