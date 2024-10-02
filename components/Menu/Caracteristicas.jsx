import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Users, Book, Activity } from "lucide-react-native"; // Usando lucide-react-native para los íconos
import { useDarkMode } from "../Utils/DarkModeProvider";

const Características = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <View
      style={[
        styles.section,
        { backgroundColor: isDarkMode ? "#333" : "#F3F4F6" },
      ]}
    >
      <View style={styles.container}>
        <Text style={[styles.heading, { color: isDarkMode ? "#fff" : "#000" }]}>
          Características Principales
        </Text>
        <View style={styles.grid}>
          <FeatureCard
            Icon={Users}
            title="Entrenadores Reales"
            description="Recibe orientación personalizada de expertos certificados en fitness."
            buttonText="Ver Entrenadores"
          />
          <FeatureCard
            Icon={Book}
            title="Cursos Especializados"
            description="Aprende técnicas avanzadas con nuestros cursos detallados."
            buttonText="Explorar Cursos"
          />
          <FeatureCard
            Icon={Activity}
            title="Seguimiento de Progreso"
            description="Monitorea tu evolución y alcanza tus metas más rápido."
            buttonText="Iniciar Seguimiento"
          />
        </View>
      </View>
    </View>
  );
};

const FeatureCard = ({ Icon, title, description, buttonText }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <View
      style={[styles.card, { backgroundColor: isDarkMode ? "#444" : "#fff" }]}
    >
      <View style={styles.cardHeader}>
        <Icon
          width={32}
          height={32}
          color={isDarkMode ? "#fff" : "#000"}
          style={styles.icon}
        />
        <Text
          style={[styles.cardTitle, { color: isDarkMode ? "#fff" : "#000" }]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.cardDescription,
            { color: isDarkMode ? "#ccc" : "#6B7280" },
          ]}
        >
          {description}
        </Text>
      </View>
      <View style={styles.cardContent}>
        <TouchableOpacity
          style={[styles.button, { borderColor: isDarkMode ? "#fff" : "#000" }]}
        >
          <Text
            style={[styles.buttonText, { color: isDarkMode ? "#fff" : "#000" }]}
          >
            {buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingVertical: 48,
    margin: 15,
    borderRadius: 20,
  },
  container: {
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "100%",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  cardHeader: {
    alignItems: "center",
    marginBottom: 16,
  },
  icon: {
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    textAlign: "center",
  },
  cardContent: {
    marginTop: 16,
  },
  button: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default Características;
