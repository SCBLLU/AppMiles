import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Link } from "expo-router";
import { House, Gem, UsersRound, Settings } from "lucide-react-native";

const Navegacion = () => {
  return (
    <View style={styles.NavegacionContainer}>
      <Link href="/dashboard" style={styles.NavegacionItem}>
        <House color="black" style={styles.icon} />
      </Link>
      <Link href="/subscriptions" style={styles.NavegacionItem}>
        <Gem color="black" style={styles.icon} />
      </Link>
      <Link href="/collaborate" style={styles.NavegacionItem}>
        <UsersRound color="black" style={styles.icon} />
      </Link>
      <Link href="/settings" style={styles.NavegacionItem}>
        <Settings color="black" style={styles.icon} />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  NavegacionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 10,
    ...Platform.select({
      ios: {
        shadowRadius: 2,
      },
    }),
  },
  NavegacionItem: {
    padding: 10,
    alignItems: "center",
    ...Platform.select({
      ios: {
        marginBottom: 10,
        marginTop: 10,
      },
    }),
  },
  icon: {
    width: 30, 
    height: 30,
    ...Platform.select({
      ios: {
        transform: [{ scale: 1.06 }], // Escala más grande en iOS
      },
      android: {
        transform: [{ scale: 1 }], // Tamaño normal en Android
      },
    }),
  },
});

export default Navegacion;
