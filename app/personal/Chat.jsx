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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.modalOverlay}
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

          <ScrollView style={styles.messagesList} ref={scrollViewRef}>
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
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 10,
    minHeight: "70%",
    maxHeight: "90%",
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
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
    padding: 4,
  },
  messagesList: {
    flex: 1,
    paddingVertical: 20,
  },
  messageItem: {
    flexDirection: "row",
    marginBottom: 20,
    padding: 12,
    borderRadius: 18,
    maxWidth: "75%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
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
    borderTopColor: "rgba(0, 0, 0, 0.1)",
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
