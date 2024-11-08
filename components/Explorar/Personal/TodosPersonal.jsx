import React, { useState, useCallback } from "react";
import { View, FlatList, StyleSheet, Text, TouchableOpacity, SafeAreaView, Platform } from "react-native";
import { useRouter } from "expo-router";
import { useDarkMode } from "../../Utils/DarkModeProvider";
import data from "../../../data/data.json";
import ExploreButton from "./ExploreButton";
import SearchInput from "./SearchInput";
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
    <SafeAreaView style={[styles.container, isDarkMode && styles.containerDark]}>
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

          <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            isDarkMode={isDarkMode}
          />

          <View style={styles.categoryContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryButton,
                  selectedCategory === category.id && styles.selectedCategoryButton,
                  isDarkMode && styles.categoryButtonDark,
                  selectedCategory === category.id && isDarkMode && styles.selectedCategoryButtonDark,
                ]}
                onPress={() => setSelectedCategory(category.id)}
              >
                <Text
                  style={[
                    styles.categoryButtonText,
                    selectedCategory === category.id && styles.selectedCategoryButtonText,
                    isDarkMode && styles.categoryButtonTextDark,
                    selectedCategory === category.id && isDarkMode && styles.selectedCategoryButtonTextDark,
                  ]}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
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
    </SafeAreaView>
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
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    marginHorizontal: 4,
    alignItems: 'center',
  },
  categoryButtonDark: {
    backgroundColor: "#333",
  },
  selectedCategoryButton: {
    backgroundColor: "#1DB954",
  },
  selectedCategoryButtonDark: {
    backgroundColor: "#1DB954",
  },
  categoryButtonText: {
    color: "#333",
    fontWeight: "300",
  },
  categoryButtonTextDark: {
    color: "#fff",
  },
  selectedCategoryButtonText: {
    color: "#fff",
  },
  selectedCategoryButtonTextDark: {
    color: "#fff",
  },
  listContainer: {
    paddingBottom: 20,
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