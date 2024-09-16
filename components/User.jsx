import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDarkMode } from "./Utils/DarkModeProvider";
import { useNotifications } from "./Utils/NotificationsProvider";

const InfoItem = ({ icon, text, isDarkMode }) => (
  <View style={styles.infoItem}>
    <Ionicons
      name={icon}
      size={24}
      color={isDarkMode ? "#A0A0A0" : "#505050"}
    />
    <Text
      style={[styles.infoText, { color: isDarkMode ? "#E0E0E0" : "#303030" }]}
    >
      {text}
    </Text>
  </View>
);

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { notifications, toggleNotifications } = useNotifications();

  const profileImage = require("../assets/profile.jpg");

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#121212" : "#fff" },
      ]}
    >
      <TouchableOpacity
        onPress={() => setIsOpen(true)}
        style={styles.profileButton}
      >
        <Image source={profileImage} style={styles.profileImageStyle} />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={false}
        visible={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <View
          style={[
            styles.modalContent,
            { backgroundColor: isDarkMode ? "#121212" : "#fff" },
          ]}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
              <Text
                style={[
                  styles.title,
                  { color: isDarkMode ? "#FFFFFF" : "#000000" },
                ]}
              >
                Perfil de Usuario
              </Text>
              <TouchableOpacity
                onPress={() => setIsOpen(false)}
                style={styles.closeButton}
              >
                <Ionicons
                  name="close"
                  size={28}
                  color={isDarkMode ? "#FFFFFF" : "#000000"}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.avatarContainer}>
              <Image source={profileImage} style={styles.avatarLargeStyle} />
            </View>

            <View style={styles.userInfoContainer}>
              <Text
                style={[
                  styles.name,
                  { color: isDarkMode ? "#FFFFFF" : "#000000" },
                ]}
              >
                Rafael Ernesto
              </Text>
              <Text
                style={[
                  styles.email,
                  { color: isDarkMode ? "#A0A0A0" : "#505050" },
                ]}
              >
                rafael.canales@gmail.com
              </Text>
            </View>

            <View style={styles.infoContainer}>
              <InfoItem
                icon="calendar-outline"
                text="Se unió en Enero 2023"
                isDarkMode={isDarkMode}
              />
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
            </View>

            <TouchableOpacity
              style={[
                styles.settingsButton,
                { backgroundColor: isDarkMode ? "#2C2C2C" : "#E0E0E0" },
              ]}
              onPress={() => {
                if (Platform.OS === "ios") {
                  setIsOpen(false); // Cerrar el modal del perfil primero en iOS
                  global.setTimeout(() => setIsSettingsVisible(true), 50); // Esperar y abrir configuración en iOS
                } else {
                  setIsSettingsVisible(true); // Directamente abrir configuración en Android
                }
              }}
            >
              <Ionicons
                name="settings-outline"
                size={24}
                color={isDarkMode ? "#FFFFFF" : "#000000"}
              />
              <Text
                style={[
                  styles.settingsButtonText,
                  { color: isDarkMode ? "#FFFFFF" : "#000000" },
                ]}
              >
                Configuración
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
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

const SettingsModal = ({
  isVisible,
  onClose,
  isDarkMode,
  toggleDarkMode,
  notifications,
  toggleNotifications,
}) => (
  <Modal animationType="none" transparent={true} visible={isVisible}>
    <View
      style={[
        styles.settingsModal,
        { backgroundColor: isDarkMode ? "#121212" : "#F5F5F5" },
      ]}
    >
      <View style={styles.settingsHeader}>
        <Text
          style={[
            styles.settingsTitle,
            { color: isDarkMode ? "#FFFFFF" : "#000000" },
          ]}
        >
          Configuración
        </Text>
        <TouchableOpacity onPress={onClose}>
          <Ionicons
            name="close"
            size={28}
            color={isDarkMode ? "#FFFFFF" : "#000000"}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.settingsItem} onPress={toggleDarkMode}>
        <Text
          style={[
            styles.settingsText,
            { color: isDarkMode ? "#FFFFFF" : "#000000" },
          ]}
        >
          Modo Oscuro
        </Text>
        <Ionicons
          name={isDarkMode ? "moon" : "sunny"}
          size={24}
          color={isDarkMode ? "#FFFFFF" : "#000000"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingsItem}
        onPress={toggleNotifications}
      >
        <Text
          style={[
            styles.settingsText,
            { color: isDarkMode ? "#FFFFFF" : "#000000" },
          ]}
        >
          Notificaciones
        </Text>
        <Ionicons
          name={notifications ? "notifications" : "notifications-off"}
          size={24}
          color={isDarkMode ? "#FFFFFF" : "#000000"}
        />
      </TouchableOpacity>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#0d0d0d",
  },
  profileImageStyle: {
    width: "100%",
    height: "100%",
  },
  modalContent: {
    flex: 1,
    padding: 20,
    paddingTop: Platform.select({
      ios: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 60, // Ajusta el padding para iOS
    }),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  closeButton: {
    padding: 8,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatarLargeStyle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#0d0d0d",
  },
  userInfoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  infoText: {
    marginLeft: 15,
    fontSize: 16,
  },
  settingsButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  settingsButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  settingsModal: {
    flex: 1,
    padding: 20,
    paddingTop: Platform.select({
      ios: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 60, // Ajusta el padding para iOS
    }),
  },
  settingsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  settingsTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  settingsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  settingsText: {
    fontSize: 18,
  },
});

export default Profile;
