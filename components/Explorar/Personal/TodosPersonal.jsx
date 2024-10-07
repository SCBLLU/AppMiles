import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { useDarkMode } from "..//../Utils/DarkModeProvider";
import { Ionicons } from '@expo/vector-icons';
import data from "../../../data/data.json";

const categories = [
  { id: "all", name: "Todos" },
  { id: "trainer", name: "Entrenadores" },
  { id: "nutritionist", name: "Nutricionistas" },
];

export default function PersonalScreen() {
  const { isDarkMode } = useDarkMode();
  const [showPersonalList, setShowPersonalList] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredPersonal = useCallback(() => {
    let filtered = data.personal;
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (p) => p.type.toLowerCase() === (selectedCategory === "trainer" ? "entrenador" : "nutricionista")
      );
    }
    if (searchQuery) {
      filtered = filtered.filter(
        (p) => p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }, [selectedCategory, searchQuery]);

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
        <View style={styles.rankContainer}>
          <Ionicons name="star" size={16} color={isDarkMode ? "#ffd700" : "#ffa000"} />
          <Text style={[styles.personalRank, isDarkMode && styles.rankDark]}>
            {item.ranking || "N/A"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      {!showPersonalList ? (
        <TouchableOpacity
          style={[styles.button, isDarkMode && styles.buttonDark]}
          onPress={() => setShowPersonalList(true)}
        >
          <Text style={styles.buttonText}>Explorar Personal</Text>
        </TouchableOpacity>
      ) : (
        <>
          <Text style={[styles.title, isDarkMode && styles.textDark]}>
            Nuestro Personal
          </Text>

          <View style={[styles.searchContainer, isDarkMode && styles.searchContainerDark]}>
            <Ionicons name="search" size={24} color={isDarkMode ? "#fff" : "#333"} style={styles.searchIcon} />
            <TextInput
              style={[styles.searchInput, isDarkMode && styles.searchInputDark]}
              placeholder="Buscar personal..."
              placeholderTextColor={isDarkMode ? "#b3b3b3" : "#999"}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

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
                    selectedCategory === category.id &&
                    styles.selectedCategoryText,
                    isDarkMode && styles.textDark,
                  ]}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <FlatList
            data={filteredPersonal()}
            renderItem={renderPersonalItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  containerDark: {
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
    textAlign: "center",
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
  button: {
    backgroundColor: "#007BFF",
    padding: 16,
    borderRadius: 8,
    alignSelf: "center",
  },
  buttonDark: {
    backgroundColor: "#333",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchContainerDark: {
    backgroundColor: "#2c2c2c",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
  },
  searchInputDark: {
    backgroundColor: "#2c2c2c",
    color: "#fff",
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
    borderRadius: 12,
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
    backgroundColor: "#333",
    shadowColor: "#121212",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  textContainer: {
    flex: 1,
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
  rankContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  personalRank: {
    fontSize: 14,
    fontWeight: "500",
    color: "#ffa000",
    marginLeft: 4,
  },
});
