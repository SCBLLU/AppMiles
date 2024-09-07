import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";

const Planes = () => {
  const planes = [
    {
      title: "Plan Básico",
      price: "$9.99/mes",
      description: "Acceso a contenido básico",
    },
    {
      title: "Plan Estándar",
      price: "$14.99/mes",
      description: "Acceso a contenido estándar",
    },
    {
      title: "Plan Premium",
      price: "$19.99/mes",
      description: "Acceso a contenido premium",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.bienvenida}>Suscripciones</Text>
      <Text style={styles.infoplanes}>Selecciona un plan para continuar</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.plansContainer}
      >
        {planes.map((plan, index) => (
          <View key={index} style={styles.plan}>
            <Text style={styles.planTitle}>{plan.title}</Text>
            <Text style={styles.planPrice}>{plan.price}</Text>
            <Text style={styles.planDescription}>{plan.description}</Text>
          </View>
        ))}
      </ScrollView>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  bienvenida: {
    color: "#333",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  infoplanes: {
    color: "#666",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
  plansContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
  plan: {
    width: 250,
    height: 120,
    backgroundColor: "#fff",
    marginHorizontal: 12,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    padding: 16,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  planPrice: {
    fontStyle: "bold",
    fontSize: 18,
    marginBottom: 4,
    color: "#999",
  },
  planDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});

export default Planes;
