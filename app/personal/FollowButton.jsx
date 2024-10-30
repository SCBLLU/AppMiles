import React, { useRef } from "react";
import { TouchableOpacity, Text, StyleSheet, Animated } from "react-native";

const FollowButton = ({ isFollowing, onFollow }) => {
  // Referencia a la animación
  const scaleAnim = useRef(new Animated.Value(1)).current;

  // Función para manejar la animación y la acción de seguir
  const handlePress = () => {
    // Iniciar animación
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true, // Usar el driver nativo para mejor rendimiento
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    onFollow(); // Llama a la función de seguimiento
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        style={[
          styles.baseButton,
          isFollowing ? styles.followingButton : styles.notFollowingButton,
          isFollowing && styles.buttonShadow,
        ]}
        onPress={handlePress}
      >
        <Text style={styles.followButtonText}>
          {isFollowing ? "Siguiendo" : "Seguir"}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  followingButton: {
    backgroundColor: "#333", // Color de fondo cuando está siguiendo
  },
  notFollowingButton: {
    backgroundColor: "#1DB954", // Color de fondo cuando no está siguiendo
  },
  buttonShadow: {
    elevation: 2, // Sombra para Android
    shadowColor: "#000", // Sombra para iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  followButtonText: {
    color: "#fff", // Color del texto
    fontWeight: "600", // Subtle weight increase
    textAlign: "center",
    fontSize: 14,
  },
});

export default FollowButton;
