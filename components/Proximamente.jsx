import React, { useState, useEffect } from "react";
import {
  View,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const Proximamente = () => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Cambia el estilo de la barra de estado al abrir o cerrar el modal
    StatusBar.setBarStyle(
      modalVisible ? "light-content" : "dark-content",
      true
    );
    StatusBar.setBackgroundColor(
      modalVisible ? "rgba(0, 0, 0, 0.5)" : "#ffffff",
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
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={showModal}>
        <Text style={styles.buttonText}>Próximas actualizaciones</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={hideModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Funciones próximamente disponibles:
            </Text>

            <Text style={styles.modalText}>Planes de suscripción anuales</Text>
            <Text style={styles.modalText}>Soporte de chat en vivo</Text>
            <Text style={styles.modalText}>Entrenamientos personalizados</Text>

            <TouchableOpacity style={styles.closeButton} onPress={hideModal}>
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
    backgroundColor: "#f5f5f5",
  },
  button: {
    backgroundColor: "#1ed760",
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
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
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
    backgroundColor: "#FF5733",
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
