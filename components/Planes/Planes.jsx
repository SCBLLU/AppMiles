import React, { useRef, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../Utils/DarkModeProvider"; 

const { width } = Dimensions.get("window");

const PlanCard = ({ plan, onSelect, isDarkMode }) => (
  <View
    style={[
      styles.card,
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
      style={[styles.cardTitle, { color: isDarkMode ? "#fff" : "#191919" }]}
    >
      {plan.name}
    </Text>
    <Text
      style={[
        styles.cardDescription,
        { color: isDarkMode ? "#4caf50" : "#1ed760" },
      ]}
    >
      {plan.price}/{plan.billing}
    </Text>
    <Text
      style={[
        styles.planDescription,
        { color: isDarkMode ? "#ddd" : "#191919" },
      ]}
    >
      {plan.description}
    </Text>
    <View style={styles.featuresContainer}>
      {plan.features.map((feature, index) => (
        <View key={index} style={styles.feature}>
          <FontAwesomeIcon
            icon={faCheck}
            color={isDarkMode ? "#4caf50" : "#1ed760"}
          />
          <Text
            style={[
              styles.featureText,
              { color: isDarkMode ? "#ddd" : "#191919" },
            ]}
          >
            {feature}
          </Text>
        </View>
      ))}
    </View>
    <Text
      style={[
        styles.subscribeButton,
        {
          borderColor: isDarkMode ? "#4caf50" : "#1ed760",
          color: isDarkMode ? "#4caf50" : "#1ed760",
        },
      ]}
      onPress={() => onSelect(plan)}
    >
      Suscribirse
    </Text>
  </View>
);

export default function SubscriptionPlans({ onPlanSelect }) {
  const { isDarkMode } = useDarkMode();
  const scrollViewRef = useRef(null); 

  const planes = [
    {
      name: "Básico",
      price: "9.99€",
      billing: "mes",
      description: "Perfecto para empezar",
      features: [
        "Registro de entrenamientos básicos",
        "Registro de alimentación básico",
        "Asesoría básica",
        "Acceso a funciones básicas",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "19.99€",
      billing: "mes",
      description: "Ideal para usuarios avanzados",
      features: [
        "Registro de ejercicios avanzado",
        "Registro de alimentación avanzado",
        "Asesoría personalizada",
        "Acceso a todas las funciones",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "49.99€",
      billing: "mes",
      description: "Para usuarios profesionales",
      features: [
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
        const offsetX = (width * 0.8 + 46) * 1 - width / 2 + (width * 0.8) / 2;
        scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
      }
    }, 100); // Ajusta el tiempo si es necesario

    return () => global.clearTimeout(timer); // Limpiar el temporizador al desmontar
  }, []);

  return (
    <ScrollView
      ref={scrollViewRef} // Asignar la referencia al ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.plansContainer}
      snapToAlignment="center"
      snapToInterval={width * 0.8 + 32}
      decelerationRate="fast"
    >
      {planes.map((plan) => (
        <PlanCard
          key={plan.name}
          plan={plan}
          onSelect={onPlanSelect}
          isDarkMode={isDarkMode}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  plansContainer: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  card: {
    width: width * 0.8,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 12,
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  popularBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#1ed760",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
  popularText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  planDescription: {
    fontSize: 14,
    marginBottom: 16,
  },
  featuresContainer: {
    marginBottom: 16,
  },
  feature: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  featureText: {
    marginLeft: 8,
    fontSize: 14,
  },
  subscribeButton: {
    borderWidth: 2,
    borderRadius: 8,
    textAlign: "center",
    paddingVertical: 12,
    fontWeight: "bold",
  },
});
