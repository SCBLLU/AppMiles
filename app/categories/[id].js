import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useLocalSearchParams } from "expo-router";
import { iconMap, categories } from "../../components/Explorar/TodasCategorias";

const CategoryDetails = () => {
    const { id } = useLocalSearchParams();
    // Buscar la categoría correspondiente en los datos
    const selectedCategory = categories.find((cat) => cat.id === String(id));

    // Condición de carga
    if (!selectedCategory) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Categoría no encontrada.</Text>
            </View>
        );
    }

    // Renderizar información de la categoría
    return (
        <View style={styles.container}>
            <FontAwesomeIcon
                icon={iconMap[selectedCategory.icon]}
                color={selectedCategory.color}
                size={80}
            />
            <Text style={styles.title}>{selectedCategory.name}</Text>
            <Text style={styles.description}>
                {selectedCategory.description || "No hay descripción disponible."}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 10,
    },
});

export default CategoryDetails;
