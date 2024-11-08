import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Chat = ({ personal, isDarkMode, showChat, setShowChat }) => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      id: "1",
      sender: personal.id,
      text: personal.messageText || "Hola, ¿en qué puedo ayudarte hoy?",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const scrollViewRef = useRef();

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [chatHistory]);

  const handleSend = () => {
    if (message.trim()) {
      setChatHistory([
        ...chatHistory,
        {
          id: Date.now().toString(),
          sender: "user",
          text: message,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setMessage("");

      global.setTimeout(() => {
        const responses = [
          "¡Claro! Estoy aquí para ayudarte.",
          "¿Necesitas más información sobre algún ejercicio específico?",
          "¿Te gustaría programar una sesión de entrenamiento?",
          "Puedo ayudarte a diseñar un plan personalizado.",
          "¡Estoy aquí para responder tus preguntas!",
          "¿Cuáles son tus objetivos de entrenamiento?",
          "¿Prefieres entrenamientos en casa o en el gimnasio?",
          "¿Tienes alguna lesión o condición médica que deba tener en cuenta?",
          "¿Cuántos días a la semana planeas entrenar?",
          "¿Qué tipo de ejercicios te gustan más?",
        ];
        const randomResponse =
          responses[Math.floor(Math.random() * responses.length)];

        setChatHistory((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            sender: personal.id,
            text: randomResponse,
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
      }, 3000);
    }
  };

  return (
    <Modal
      visible={showChat}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setShowChat(false)}
    >
      <SafeAreaView style={[styles.modalOverlay, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingView}
        >
          <View
            style={[
              styles.modalContent,
              { backgroundColor: isDarkMode ? "#1B1B1B" : "#fff" },
            ]}
          >
            <View style={styles.modalHeader}>
              <View style={styles.headerInfo}>
                <Image
                  source={{ uri: personal.imageUrl }}
                  style={styles.messageAvatar}
                />
                <View>
                  <Text
                    style={[
                      styles.modalTitle,
                      { color: isDarkMode ? "#fff" : "#000" },
                    ]}
                  >
                    {personal.name}
                  </Text>
                  <Text
                    style={[
                      styles.modalSubtitle,
                      { color: isDarkMode ? "#b3b3b3" : "#666" },
                    ]}
                  >
                    {personal.type}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => setShowChat(false)}
                style={styles.closeButton}
              >
                <Ionicons
                  name="close"
                  size={24}
                  color={isDarkMode ? "#fff" : "#000"}
                />
              </TouchableOpacity>
            </View>

            <ScrollView
              style={styles.messagesList}
              ref={scrollViewRef}
              contentContainerStyle={styles.messagesListContent}
            >
              {chatHistory.map((chat) => (
                <View
                  key={chat.id}
                  style={[
                    styles.messageItem,
                    chat.sender === "user"
                      ? styles.userMessage
                      : styles.trainerMessage,
                    { backgroundColor: isDarkMode ? "#333" : "#f0f0f0" },
                  ]}
                >
                  {chat.sender !== "user" && (
                    <Image
                      source={{ uri: personal.imageUrl }}
                      style={styles.messageAvatar}
                    />
                  )}
                  <View
                    style={[
                      styles.messageContent,
                      chat.sender === "user" && styles.userMessageContent,
                    ]}
                  >
                    <Text
                      style={[
                        styles.messageText,
                        { color: isDarkMode ? "#fff" : "#000" },
                      ]}
                    >
                      {chat.text}
                    </Text>
                    <Text
                      style={[
                        styles.timestamp,
                        { color: isDarkMode ? "#b3b3b3" : "#666" },
                      ]}
                    >
                      {chat.timestamp}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>

            <View style={styles.inputContainer}>
              <TextInput
                value={message}
                onChangeText={setMessage}
                placeholder="Escribe un mensaje..."
                placeholderTextColor={isDarkMode ? "#b3b3b3" : "#666"}
                style={[
                  styles.input,
                  {
                    backgroundColor: isDarkMode ? "#333" : "#f0f0f0",
                    color: isDarkMode ? "#fff" : "#000",
                  },
                ]}
                multiline
              />
              <TouchableOpacity
                onPress={handleSend}
                style={[
                  styles.sendButton,
                  {
                    backgroundColor: message.trim()
                      ? "#1DB954"
                      : isDarkMode
                        ? "#333"
                        : "#f0f0f0",
                  },
                ]}
                disabled={!message.trim()}
              >
                <Ionicons
                  name="send"
                  size={20}
                  color={
                    message.trim() ? "#fff" : isDarkMode ? "#b3b3b3" : "#666"
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  modalContent: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(128, 128, 128, 0.2)",
  },
  headerInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  modalSubtitle: {
    fontSize: 14,
    color: "#8f8f8f",
  },
  closeButton: {
    padding: 8,
  },
  messagesList: {
    flex: 1,
  },
  messagesListContent: {
    paddingVertical: 20,
  },
  messageItem: {
    flexDirection: "row",
    marginBottom: 20,
    padding: 12,
    borderRadius: 18,
    maxWidth: "75%",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#007aff",
  },
  trainerMessage: {
    alignSelf: "flex-start",
  },
  messageAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  messageContent: {
    flex: 1,
  },
  userMessageContent: {
    alignItems: "flex-end",
  },
  messageText: {
    fontSize: 15,
    lineHeight: 20,
  },
  timestamp: {
    fontSize: 12,
    marginTop: 4,
    color: "#8c8c8c",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "rgba(128, 128, 128, 0.2)",
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    fontSize: 16,
    marginRight: 10,
  },
  sendButton: {
    padding: 10,
    borderRadius: 50,
  },
});

export default Chat;