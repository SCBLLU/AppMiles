import React from "react";
import { View, ScrollView, StyleSheet, Text, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Planes = () => {
  const planes = [
    {
      title: "Plan Básico",
      price: "$9.99/mes",
      description: "Acceso a entrenamientos básicos y seguimiento de progreso.",
    },
    {
      title: "Plan Estándar",
      price: "$14.99/mes",
      description:
        "Acceso a entrenamientos avanzados y recomendaciones personalizadas.",
    },
    {
      title: "Plan Premium",
      price: "$19.99/mes",
      description:
        "Acceso completo a entrenamientos personalizados y soporte prioritario.",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.bienvenida}>Suscripciones</Text>
      <Text style={styles.informacionplanes}>
        Selecciona un plan para comenzar tus entrenamientos
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.plansContainer}
        snapToAlignment="center"
        snapToInterval={width * 0.8 + 24} // Ajuste de alineación al centro
        decelerationRate="fast"
        pagingEnabled
      >
        {planes.map((plan, index) => (
          <View
            key={index}
            style={[
              styles.plan,
              index === 1 && styles.estandar, // Resalta el plan estándar
            ]}
          >
            <Text style={styles.planTitle}>{plan.title}</Text>
            <Text style={styles.planPrice}>{plan.price}</Text>
            <Text style={styles.planDescription}>{plan.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  bienvenida: {
    color: "#2c3e50",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  informacionplanes: {
    color: "#34495e",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  plansContainer: {
    alignItems: "center",
    paddingVertical: 16,
  },
  plan: {
    width: width * 0.8,
    height: 180,
    backgroundColor: "#fff",
    marginHorizontal: 12,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    padding: 20,
    borderWidth: 2,
    borderColor: "transparent",
  },
  estandar: {
    borderColor: "#2980b9", // Resalta el plan Estándar con un borde azul
    transform: [{ scale: 1.05 }], // Aumenta el tamaño del plan estándar
  },
  planTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2980b9",
  },
  planPrice: {
    fontSize: 20,
    fontWeight: "600",
    color: "#27ae60",
    marginBottom: 6,
  },
  planDescription: {
    fontSize: 14,
    color: "#7f8c8d",
    textAlign: "center",
  },
});

export default Planes;
