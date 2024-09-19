import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useLocalSearchParams } from "expo-router";
import data from "../../data/data.json"; // Ajusta la ruta si es necesario

export default function CategoryDetails() {
    const { category } = useLocalSearchParams();

    // Buscar la categoría correspondiente en los datos importados
    const selectedCategory = data.categories.find((cat) => cat.name === category);

    if (!selectedCategory) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Cargando... </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FontAwesomeIcon icon={selectedCategory.icon} color={selectedCategory.color} size={80} />
            <Text style={styles.title}>{selectedCategory.name}</Text>
            <Text style={styles.description}>
                Aquí puedes mostrar información detallada sobre {selectedCategory.name}, como beneficios, instrucciones, etc.
            </Text>
        </View>
    );
}

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
    },
});
