import React, { useState } from "react";
import { View, Text, Alert, TextInput, StyleSheet } from "react-native";
import Dialog from "react-native-dialog";
import { RadioButton } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { useDarkMode } from "../Utils/DarkModeProvider"; // Modo oscuro

export default function MetodoPago({ selectedPlan, visible, onCancel }) {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const { isDarkMode } = useDarkMode();

  const handlePayment = () => {
    Alert.alert(
      `Pago procesado para el plan ${selectedPlan.name} usando ${paymentMethod}`
    );
    onCancel();
  };

  return (
    <Dialog.Container visible={visible}>
      <Dialog.Title
        style={[styles.title, { color: isDarkMode ? "#e0e0e0" : "#333" }]}
      >
        Completar Compra
      </Dialog.Title>
      <Dialog.Description
        style={[styles.description, { color: isDarkMode ? "#b0b0b0" : "#666" }]}
      >
        {`Plan seleccionado: ${selectedPlan.name} - ${selectedPlan.price}/${selectedPlan.billing}`}
      </Dialog.Description>
      <View style={styles.form}>
        <Text
          style={[styles.label, { color: isDarkMode ? "#e0e0e0" : "#333" }]}
        >
          Método de Pago
        </Text>
        <RadioButton.Group
          onValueChange={(value) => setPaymentMethod(value)}
          value={paymentMethod}
        >
          <View style={styles.radioItem}>
            <RadioButton
              value="card"
              color={isDarkMode ? "#4caf50" : "#1ed760"}
            />
            <FontAwesomeIcon icon={faCreditCard} style={styles.icon} />
            <Text
              style={[
                styles.radioLabel,
                { color: isDarkMode ? "#e0e0e0" : "#333" },
              ]}
            >
              Tarjeta de Crédito
            </Text>
          </View>
          <View style={styles.radioItem}>
            <RadioButton
              value="paypal"
              color={isDarkMode ? "#4caf50" : "#1ed760"}
            />
            <FontAwesomeIcon icon={faPaypal} style={styles.icon} />
            <Text
              style={[
                styles.radioLabel,
                { color: isDarkMode ? "#e0e0e0" : "#333" },
              ]}
            >
              PayPal
            </Text>
          </View>
        </RadioButton.Group>

        {paymentMethod === "card" && (
          <>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: isDarkMode ? "#1f1f1f" : "#fff",
                  color: isDarkMode ? "#e0e0e0" : "#333",
                },
              ]}
              placeholder="Número de Tarjeta"
              placeholderTextColor={isDarkMode ? "#757575" : "#ccc"}
              keyboardType="numeric"
            />
            <View style={styles.inputRow}>
              <TextInput
                style={[
                  styles.input,
                  styles.inputHalf,
                  {
                    backgroundColor: isDarkMode ? "#1f1f1f" : "#fff",
                    color: isDarkMode ? "#e0e0e0" : "#333",
                  },
                ]}
                placeholder="MM/YY"
                placeholderTextColor={isDarkMode ? "#757575" : "#ccc"}
                keyboardType="numeric"
              />
              <TextInput
                style={[
                  styles.input,
                  styles.inputHalf,
                  {
                    backgroundColor: isDarkMode ? "#1f1f1f" : "#fff",
                    color: isDarkMode ? "#e0e0e0" : "#333",
                  },
                ]}
                placeholder="CVC"
                placeholderTextColor={isDarkMode ? "#757575" : "#ccc"}
                keyboardType="numeric"
              />
            </View>
          </>
        )}

        {paymentMethod === "paypal" && (
          <Text
            style={[
              styles.paypalInfo,
              { color: isDarkMode ? "#e0e0e0" : "#333" },
            ]}
          >
            Serás redirigido a PayPal para completar tu pago.
          </Text>
        )}

        <Text
          style={[
            styles.payButton,
            {
              borderColor: isDarkMode ? "#4caf50" : "#1ed760",
              color: isDarkMode ? "#4caf50" : "#1ed760",
            },
          ]}
          onPress={handlePayment}
        >
          Pagar {selectedPlan?.price}
        </Text>
      </View>
      <Dialog.Button label="Cancelar" onPress={onCancel} />
    </Dialog.Container>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
  },
  form: {
    marginVertical: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 12,
  },
  radioItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  radioLabel: {
    marginLeft: 12,
    fontSize: 16,
  },
  icon: {
    marginHorizontal: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    fontSize: 16,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputHalf: {
    width: "48%",
  },
  paypalInfo: {
    fontSize: 14,
    marginVertical: 8,
  },
  payButton: {
    borderWidth: 2,
    borderRadius: 8,
    textAlign: "center",
    paddingVertical: 12,
    fontWeight: "bold",
    marginTop: 16,
  },
});
