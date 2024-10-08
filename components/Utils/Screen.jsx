import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { useDarkMode } from "./DarkModeProvider"; // Ajusta la ruta según tu estructura

const Screen = ({ children }) => {
  const { isDarkMode } = useDarkMode(); // Obtén el estado del modo oscuro

  // Definimos los colores para el modo claro y oscuro
  const backgroundColor = isDarkMode ? "#121212" : "#ffffff";
  const statusBarStyle = isDarkMode ? "light-content" : "dark-content";

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar
        barStyle={statusBarStyle} // Define el estilo del contenido del estatus bar
        backgroundColor={backgroundColor} // Define el color de fondo del estatus bar
        translucent={false} // Evita que el estatus bar sea transparente
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Screen;
