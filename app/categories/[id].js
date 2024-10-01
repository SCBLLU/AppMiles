import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useLocalSearchParams } from "expo-router";
import { iconMap, categories } from "../../components/Explorar/TodasCategorias";
import data from "../../data/data.json"; // Asegúrate de que esta ruta sea correcta
import { useRouter } from "expo-router"; // Asegúrate de importar useRouter
import { useDarkMode } from "../../components/Utils/DarkModeProvider"; // Importa el modo oscuro

const CategoryDetails = () => {
    const { id } = useLocalSearchParams();
    const router = useRouter(); // Inicializa el enrutador
    const { isDarkMode } = useDarkMode(); // Obtén el estado del modo oscuro

    // Buscar la categoría correspondiente en los datos
    const selectedCategory = categories.find((cat) => cat.id === String(id));

    // Obtener todos los ejercicios de la categoría
    const exercises = data.exercises.filter(
        (exercise) => exercise.category === selectedCategory.id
    );

    // Condición de carga
    if (!selectedCategory) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Categoría no encontrada.</Text>
            </View>
        );
    }

    // Manejar la navegación a los detalles del ejercicio
    const handleExercisePress = (exercise) => {
        router.push(`/exercise/${encodeURIComponent(exercise.id)}`); // Navegar a los detalles del ejercicio
    };

    // Renderizar información de la categoría
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: isDarkMode ? "#121212" : "#fff" },
            ]}
        >
            <View style={[styles.categoryHeader, { backgroundColor: isDarkMode ? "#1e1e1e" : "#fff" }]}>
                <FontAwesomeIcon
                    icon={iconMap[selectedCategory.icon]}
                    color={selectedCategory.color}
                    size={80}
                />
                <View style={styles.categoryTextContainer}>
                    <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}>
                        {selectedCategory.name}
                    </Text>
                    <Text
                        style={[
                            styles.description,
                            { color: isDarkMode ? "#b3b3b3" : "#666" },
                        ]}
                    >
                        {selectedCategory.description || "No hay descripción disponible."}
                    </Text>
                </View>
            </View>

            {/* Renderizar la lista de ejercicios */}
            <Text
                style={[styles.exercisesTitle, { color: isDarkMode ? "#fff" : "#000" }]}
            >
                Ejercicios de esta categoría:
            </Text>

            {exercises.length === 0 ? (
                <Text style={[styles.noExercisesText, { color: isDarkMode ? "#b3b3b3" : "#666" }]}>
                    No hay ejercicios agregados en esta categoría por el momento.
                </Text>
            ) : (
                <FlatList
                    data={exercises}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.exerciseItem,
                                {
                                    backgroundColor: isDarkMode ? "#1e1e1e" : "#f9f9f9",
                                    borderColor: selectedCategory.color,
                                },
                            ]}
                            onPress={() => handleExercisePress(item)}
                        >
                            <Text
                                style={[
                                    styles.exerciseName,
                                    { color: isDarkMode ? "#fff" : "#000" },
                                ]}
                            >
                                {item.name}
                            </Text>
                            <Text
                                style={[
                                    styles.exerciseDetails,
                                    { color: isDarkMode ? "#b3b3b3" : "#666" },
                                ]}
                            >
                                Duración: {item.duration} min | Calorías: {item.calories}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ paddingBottom: 100 }} // Espacio adicional al final
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "flex-start",
    },
    categoryHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        padding: 20,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    categoryTextContainer: {
        marginLeft: 20,
        flex: 1,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
    },
    description: {
        fontSize: 16,
        textAlign: "left",
        marginTop: 5,
    },
    exercisesTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
    },
    exerciseItem: {
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
    },
    exerciseName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    exerciseDetails: {
        fontSize: 14,
        marginTop: 5,
    },
    noExercisesText: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 20,
        fontStyle: "italic",
    },
});

export default CategoryDetails;
