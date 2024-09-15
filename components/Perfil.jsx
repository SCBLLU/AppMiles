import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  Image, // Importar Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDarkMode } from "./DarkModeProvider";
import { useNotifications } from "./NotificationsProvider";

// Definición de InfoItem
const InfoItem = ({ icon, text, isDarkMode }) => (
  <View style={styles.infoItem}>
    <Ionicons name={icon} size={24} color={isDarkMode ? "white" : "black"} />
    <Text style={[styles.infoText, { color: isDarkMode ? "#ddd" : "#333" }]}>
      {text}
    </Text>
  </View>
);

// Definición de SettingsModal
const SettingsModal = ({
  isVisible,
  onClose,
  isDarkMode,
  toggleDarkMode,
  notifications,
  toggleNotifications,
}) => (
  <Modal animationType="slide" transparent={true} visible={isVisible}>
    <View
      style={[
        styles.settingsModal,
        { backgroundColor: isDarkMode ? "#333" : "#fff" },
      ]}
    >
      <TouchableOpacity style={styles.settingsItem} onPress={toggleDarkMode}>
        <Text
          style={[styles.settingsText, { color: isDarkMode ? "#fff" : "#000" }]}
        >
          Modo Oscuro
        </Text>
        <Ionicons
          name={isDarkMode ? "moon" : "sunny"}
          size={24}
          color={isDarkMode ? "white" : "black"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingsItem}
        onPress={toggleNotifications}
      >
        <Text
          style={[styles.settingsText, { color: isDarkMode ? "#fff" : "#000" }]}
        >
          Notificaciones
        </Text>
        <Ionicons
          name={notifications ? "notifications" : "notifications-off"}
          size={24}
          color={isDarkMode ? "white" : "black"}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingsItem} onPress={onClose}>
        <Text
          style={[styles.settingsText, { color: isDarkMode ? "#fff" : "#000" }]}
        >
          Cerrar
        </Text>
      </TouchableOpacity>
    </View>
  </Modal>
);

const TwitterProfileRN = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { notifications, toggleNotifications } = useNotifications();

  // Importar imagen local
  const profileImage = require("../assets/profile.jpg");

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#000" : "#fff" },
      ]}
    >
      <TouchableOpacity
        onPress={() => setIsOpen(true)}
        style={styles.profileButton}
      >
        <View style={styles.profileImage}>
          <Image
            source={profileImage} // Usar imagen local
            style={styles.profileImageStyle} // Aplicar estilos
          />
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <ScrollView
          style={[
            styles.modalContent,
            { backgroundColor: isDarkMode ? "#000" : "#fff" },
          ]}
        >
          <View style={styles.header}>
            <Text
              style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}
            >
              Perfil de Usuario
            </Text>
            <TouchableOpacity onPress={() => setIsOpen(false)}>
              <Ionicons
                name="close"
                size={24}
                color={isDarkMode ? "white" : "black"}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.avatarLarge}>
            <Image
              source={profileImage} // Usar imagen local
              style={styles.avatarLargeStyle} // Aplicar estilos
            />
          </View>

          <Text style={[styles.name, { color: isDarkMode ? "#fff" : "#000" }]}>
            Nombre Usuario
          </Text>
          <Text style={styles.username}>@usuario</Text>

          <Text style={[styles.bio, { color: isDarkMode ? "#ddd" : "#333" }]}>
            Biografía del usuario. Aquí iría una breve descripción sobre el
            usuario y sus intereses.
          </Text>

          <InfoItem
            icon="location-outline"
            text="Ciudad, País"
            isDarkMode={isDarkMode}
          />
          <InfoItem
            icon="link-outline"
            text="usuario.com"
            isDarkMode={isDarkMode}
          />
          <InfoItem
            icon="calendar-outline"
            text="Se unió en Enero 2023"
            isDarkMode={isDarkMode}
          />

          <TouchableOpacity
            style={styles.settingsButton}
            onPress={() => setIsSettingsVisible(true)}
          >
            <Ionicons
              name="settings-outline"
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
          </TouchableOpacity>
        </ScrollView>
      </Modal>

      <SettingsModal
        isVisible={isSettingsVisible}
        onClose={() => setIsSettingsVisible(false)}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        notifications={notifications}
        toggleNotifications={toggleNotifications}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 24,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24, // Esto hace que la imagen sea circular
    overflow: "hidden", // Para asegurar que la imagen no se desborde del borde redondeado
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent", // Fondo transparente para el contenedor
  },
  profileImageStyle: {
    width: "100%",
    height: "100%",
  },
  modalContent: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  avatarLarge: {
    width: 96,
    height: 96,
    borderRadius: 48, // Esto hace que la imagen sea circular
    marginBottom: 20,
  },
  avatarLargeStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 48, // Esto hace que la imagen sea circular
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  username: {
    fontSize: 16,
    color: "#777",
  },
  bio: {
    fontSize: 14,
    marginVertical: 10,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  infoText: {
    marginLeft: 10,
  },
  settingsButton: {
    backgroundColor: "transparent", // Asegúrate de que el fondo no sea visible
  },
  settingsModal: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  settingsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  settingsText: {
    fontSize: 16,
  },
});

export default TwitterProfileRN;
