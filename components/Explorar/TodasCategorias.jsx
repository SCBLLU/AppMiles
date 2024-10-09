import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHeartbeat, // Cardio
  faDumbbell,  // Fuerza
  faLeaf,      // Flexibilidad
  faRunning,   // Correr
  faBiking,    // Bicicleta
  faSwimmer,   // Natación
  faPersonPraying, // Meditación
  faAppleAlt,  // Nutrición
  faBed        // Sueño
} from "@fortawesome/free-solid-svg-icons";

import { useDarkMode } from "../Utils/DarkModeProvider";
import { useRouter } from "expo-router";
import data from "../../data/data.json"; // Asegúrate de que esta ruta sea correcta

// Extraer categorías del archivo JSON
export const categories = data.categories || [];

export const iconMap = {
  faHeartbeat: faHeartbeat,
  faDumbbell: faDumbbell,
  faLeaf: faLeaf,
  faRunning: faRunning,
  faBiking: faBiking,
  faSwimmer: faSwimmer,
  faPersonPraying: faPersonPraying,
  faAppleAlt: faAppleAlt,
  faBed: faBed,
};

const TodasCategorias = () => {
  const { isDarkMode } = useDarkMode();
  const router = useRouter();

  // Manejar si los datos no están disponibles
  if (!categories.length) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Cargando categorías...</Text>
      </View>
    );
  }

  const handleResultPress = (category) => {
    router.push(`/categories/${category.id}`, {
      description: category.description,
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryCard, { backgroundColor: item.color }]}
      onPress={() => handleResultPress(item)}
    >
      <FontAwesomeIcon icon={iconMap[item.icon]} color="#fff" size={40} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#121212" : "#fff" },
      ]}
    >

      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    color: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  listContainer: {
    paddingBottom: 16,
  },
  categoryCard: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    margin: 8,
    padding: 16,
  },
  categoryName: {
    color: "#fff",
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default TodasCategorias;
