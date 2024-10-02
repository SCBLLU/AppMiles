import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDarkMode } from "../../Utils/DarkModeProvider";

export default function SubscriptionCard({
  name,
  type,
  price,
  features,
  onSubscribe,
}) {
  const { isDarkMode } = useDarkMode();

  return (
    <View style={[styles.card, isDarkMode && styles.cardDark]}>
      <Text style={[styles.name, isDarkMode && styles.textLight]}>{name}</Text>
      <Text style={[styles.type, isDarkMode && styles.textMuted]}>{type}</Text>
      <Text style={[styles.price, isDarkMode && styles.priceDark]}>
        ${price}/mes
      </Text>
      <View style={styles.featuresContainer}>
        {features.map((feature, index) => (
          <Text
            key={index}
            style={[styles.feature, isDarkMode && styles.textLight]}
          >
            • {feature}
          </Text>
        ))}
      </View>
      <TouchableOpacity
        style={[
          styles.subscribeButton,
          isDarkMode && styles.subscribeButtonDark,
        ]}
        onPress={onSubscribe}
      >
        <Text style={styles.subscribeButtonText}>Suscribirse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardDark: {
    backgroundColor: "#2c2c2c",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  textLight: {
    color: "#fff",
  },
  textMuted: {
    color: "#b3b3b3",
  },
  type: {
    fontSize: 16,
    marginBottom: 8,
    color: "#666",
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
    color: "#ffa000",
  },
  priceDark: {
    color: "#ffd700",
  },
  featuresContainer: {
    marginBottom: 16,
  },
  feature: {
    fontSize: 14,
    marginBottom: 4,
    color: "#333",
  },
  subscribeButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#009688",
  },
  subscribeButtonDark: {
    backgroundColor: "#FF3D00",
  },
  subscribeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
