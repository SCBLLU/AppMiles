import React, { useRef, useEffect } from "react";
import { View, ScrollView, StyleSheet, Text, Dimensions } from "react-native";
import { useDarkMode } from "../Utils/DarkModeProvider";

const { width } = Dimensions.get("window");

const Planes = () => {
  const scrollViewRef = useRef(null);
  const { isDarkMode } = useDarkMode(); // Obtener el estado del modo oscuro

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

  // Centrar el Plan Estándar al cargar
  useEffect(() => {
    if (scrollViewRef.current) {
      const offsetX = (width * 0.8 + 34) * 1 - width / 2 + (width * 0.8) / 2;
      scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
    }
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "#121212" : "#fff" }]}>
      <Text style={[styles.bienvenida, { color: isDarkMode ? "#fff" : "#2c3e50" }]}>
        Suscripciones
      </Text>
      <Text style={[styles.informacionplanes, { color: isDarkMode ? "#ccc" : "#666" }]}>
        Selecciona uno de nuestros planes para comenzar tus entrenamientos
      </Text>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.plansContainer}
        snapToAlignment="center"
        snapToInterval={width * 0.8 + 24}
        decelerationRate="fast"
      >
        {planes.map((plan, index) => (
          <View
            key={index}
            style={[
              styles.plan,
              index === 1 && styles.estandar,
              { backgroundColor: isDarkMode ? "#1e1e1e" : "#fff", borderColor: isDarkMode ? "#333" : "transparent" }
            ]}
          >
            <Text style={[styles.planTitle, { color: isDarkMode ? "#fff" : "#191919" }]}>
              {plan.title}
            </Text>
            <Text style={[styles.planPrice, { color: isDarkMode ? "#4caf50" : "#1ed760" }]}>
              {plan.price}
            </Text>
            <Text style={[styles.planDescription, { color: isDarkMode ? "#ddd" : "#191919" }]}>
              {plan.description}
            </Text>
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
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  informacionplanes: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
    width: width * 0.9,
  },
  plansContainer: {
    alignItems: "center",
    paddingVertical: 16,
  },
  plan: {
    width: width * 0.8,
    height: 180,
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
  },
  estandar: {
    borderColor: "#999",
    transform: [{ scale: 1.05 }],
  },
  planTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  planPrice: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 6,
  },
  planDescription: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default Planes;
