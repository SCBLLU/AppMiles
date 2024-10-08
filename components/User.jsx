import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
  ScrollView,
  Platform,
  StatusBar,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDarkMode } from "./Utils/DarkModeProvider";
import { useNotifications } from "./Utils/NotificationsProvider";
import { UserContext } from "./Utils/UserContext"; // Asegúrate de importar correctamente el contexto
import ImageViewer from "react-native-image-zoom-viewer"; // Importar ImageViewer para el zoom
import { useNavigation } from "@react-navigation/native";

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

const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false); // Estado para el modal de zoom de imagen
  const { username } = useContext(UserContext); // Obtén el nombre de usuario
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { notifications, toggleNotifications } = useNotifications();
  const navigation = useNavigation();

  const profileImage = require("../assets/profile.jpg");

  // Imagen para el visor de zoom
  const images = [
    {
      url: '', // Imagen local, así que dejamos la URL en blanco
      props: {
        source: profileImage, // Imagen local
      },
    },
  ];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#121212" : "#fff" },
      ]}
    >
      {/* Botón de perfil */}
      <TouchableOpacity
        onPress={() => setIsOpen(true)}
        style={styles.profileButton}
      >
        <Image source={profileImage} style={styles.profileImageStyle} />
      </TouchableOpacity>

      {/* Modal del perfil */}
      <Modal
        animationType="fade"
        transparent={false}
        visible={isOpen}
        hardwareAccelerated={true}
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

            {/* Imagen de perfil */}
            <TouchableOpacity
              onPress={() => setIsImageModalOpen(true)} // Abrir modal de zoom de imagen al hacer clic
              style={styles.avatarContainer}
            >
              <Image source={profileImage} style={styles.avatarLargeStyle} />
            </TouchableOpacity>

            <View style={styles.userInfoContainer}>
              <Text
                style={[
                  styles.name,
                  { color: isDarkMode ? "#FFFFFF" : "#000000" },
                ]}
              >
                {username ? `${username}` : "Usuario no encontrado"}
              </Text>
              <Text
                style={[
                  styles.email,
                  { color: isDarkMode ? "#A0A0A0" : "#505050" },
                ]}
              >
                {username ? `${username}123@gmail.com` : ""}
              </Text>
            </View>

            {/* Información del usuario */}
            <View style={styles.infoContainer}>
              <InfoItem
                icon="calendar-outline"
                text="Se unió en Septiembre 2024"
                isDarkMode={isDarkMode}
              />
              <InfoItem
                icon="location-outline"
                text="Santa Tecla, El Salvador"
                isDarkMode={isDarkMode}
              />
              <InfoItem
                icon="link-outline"
                text={`miles.app/${username}`}
                isDarkMode={isDarkMode}
              />
            </View>

            {/* Botón de configuración */}
            <TouchableOpacity
              style={[
                styles.settingsButton,
                { backgroundColor: isDarkMode ? "#2C2C2C" : "#E0E0E0" },
              ]}
              onPress={() => {
                setIsOpen(false);
                setIsSettingsVisible(true);
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

            {/* Botón para salir de la app */}
            <TouchableOpacity
              style={[
                styles.buttonOut,
                { backgroundColor: isDarkMode ? "#2C2C2C" : "#E0E0E0" },
              ]}
              onPress={() => {
                setIsOpen(false);
                navigation.navigate("index"); // Navegar a la pantalla de inicio
              }}
            >
              <Ionicons
                name="exit-outline"
                size={24}
                color={isDarkMode ? "#FFFFFF" : "#000000"}
              />
              <Text
                style={[
                  styles.settingsButtonText,
                  { color: isDarkMode ? "#FFFFFF" : "#000000" },
                ]}
              >
                Salir de la App
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>

      {/* Modal de configuraciones */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={isSettingsVisible}
        onRequestClose={() => setIsSettingsVisible(false)}
      >
        <View
          style={[
            styles.modalContent,
            { backgroundColor: isDarkMode ? "#121212" : "#fff" },
          ]}
        >
          <View style={styles.header}>
            <Text
              style={[
                styles.title,
                { color: isDarkMode ? "#FFFFFF" : "#000000" },
              ]}
            >
              Configuraciones
            </Text>
            <TouchableOpacity
              onPress={() => setIsSettingsVisible(false)}
              style={styles.closeButton}
            >
              <Ionicons
                name="close"
                size={28}
                color={isDarkMode ? "#FFFFFF" : "#000000"}
              />
            </TouchableOpacity>
          </View>

          {/* Configuración de Modo Oscuro */}
          <View style={styles.settingsItem}>
            <Text
              style={[
                styles.settingsText,
                { color: isDarkMode ? "#FFFFFF" : "#000000" },
              ]}
            >
              Modo Oscuro
            </Text>
            <Switch
              value={isDarkMode}
              onValueChange={toggleDarkMode}
              trackColor={{ true: "#4CAF50", false: "#767577" }}
              thumbColor={isDarkMode ? "#fff" : "#f4f3f4"}
            />
          </View>

          {/* Configuración de Notificaciones */}
          <View style={styles.settingsItem}>
            <Text
              style={[
                styles.settingsText,
                { color: isDarkMode ? "#FFFFFF" : "#000000" },
              ]}
            >
              Notificaciones
            </Text>
            <Switch
              value={notifications}
              onValueChange={toggleNotifications}
              trackColor={{ true: "#4CAF50", false: "#767577" }}
              thumbColor={notifications ? "#fff" : "#f4f3f4"}
            />
          </View>
        </View>
      </Modal>

      {/* Modal de zoom de la imagen con botón de cierre */}
      {isImageModalOpen && (
        <Modal
          animationType="fade"
          visible={isImageModalOpen}
          transparent={true}
          hardwareAccelerated={true}
          onRequestClose={() => setIsImageModalOpen(false)}
        >
          <View style={styles.imageModalContainer}>
            <TouchableOpacity
              onPress={() => setIsImageModalOpen(false)}
              style={styles.closeZoomButton}
            >
              <Ionicons name="close" size={30} color="#FFF" />
            </TouchableOpacity>
            <ImageViewer
              imageUrls={images}
              enableSwipeDown={true}
              onSwipeDown={() => setIsImageModalOpen(false)}
              backgroundColor={isDarkMode ? "#000" : "#fff"}
            />
          </View>
        </Modal>
      )}


    </View>
  );
};

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
    paddingVertical: 20,
  },
  settingsText: {
    fontSize: 18,
  },
  buttonOut: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  imageModalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  closeZoomButton: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 30,
    padding: 10,
  },
});

export default User;
