import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClock, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../Utils/DarkModeProvider";
import { useRouter } from "expo-router";

const BusquedasRecientes = ({ searches, onSelectSearch, onRemoveSearch }) => {
  const { isDarkMode } = useDarkMode();
  const router = useRouter();

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.searchItem,
        { backgroundColor: isDarkMode ? "#444" : "#f9f9f9" },
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          onSelectSearch(item);
          router.push(`/exercise/${encodeURIComponent(item)}`);
        }}
        style={styles.searchButton}
      >
        <FontAwesomeIcon
          icon={faClock}
          color={isDarkMode ? "#1ac356" : "#000"}
          style={styles.icon}
        />
        <Text style={{ color: isDarkMode ? "#ccc" : "#333" }}>{item}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onRemoveSearch(item)}>
        <FontAwesomeIcon icon={faTimes} color={isDarkMode ? "#fff" : "#000"} />
      </TouchableOpacity>
    </View>
  );

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
      <FlatList
        data={searches}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  searchItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
    marginVertical: 5,
  },
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});

export default BusquedasRecientes;
