import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes, faClock } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../Utils/DarkModeProvider";
import { useRouter } from "expo-router";
import data from "../../data/data.json"; // Importar los datos para obtener la categoría

const BusquedasRecientes = ({ searches, onRemoveSearch }) => {
  const { isDarkMode } = useDarkMode();
  const router = useRouter();

  if (searches.length === 0) {
    return null; // No hay búsquedas recientes
  }

  const handleSearchPress = (exerciseId) => {
    // Navegar a la ruta dinámica
    router.push(`/exercise/${encodeURIComponent(exerciseId)}`);
  };

  const renderItem = ({ item }) => {
    const category = data.categories.find(cat => cat.id === item.category); // Obtener la categoría del ejercicio

    return (
      <TouchableOpacity
        style={[
          styles.searchItem,
          { backgroundColor: isDarkMode ? "#282828" : "#f0f0f0" },
        ]}
        onPress={() => handleSearchPress(item.id)} // Usa item.id en lugar de exerciseId
      >
        <View
          style={[
            styles.categoryCircle,
            { backgroundColor: category ? category.color : "#ccc" }, // Color de la categoría
          ]}
        />
        <View style={styles.searchInfo}>
          <Text
            style={[styles.searchText, { color: isDarkMode ? "#fff" : "#000" }]}
          >
            {item.name}
          </Text>
          <Text
            style={[
              styles.searchSubtext,
              { color: isDarkMode ? "#b3b3b3" : "#666" },
            ]}
          >
            {item.duration} minutos
          </Text>
        </View>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => onRemoveSearch(item)} // Usa el objeto completo para eliminar
        >
          <FontAwesomeIcon
            icon={faTimes}
            size={16}
            color={isDarkMode ? "#b3b3b3" : "#666"}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#121212" : "#fff" },
      ]}
    >
      <View style={styles.header}>
        <FontAwesomeIcon
          icon={faClock}
          size={20}
          color={isDarkMode ? "#fff" : "#000"}
          style={styles.headerIcon}
        />
        <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}>
          Búsquedas recientes
        </Text>
      </View>
      <FlatList
        data={searches}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Usa item.id
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerIcon: {
    marginRight: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  searchItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  categoryCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  searchInfo: {
    flex: 1,
  },
  searchText: {
    fontSize: 16,
    fontWeight: "500",
  },
  searchSubtext: {
    fontSize: 14,
    marginTop: 2,
  },
  removeButton: {
    padding: 8,
  },
});

export default BusquedasRecientes;
