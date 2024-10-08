import React, { useState, useEffect } from "react";
import {
  View,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useDarkMode } from "../Utils/DarkModeProvider";

const Proximamente = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { isDarkMode } = useDarkMode(); // Obtener el estado del modo oscuro

  useEffect(() => {
    // Cambiar el estilo de la barra de estado al abrir o cerrar el modal
    StatusBar.setBarStyle(
      modalVisible ? "light-content" : "dark-content",
      true
    );
  }, [modalVisible]);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#121212" : "#f5f5f5" },
      ]}
    >
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isDarkMode ? "#1ed760" : "#1ed760" },
        ]}
        onPress={showModal}
      >
        <Text
          style={[
            styles.buttonText,
            { color: isDarkMode ? "#212121" : "#212121" },
          ]}
        >
          Próximas actualizaciones
        </Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={hideModal}
      >
        <View
          style={[
            styles.modalOverlay,
            {
              backgroundColor: isDarkMode
                ? "rgba(0, 0, 0, 0.8)"
                : "rgba(0, 0, 0, 0.5)",
            },
          ]}
        >
          <View
            style={[
              styles.modalContent,
              { backgroundColor: isDarkMode ? "#1e1e1e" : "#fff" },
            ]}
          >
            <Text
              style={[
                styles.modalTitle,
                { color: isDarkMode ? "#fff" : "#000" },
              ]}
            >
              Funciones próximamente disponibles:
            </Text>

            <Text
              style={[
                styles.modalText,
                { color: isDarkMode ? "#ccc" : "#000" },
              ]}
            >
              Planes de suscripción anuales
            </Text>
            <Text
              style={[
                styles.modalText,
                { color: isDarkMode ? "#ccc" : "#000" },
              ]}
            >
              Soporte de chat en vivo
            </Text>
            <Text
              style={[
                styles.modalText,
                { color: isDarkMode ? "#ccc" : "#000" },
              ]}
            >
              Entrenamientos personalizados
            </Text>

            <TouchableOpacity
              style={[
                styles.closeButton,
                { backgroundColor: isDarkMode ? "#FF5733" : "#FF5733" },
              ]}
              onPress={hideModal}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  modalText: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 8,
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Proximamente;
