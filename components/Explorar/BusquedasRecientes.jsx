import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClock, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../Utils/DarkModeProvider";

const BusquedasRecientes = ({ searches, onSelectSearch, onRemoveSearch }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#333" : "#fff" },
      ]}
    >
      <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}>
        Búsquedas recientes
      </Text>
      {searches.map((search, index) => (
        <View
          key={index}
          style={[
            styles.searchItem,
            { backgroundColor: isDarkMode ? "#444" : "#f9f9f9" },
          ]}
        >
          <TouchableOpacity
            onPress={() => onSelectSearch(search)}
            style={styles.searchButton}
          >
            <FontAwesomeIcon
              icon={faClock}
              color={isDarkMode ? "#fff" : "#000"}
            />
            <Text style={{ color: isDarkMode ? "#ccc" : "#333" }}>
              {search}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onRemoveSearch(search)}>
            <FontAwesomeIcon
              icon={faTimes}
              color={isDarkMode ? "#fff" : "#000"}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  searchItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default BusquedasRecientes;
