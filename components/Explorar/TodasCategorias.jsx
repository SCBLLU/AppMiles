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
  faHeartbeat,
  faDumbbell,
  faLeaf,
  faRunning,
  faBiking,
  faSwimmer,
  faPersonPraying,
  faAppleAlt,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../Utils/DarkModeProvider";

const categories = [
  { id: "1", name: "Cardio", icon: faHeartbeat, color: "#FF6B6B" },
  { id: "2", name: "Fuerza", icon: faDumbbell, color: "#4ECDC4" },
  { id: "3", name: "Flexibilidad", icon: faLeaf, color: "#45B649" },
  { id: "4", name: "Correr", icon: faRunning, color: "#FF8C00" },
  { id: "5", name: "Ciclismo", icon: faBiking, color: "#6A5ACD" },
  { id: "6", name: "Natación", icon: faSwimmer, color: "#1E90FF" },
  { id: "7", name: "Meditación", icon: faPersonPraying, color: "#9B59B6" },
  { id: "8", name: "Nutrición", icon: faAppleAlt, color: "#2ECC71" },
  { id: "9", name: "Sueño", icon: faBed, color: "#34495E" },
];

const TodasCategorias = () => {
  const { isDarkMode } = useDarkMode();

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.categoryCard, { backgroundColor: item.color }]}
    >
      <FontAwesomeIcon icon={item.icon} color="#fff" size={40} />
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
      <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}>
        Explorar todo
      </Text>
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
