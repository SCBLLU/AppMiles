import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Animated,
  Easing,
} from "react-native";

const Bienvenida = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const handleJoinRequest = () => {
    setIsModalVisible(true); // Mostrar el modal de confirmación
  };

  const sendRequest = () => {
    // Aquí podrías agregar la lógica para enviar la solicitud a un servidor

    setIsConfirmationVisible(true);
    setIsModalVisible(false); // Cerrar el modal

    // Animar la aparición del mensaje
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    // Ocultar el mensaje después de unos segundos
    global.setTimeout(() => {
      setIsConfirmationVisible(false);
      animation.setValue(0); // Reiniciar la animación
    }, 10000); // Mostrar mensaje durante 5 segundos
  };

  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Sé Partner de Miles</Text>
            <Text style={styles.subtitle}>
              Únete a nuestra red de entrenadores, gimnasios y marcas de
              fitness. Ofrece tus servicios a miles de usuarios y crece con
              nosotros.
            </Text>
            <Text style={styles.subtitle}>
              Beneficios exclusivos, soporte personalizado y acceso a
              herramientas avanzadas para hacer crecer tu negocio.
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.primaryButton]}
              onPress={handleJoinRequest}
            >
              <Text style={styles.primaryButtonText}>Únete Ahora</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Modal de Confirmación */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirmar Solicitud</Text>
            <Text style={styles.modalMessage}>
              ¿Está seguro de que desea enviar una solicitud para unirse a
              AcoMiles? Su solicitud será revisada por nuestro equipo de
              selección y se le contactará si cumple con nuestros criterios de
              selección.
            </Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.confirmButton]}
                onPress={sendRequest}
              >
                <Text style={styles.confirmButtonText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Mensaje de confirmación animado */}
      {isConfirmationVisible && (
        <Animated.View
          style={[
            styles.confirmationMessage,
            {
              opacity: animation, // Cambiar la opacidad con la animación
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0], // Movimiento hacia arriba
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.confirmationText}>
            Solicitud enviada. Estará en proceso de selección y nos pondremos en
            contacto con usted en los próximos días.
          </Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    width: "100%",
    paddingVertical: 38,
    backgroundColor: "black",
  },
  container: {
    paddingHorizontal: 15,
  },
  content: {
    alignItems: "center",
  },
  textContainer: {
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  subtitle: {
    color: "#D1D5DB",
    fontSize: 16,
    textAlign: "center",
    maxWidth: 700,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  primaryButton: {
    backgroundColor: "white",
  },
  primaryButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Fondo oscuro
  },
  modalContent: {
    width: "80%",
    padding: 20,
    borderRadius: 8,
    backgroundColor: "white",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalMessage: {
    textAlign: "center",
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelButton: {
    backgroundColor: "red",
  },
  cancelButtonText: {
    color: "white",
  },
  confirmButton: {
    backgroundColor: "green",
  },
  confirmButtonText: {
    color: "white",
  },
  confirmationMessage: {
    backgroundColor: "#1DB954", // Verde como color de fondo
    borderRadius: 8,
    padding: 15,
    marginTop: 20,
    alignItems: "center",
  },
  confirmationText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Bienvenida;
