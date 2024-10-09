import React, { useState, useCallback } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useRouter } from "expo-router";
import { useDarkMode } from "../../Utils/DarkModeProvider";
import data from "../../../data/data.json";
import ExploreButton from "./ExploreButton";
import SearchInput from "./SearchInput";
import CategorySelector from "./CategorySelector";
import PersonalCard from "./PersonalCard";

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
    <PersonalCard item={item} isDarkMode={isDarkMode} onPress={() => router.push(`/personal/${item.id}`)} />
  );

  const noResultsMessage = () => (
    <Text style={[styles.noResultsText, isDarkMode && styles.textDark]}>
      No se encontró personal que coincida con tu búsqueda.
    </Text>
  );

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      {!showPersonalList ? (
        <ExploreButton onPress={() => setShowPersonalList(true)} isDarkMode={isDarkMode} />
      ) : (
        <>
          <Text style={[styles.title, isDarkMode && styles.textDark]}>Nuestro Personal</Text>
          <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} isDarkMode={isDarkMode} />
          <CategorySelector categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} isDarkMode={isDarkMode} />
          <FlatList
            data={filteredPersonal()}
            renderItem={renderPersonalItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={noResultsMessage} // Muestra el mensaje cuando no hay resultados
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
  listContainer: {
    paddingBottom: 16,
  },
  noResultsText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#333", // Color de texto en modo claro
  },
});

