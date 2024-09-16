import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Link } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faGem,
  faUsers,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../components/Utils/DarkModeProvider"; // Importa el modo oscuro

const Navegacion = () => {
  const { isDarkMode } = useDarkMode(); // Obtiene el estado del modo oscuro

  return (
    <View
      style={[
        styles.NavegacionContainer,
        { backgroundColor: isDarkMode ? "#333" : "#ffffff" },
      ]}
    >
      <Link href="/dashboard" style={styles.NavegacionItem}>
        <FontAwesomeIcon
          icon={faHome}
          size={25}
          style={[styles.icon, { color: isDarkMode ? "#fff" : "#000" }]}
        />
      </Link>
      <Link href="/subscriptions" style={styles.NavegacionItem}>
        <FontAwesomeIcon
          icon={faGem}
          size={25}
          style={[styles.icon, { color: isDarkMode ? "#fff" : "#000" }]}
        />
      </Link>
      <Link href="/collaborate" style={styles.NavegacionItem}>
        <FontAwesomeIcon
          icon={faUsers}
          size={25}
          style={[styles.icon, { color: isDarkMode ? "#fff" : "#000" }]}
        />
      </Link>
      <Link href="/settings" style={styles.NavegacionItem}>
        <FontAwesomeIcon
          icon={faCog}
          size={25}
          style={[styles.icon, { color: isDarkMode ? "#fff" : "#000" }]}
        />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  NavegacionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 5,
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
