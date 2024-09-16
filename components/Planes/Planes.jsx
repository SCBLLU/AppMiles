import React, { useRef, useEffect } from "react";
import { View, ScrollView, StyleSheet, Text, Dimensions } from "react-native";
import { useDarkMode } from "../Utils/DarkModeProvider";
import { FontAwesome } from "@expo/vector-icons"; // Importa los iconos si los necesitas

const { width } = Dimensions.get("window");

const Planes = () => {
  const scrollViewRef = useRef(null);
  const { isDarkMode } = useDarkMode(); // Obtener el estado del modo oscuro

  const planes = [
    {
      nombre: "Básico",
      precio: "9.99€",
      facturacion: "mes",
      descripcion: "Perfecto para empezar",
      caracteristicas: [
        "Registro de entrenamientos básicos",
        "Registro de alimentación básico",
        "Asesoría básica",
        "Acceso a funciones básicas",
      ],
      popular: false,
    },
    {
      nombre: "Pro",
      precio: "19.99€",
      facturacion: "mes",
      descripcion: "Ideal para usuarios avanzados",
      caracteristicas: [
        "Registro de ejercicios avanzado",
        "Registro de alimentación avanzado",
        "Asesoría personalizada",
        "Acceso a todas las funciones",
      ],
      popular: true,
    },
    {
      nombre: "Premium",
      precio: "49.99€",
      facturacion: "mes",
      descripcion: "Para usuarios profesionales",
      caracteristicas: [
        "Registro de ejercicios avanzado",
        "Registro de alimentación avanzado",
        "Asesoría personalizada 24/7",
        "Funciones personalizadas",
      ],
      popular: false,
    },
  ];

  useEffect(() => {
    const timer = global.setTimeout(() => {
      if (scrollViewRef.current) {
        const offsetX = (width * 0.8 + 36) * 1 - width / 2 + (width * 0.8) / 2;
        scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
      }
    }, 100); // Ajusta el tiempo si es necesario

    return () => global.clearTimeout(timer);
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#121212" : "#fff" },
      ]}
    >
      <Text
        style={[styles.bienvenida, { color: isDarkMode ? "#fff" : "#2c3e50" }]}
      >
        Planes de Suscripción
      </Text>
      <Text
        style={[
          styles.informacionplanes,
          { color: isDarkMode ? "#ccc" : "#666" },
        ]}
      >
        Elige el plan que mejor se adapte a tus necesidades
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
        {planes.map((plan) => (
          <View
            key={plan.nombre}
            style={[
              styles.plan,
              plan.popular && styles.popular,
              {
                backgroundColor: isDarkMode ? "#1e1e1e" : "#fff",
                borderColor: isDarkMode ? "#333" : "transparent",
              },
            ]}
          >
            {plan.popular && (
              <View style={styles.popularBadge}>
                <Text style={styles.popularText}>Popular</Text>
              </View>
            )}
            <Text
              style={[
                styles.planTitle,
                { color: isDarkMode ? "#fff" : "#191919" },
              ]}
            >
              {plan.nombre}
            </Text>
            <Text
              style={[
                styles.planPrice,
                { color: isDarkMode ? "#4caf50" : "#1ed760" },
              ]}
            >
              {plan.precio}{" "}
              <Text style={styles.facturacion}>/{plan.facturacion}</Text>
            </Text>
            <Text
              style={[
                styles.planDescription,
                { color: isDarkMode ? "#ddd" : "#191919" },
              ]}
            >
              {plan.descripcion}
            </Text>
            <View style={styles.featuresContainer}>
              {plan.caracteristicas.map((caracteristica) => (
                <View key={caracteristica} style={styles.feature}>
                  <FontAwesome
                    name="check"
                    size={24}
                    color={isDarkMode ? "#4caf50" : "#1ed760"}
                  />
                  <Text
                    style={[
                      styles.featureText,
                      { color: isDarkMode ? "#ddd" : "#191919" },
                    ]}
                  >
                    {caracteristica}
                  </Text>
                </View>
              ))}
            </View>
            <View style={styles.footer}>
              <Text
                style={[
                  styles.subscribeButton,
                  {
                    borderColor: isDarkMode ? "#4caf50" : "#1ed760",
                    color: isDarkMode ? "#4caf50" : "#1ed760",
                  },
                ]}
              >
                Suscribirse
              </Text>
            </View>
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
    fontSize: 24,
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
    height: 400,
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
  popular: {
    borderColor: "#4caf50",
    borderWidth: 2,
  },
  popularBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#4caf50",
    padding: 5,
    borderRadius: 10,
  },
  popularText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    textTransform: "uppercase",
  },
  planTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  planPrice: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 6,
  },
  facturacion: {
    fontSize: 16,
    fontWeight: "400",
    color: "#666",
  },
  planDescription: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
  featuresContainer: {
    marginTop: 10,
    marginBottom: 20,
    width: "100%",
    paddingHorizontal: 10,
  },
  feature: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  featureText: {
    marginLeft: 10,
    fontSize: 14,
  },
  footer: {
    marginTop: 30,
    width: "100%",
  },
  subscribeButton: {
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Planes;
