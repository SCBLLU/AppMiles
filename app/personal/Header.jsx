import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Chat from "./Chat";

const Header = ({ personal, isDarkMode }) => {
  const [showChat, setShowChat] = useState(false);
  const [scaleAnim] = useState(new Animated.Value(1));
  const screenWidth = Dimensions.get("window").width;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <View
        style={[
          styles.header,
          { backgroundColor: isDarkMode ? "#1B1B1B" : "#fff" },
        ]}
      >
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: personal.imageUrl || "https://via.placeholder.com/200",
            }}
            style={styles.avatar}
          />
          <View style={styles.onlineIndicator} />
        </View>

        <View style={styles.headerInfo}>
          <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}>
            {personal.name}
          </Text>
          <Text
            style={[
              styles.subtitle,
              { color: isDarkMode ? "#b3b3b3" : "#666" },
            ]}
          >
            {personal.type}
          </Text>

          <View
            style={[
              styles.statsContainer,
              screenWidth > 768 && { justifyContent: "space-around" },
            ]}
          >
            <View style={styles.statItem}>
              <Text
                style={[
                  styles.statNumber,
                  { color: isDarkMode ? "#fff" : "#000" },
                ]}
              >
                {personal.followers?.toLocaleString() || 0}
              </Text>
              <Text
                style={[
                  styles.statLabel,
                  { color: isDarkMode ? "#b3b3b3" : "#666" },
                ]}
              >
                Seguidores
              </Text>
            </View>
            <View
              style={[
                styles.separator,
                screenWidth > 768 && { marginHorizontal: 20 },
              ]}
            />
            <View style={styles.statItem}>
              <Text
                style={[
                  styles.statNumber,
                  { color: isDarkMode ? "#fff" : "#000" },
                ]}
              >
                {personal.subscribers?.toLocaleString() || 0}
              </Text>
              <Text
                style={[
                  styles.statLabel,
                  { color: isDarkMode ? "#b3b3b3" : "#666" },
                ]}
              >
                Suscriptores
              </Text>
            </View>
            <View
              style={[
                styles.separator,
                screenWidth > 768 && { marginHorizontal: 20 },
              ]}
            />
            <View style={styles.statItem}>
              <Text
                style={[
                  styles.statNumber,
                  { color: isDarkMode ? "#fff" : "#000" },
                ]}
              >
                #{personal.ranking || "N/A"}
              </Text>
              <Text
                style={[
                  styles.statLabel,
                  { color: isDarkMode ? "#b3b3b3" : "#666" },
                ]}
              >
                Ranking
              </Text>
            </View>
          </View>
        </View>

        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <TouchableOpacity
            onPress={() => setShowChat(true)}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={[
              styles.messageBtn,
              {
                backgroundColor: isDarkMode ? "#333" : "#f0f0f0",
                shadowColor: isDarkMode ? "#000" : "#666",
              },
            ]}
          >
            <Ionicons
              name="chatbubble-ellipses"
              size={18}
              color={isDarkMode ? "#fff" : "#000"}
            />
            <Text
              style={[
                styles.messageBtnText,
                { color: isDarkMode ? "#fff" : "#000" },
              ]}
            >
              Mensaje
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>

      <Chat
        personal={personal}
        isDarkMode={isDarkMode}
        showChat={showChat}
        setShowChat={setShowChat}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "column",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#4CAF50",
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  headerInfo: {
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 13,
    marginBottom: 6,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  separator: {
    width: 1,
    height: 20,
    backgroundColor: "282c34",
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "700",
  },
  statLabel: {
    fontSize: 12,
  },
  messageBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    elevation: 2,
    width: 200,
    height: 40,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  messageBtnText: {
    marginLeft: 5,
    fontSize: 13,
    fontWeight: "700",
  },
});

export default Header;
