import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions } from "react-native";
import { Users, Book } from "lucide-react-native";
import { useDarkMode } from "../Utils/DarkModeProvider";
import { useRouter } from "expo-router";

const Caracteristicas = () => {
  const { isDarkMode } = useDarkMode();
  const router = useRouter();
  const { width } = useWindowDimensions();

  const navigateToExplore = () => {
    router.push("/explore");
  };

  const isSmallScreen = width < 768;

  return (
    <View style={[
      styles.section,
      { backgroundColor: isDarkMode ? "#1A1A1A" : "#F3F4F6" }
    ]}>
      <View style={styles.container}>
        <Text style={[
          styles.heading,
          { color: isDarkMode ? "#fff" : "#000" }
        ]}>
          Características Principales
        </Text>
        <View style={[styles.grid, isSmallScreen && styles.gridSmall]}>
          <FeatureCard
            Icon={Users}
            title="Entrenadores Reales"
            description="Recibe orientación personalizada de expertos certificados en fitness."
            buttonText="Ver Entrenadores"
            onPress={navigateToExplore}
            isDarkMode={isDarkMode}
            isSmallScreen={isSmallScreen}
          />
          <FeatureCard
            Icon={Book}
            title="Ejercicios Especializados"
            description="Aprende técnicas avanzadas con nuestros ejercicios detallados."
            buttonText="Explorar Ejercicios"
            onPress={navigateToExplore}
            isDarkMode={isDarkMode}
            isSmallScreen={isSmallScreen}
          />
        </View>
      </View>
    </View>
  );
};

const FeatureCard = ({ Icon, title, description, buttonText, onPress, isDarkMode, isSmallScreen }) => {
  return (
    <View style={[
      styles.card,
      { backgroundColor: isDarkMode ? "#2C2C2C" : "#fff" },
      isSmallScreen && styles.cardSmall
    ]}>
      <View style={styles.cardHeader}>
        <Icon
          width={48}
          height={48}
          color={isDarkMode ? "#1DB954" : "#0F9D58"}
          style={styles.icon}
        />
        <Text style={[
          styles.cardTitle,
          { color: isDarkMode ? "#fff" : "#000" }
        ]}>
          {title}
        </Text>
        <Text style={[
          styles.cardDescription,
          { color: isDarkMode ? "#ccc" : "#6B7280" }
        ]}>
          {description}
        </Text>
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isDarkMode ? "#1DB954" : "#0F9D58" }
        ]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingVertical: 48,
    margin: 16,
    borderRadius: 24,
    elevation: 4,
  },
  container: {
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 32,
    letterSpacing: 0.5,
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gridSmall: {
    flexDirection: "column",
  },
  card: {
    width: "48%",
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  cardSmall: {
    width: "100%",
  },
  cardHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
  },
  cardDescription: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Caracteristicas;