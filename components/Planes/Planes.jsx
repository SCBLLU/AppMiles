import React, { useRef, useEffect } from "react";
import { View, ScrollView, StyleSheet, Text, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Planes = () => {
  const scrollViewRef = useRef(null);

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
    <View style={styles.container}>
      <Text style={styles.bienvenida}>Suscripciones</Text>



      <Text style={styles.informacionplanes}>
        Selecciona unp de nuestros planes para comenzar tus entrenamientos
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
            style={[styles.plan, index === 1 && styles.estandar]}
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
    color: "#666",
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
    borderColor: "#999",
    transform: [{ scale: 1.05 }],
  },
  planTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#191919",
  },
  planPrice: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1ed760",
    marginBottom: 6,
  },
  planDescription: {
    fontSize: 14,
    color: "#191919",
    textAlign: "center",
  },
});

export default Planes;
