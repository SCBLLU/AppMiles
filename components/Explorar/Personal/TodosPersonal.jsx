import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { useDarkMode } from "../../Utils/DarkModeProvider";
import data from "../../../data/data.json";

const categories = [
  { id: "all", name: "Todos" },
  { id: "trainer", name: "Entrenadores" },
  { id: "nutritionist", name: "Nutricionistas" },
];

export default function PersonalList() {
  const router = useRouter();
  const { isDarkMode } = useDarkMode();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPersonal =
    selectedCategory === "all"
      ? data.personal
      : data.personal.filter((p) => p.type.toLowerCase() === selectedCategory);

  const renderPersonalItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, isDarkMode && styles.cardDark]}
      onPress={() => router.push(`/personal/${item.id}`)}
    >
      <Image
        source={{ uri: item.imageUrl || "https://via.placeholder.com/100" }}
        style={styles.avatar}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.personalName, isDarkMode && styles.textDark]}>
          {item.name}
        </Text>
        <Text style={[styles.personalType, isDarkMode && styles.textMutedDark]}>
          {item.type}
        </Text>
        <Text style={[styles.personalRank, isDarkMode && styles.rankDark]}>
          Ranking: {item.ranking || "N/A"}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <Text style={[styles.title, isDarkMode && styles.textDark]}>
        Nuestro Personal
      </Text>

      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && styles.selectedCategory,
              isDarkMode && styles.categoryButtonDark,
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.id && styles.selectedCategoryText,
                isDarkMode && styles.textDark,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredPersonal}
        renderItem={renderPersonalItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  containerDark: {
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  textDark: {
    color: "#fff",
  },
  textMutedDark: {
    color: "#b3b3b3",
  },
  rankDark: {
    color: "#ffd700",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
  },
  categoryButtonDark: {
    backgroundColor: "#333",
  },
  selectedCategory: {
    backgroundColor: "#FF3D00",
  },
  categoryText: {
    fontSize: 14,
    color: "#333",
  },
  selectedCategoryText: {
    color: "#fff",
    fontWeight: "bold",
  },
  listContainer: {
    paddingBottom: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardDark: {
    backgroundColor: "#2c2c2c",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textContainer: {
    marginLeft: 16,
  },
  personalName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  personalType: {
    fontSize: 14,
    marginTop: 4,
    color: "#666",
  },
  personalRank: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: "500",
    color: "#ffa000",
  },
});
