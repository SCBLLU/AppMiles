import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useDarkMode } from "../Utils/DarkModeProvider";

const ResultadosBusqueda = ({ results }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#333" : "#fff" },
      ]}
    >
      <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}>
        Resultados de búsqueda
      </Text>
      <FlatList
        data={results}
        renderItem={({ item }) => (
          <View
            style={[
              styles.resultCard,
              { backgroundColor: isDarkMode ? "#444" : "#f9f9f9" },
            ]}
          >
            <Text style={{ color: isDarkMode ? "#fff" : "#000" }}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
  resultCard: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
});

export default ResultadosBusqueda;
