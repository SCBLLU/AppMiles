import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import data from "../../data/data.json"; // Asegúrate de que esta ruta sea correcta

export default function Personal() {
  const router = useRouter();
  const personal = data.personal || [];
  const [selectedType, setSelectedType] = useState(null);

  const handlePersonalPress = (personal) => {
    router.push(`/personal/${personal.id}`);
  };

  const filteredPersonal = selectedType
    ? personal.filter((p) => p.type === selectedType)
    : personal;

  const renderPersonalItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handlePersonalPress(item)}
    >
      <Image
        source={{ uri: item.imageUrl || "https://via.placeholder.com/100" }}
        style={styles.avatar}
      />
      <View style={styles.textContainer}>
        <Text style={styles.personalName}>{item.name}</Text>
        <Text style={styles.personalType}>{item.type}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Nuestro Personal</Text>

      <View style={styles.buttonContainer}>
        {["Todos", "Entrenador", "Nutricionista"].map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              styles.button,
              selectedType === (type === "Todos" ? null : type) &&
                styles.selectedButton,
            ]}
            onPress={() => setSelectedType(type === "Todos" ? null : type)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedType === (type === "Todos" ? null : type) &&
                  styles.selectedButtonText,
              ]}
            >
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredPersonal}
        renderItem={renderPersonalItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        scrollEnabled={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 20,
    marginHorizontal: 16,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
  },
  selectedButton: {
    backgroundColor: "#FF3D00",
  },
  buttonText: {
    fontSize: 14,
    color: "#333",
  },
  selectedButtonText: {
    color: "#fff",
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
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
    color: "#666",
    marginTop: 4,
  },
});
