import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { useDarkMode } from "./DarkModeProvider"; // Ajusta la ruta según tu estructura

const Screen = ({ children }) => {
  const { isDarkMode } = useDarkMode(); // Obtén el estado del modo oscuro

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#121212" : "#fff" }, // Ajusta el color de fondo
      ]}
    >
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"} // Define el estilo del contenido del estatus bar
        backgroundColor={isDarkMode ? "#121212" : "#fff"} // Define el color de fondo del estatus bar
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
