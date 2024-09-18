import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useDarkMode } from "../Utils/DarkModeProvider";
import { useRouter } from "expo-router";

const ResultadosBusqueda = ({ results }) => {
  const { isDarkMode } = useDarkMode();
  const router = useRouter();

  const handleResultPress = (exercise) => {
    router.push(`/exercise/${encodeURIComponent(exercise)}`);
  };

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
          <TouchableOpacity
            style={[
              styles.resultCard,
              { backgroundColor: isDarkMode ? "#444" : "#f9f9f9" },
            ]}
            onPress={() => handleResultPress(item)}
          >
            <Image
              source={{ uri: "https://via.placeholder.com/50" }}
              style={styles.exerciseImage}
            />
            <Text
              style={{ color: isDarkMode ? "#fff" : "#000", marginLeft: 10 }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
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
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  exerciseImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default ResultadosBusqueda;
