import React, { useState, useCallback } from "react";
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useDarkMode } from "../../Utils/DarkModeProvider";
import data from "../../../data/data.json";
import ExploreButton from "./ExploreButton";
import SearchInput from "./SearchInput";
import CategorySelector from "./CategorySelector";
import PersonalCard from "./PersonalCard";
import { Ionicons } from '@expo/vector-icons';

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
  const [showAll, setShowAll] = useState(false);
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

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedPersonal = showAll ? filteredPersonal() : filteredPersonal().slice(0, 3);

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <Text style={[styles.encabezado, isDarkMode && styles.textDark]}>
        Explorar todo
      </Text>
      {!showPersonalList ? (
        <ExploreButton onPress={() => setShowPersonalList(true)} isDarkMode={isDarkMode} />
      ) : (
        <>
          <View style={styles.headerContainer}>
            <Text style={[styles.title, isDarkMode && styles.textDark]}>Nuestro Personal</Text>
            <TouchableOpacity onPress={() => setShowPersonalList(false)} style={styles.closeButton}>
              <Ionicons name="close" size={24} color={isDarkMode ? "#fff" : "#000"} />
            </TouchableOpacity>
          </View>

          <View style={styles.searchAndCategoryContainer}>
            <SearchInput
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              isDarkMode={isDarkMode}
            />
            <CategorySelector
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              isDarkMode={isDarkMode}
            />
          </View>

          <FlatList
            data={displayedPersonal}
            renderItem={renderPersonalItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={noResultsMessage}
            scrollEnabled={false}
          />

          {filteredPersonal().length > 3 && (
            <TouchableOpacity onPress={handleToggleShowAll} style={styles.toggleButton}>
              <Text style={styles.toggleButtonText}>
                {showAll ? "Ver menos" : "Ver más"}
              </Text>
              <Ionicons
                name={showAll ? "chevron-up" : "chevron-down"}
                size={20}
                color="#fff"
                style={styles.toggleButtonIcon}
              />
            </TouchableOpacity>
          )}
        </>
      )}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  encabezado: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  closeButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  noResultsText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#333",
  },
  toggleButton: {
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#1DB954",
    borderRadius: 25,
  },
  toggleButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 5,
  },
  toggleButtonIcon: {
    marginLeft: 5,
  },
  textDark: {
    color: "#fff",
  },
});
