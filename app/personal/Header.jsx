import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Chat from "./Chat";

const Header = ({ personal, isDarkMode }) => {
  const [showChat, setShowChat] = useState(false);
  const [scaleAnim] = useState(new Animated.Value(1));

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

          <View style={styles.statsContainer}>
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
            <View style={styles.separator} />
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
            <View style={styles.separator} />
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
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  avatarContainer: {
    position: "relative",
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    borderWidth: 2,
    borderColor: "#4CAF50",
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#4CAF50",
    borderWidth: 2,
    borderColor: "#fff",
  },
  headerInfo: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 8,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  separator: {
    width: 1,
    height: 25,
    backgroundColor: "rgba(0,0,0,0.1)",
    marginHorizontal: 10,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
  },
  messageBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  messageBtnText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: "600",
  },
});

export default Header;
