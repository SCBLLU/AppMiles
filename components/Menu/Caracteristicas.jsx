import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Users, Book, Activity } from "lucide-react-native"; // Usando lucide-react-native para los íconos

const Características = () => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <Text style={styles.heading}>Características Principales</Text>
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
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Icon width={32} height={32} color="black" style={styles.icon} />
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
      <View style={styles.cardContent}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    width: "100%",
    paddingVertical: 48, // Similar to py-12 in Tailwind
    backgroundColor: "#F3F4F6", // bg-gray-100
  },
  container: {
    paddingHorizontal: 15, // px-4
  },
  heading: {
    fontSize: 36, // sm:text-5xl
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24, // mb-12
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "100%", // Full width in mobile
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5, // For Android shadow
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
    color: "#6B7280", // Similar to gray-500
  },
  cardContent: {
    marginTop: 16,
  },
  button: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default Características;
