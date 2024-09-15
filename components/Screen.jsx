// Screen.jsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { useDarkMode } from "./DarkModeProvider"; // Ajusta la ruta según tu estructura

const Screen = ({ children }) => {
    const { isDarkMode } = useDarkMode(); // Obtén el estado del modo oscuro

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: isDarkMode ? "#121212" : "#ffffff" }, // Ajusta el color de fondo
            ]}
        >
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
