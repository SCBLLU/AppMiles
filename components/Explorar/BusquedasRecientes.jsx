import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes, faClock } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../Utils/DarkModeProvider";
import { useRouter } from "expo-router";

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

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.searchItem,
        { backgroundColor: isDarkMode ? "#282828" : "#f0f0f0" },
      ]}
      onPress={() => handleSearchPress(item.id)} // Usa item.id en lugar de exerciseId
    >
      <Image
        source={{ uri: item.imageUrl || "https://placeholder.com/40" }} // Cambia aquí si tienes una imagen por defecto
        style={styles.exerciseImage}
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
  exerciseImage: {
    width: 40,
    height: 40,
    borderRadius: 4,
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
