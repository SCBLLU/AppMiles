import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDarkMode } from "..//.//.//../components/Utils/DarkModeProvider"; // Ajusta la ruta según tu estructura

const Footer = () => {
  const { isDarkMode } = useDarkMode(); // Obtén el estado del modo oscuro

  // Definimos los colores para el modo claro y oscuro
  const textColor = isDarkMode ? "#bbb" : "#282c34";

  return (
    <View style={[styles.footer]}>
      <Text style={[styles.footerText, { color: textColor }]}>© AcoMiles</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
  },
});

export default Footer;
