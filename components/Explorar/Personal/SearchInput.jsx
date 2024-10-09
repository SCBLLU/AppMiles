import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const SearchInput = ({ searchQuery, setSearchQuery, isDarkMode }) => (
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
);

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
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
});

export default SearchInput;
