import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const CategorySelector = ({ categories, selectedCategory, setSelectedCategory, isDarkMode }) => (
    <View style={styles.categoryContainer}>
        {categories.map((category) => (
            <TouchableOpacity
                key={category.id}
                style={[
                    styles.categoryButton,
                    selectedCategory === category.id && styles.selectedCategory,
                    isDarkMode && styles.categoryButtonDark,
                    selectedCategory === category.id && isDarkMode && styles.selectedCategoryDark, // Añadido para el modo oscuro
                ]}
                onPress={() => setSelectedCategory(category.id)}
            >
                <Text
                    style={[
                        styles.categoryText,
                        isDarkMode && styles.textDark, // Aplica color blanco en modo oscuro
                        selectedCategory === category.id
                            ? (isDarkMode ? styles.selectedCategoryTextDark : styles.selectedCategoryText)
                            : (isDarkMode ? styles.unselectedTextDark : styles.categoryText)
                    ]}
                >
                    {category.name}
                </Text>
            </TouchableOpacity>
        ))}
    </View>
);

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20,
        marginTop: 10,

    },
    categoryButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        backgroundColor: "#e0e0e0", // Color claro para el modo claro
        elevation: 3, // Sombra para el modo claro
    },
    categoryButtonDark: {
        backgroundColor: "#444", // Color más oscuro para el modo oscuro
        elevation: 5, // Mayor sombra en modo oscuro
    },
    selectedCategory: {
        backgroundColor: "#282c34", // Color de fondo cuando está seleccionado (modo claro)
    },
    selectedCategoryDark: {
        backgroundColor: "#3be477", // Color de fondo cuando está seleccionado (modo oscuro)
    },
    categoryText: {
        fontSize: 14,
        color: "#333", // Color de texto en modo claro
        fontWeight: "600",
    },
    selectedCategoryText: {
        color: "#fff", // Color del texto cuando está seleccionado en modo claro
        fontWeight: "bold",
    },
    selectedCategoryTextDark: {
        color: "#000", // Color del texto cuando está seleccionado en modo oscuro
        fontWeight: "bold",
    },
    unselectedTextDark: {
        color: "#fff", // Color del texto cuando no está seleccionado en modo oscuro
        fontWeight: "600",
    },
});

export default CategorySelector;
