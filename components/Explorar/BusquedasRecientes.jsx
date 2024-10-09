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
import data from "../../data/data.json";

const BusquedasRecientes = ({ searches, onRemoveSearch }) => {
  const { isDarkMode } = useDarkMode();
  const router = useRouter();

  if (!searches || searches.length === 0) {
    return null;
  }

  const handleSearchPress = (exerciseId) => {
    router.push(`/exercise/${encodeURIComponent(exerciseId)}`);
  };

  const renderItem = ({ item }) => {
    const category = data.categories.find(cat => cat.id === item.category);

    return (
      <TouchableOpacity
        style={[
          styles.searchItem,
          { backgroundColor: isDarkMode ? "#282828" : "#f0f0f0" },
        ]}
        onPress={() => handleSearchPress(item.id)}
        activeOpacity={0.8}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

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
            {category ? category.name : "Categoría desconocida"}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => onRemoveSearch(item)}
          activeOpacity={0.7}
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
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    marginRight: 8,
    height: 70, // Establece una altura fija
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    marginRight: 12,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", // Asegúrate de que la imagen mantenga su aspecto
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
