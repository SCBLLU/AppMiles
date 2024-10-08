import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useDarkMode } from '../../components/Utils/DarkModeProvider';
import { Ionicons } from '@expo/vector-icons';

const MetodoPago = ({ visible, onCancel, selectedPlan }) => {
  const { isDarkMode } = useDarkMode();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");

  const handlePayment = () => {
    if (paymentMethod === "card") {
      if (cardNumber.length !== 16) {
        Alert.alert("Error", "El número de tarjeta debe tener 16 dígitos.");
        return;
      }
    } else if (paymentMethod === "paypal") {
      if (!paypalEmail.includes("@")) {
        Alert.alert("Error", "Introduce un correo electrónico válido de PayPal.");
        return;
      }
    }

    Alert.alert(
      "Pago Procesado",
      `Simulación de pago procesado para el plan ${selectedPlan.name} usando ${paymentMethod === 'card' ? 'tarjeta de crédito' : 'PayPal'}.`
    );
    onCancel();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.modalContainer}
      >
        <View style={[styles.modalContent, isDarkMode && styles.modalContentDark]}>
          <Text style={[styles.modalTitle, isDarkMode && styles.textDark]}>
            Método de Pago
          </Text>
          <Text style={[styles.modalSubtitle, isDarkMode && styles.textMutedDark]}>
            Selecciona tu método de pago preferido
          </Text>

          <View style={styles.paymentMethodContainer}>
            <TouchableOpacity
              style={[
                styles.methodButton,
                isDarkMode && styles.methodButtonDark,
                paymentMethod === 'card' && styles.selectedMethod,
                paymentMethod === 'card' && isDarkMode && styles.selectedMethodDark
              ]}
              onPress={() => setPaymentMethod('card')}
            >
              <Ionicons name="card-outline" size={24} color={paymentMethod === 'card' ? (isDarkMode ? '#fff' : '#fff') : (isDarkMode ? '#fff' : '#282c34')} />
              <Text style={[
                styles.methodText,
                isDarkMode && styles.methodTextDark,
                paymentMethod === 'card' && styles.selectedMethodText
              ]}>Tarjeta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.methodButton,
                isDarkMode && styles.methodButtonDark,
                paymentMethod === 'paypal' && styles.selectedMethod,
                paymentMethod === 'paypal' && isDarkMode && styles.selectedMethodDark
              ]}
              onPress={() => setPaymentMethod('paypal')}
            >
              <Ionicons name="logo-paypal" size={24} color={paymentMethod === 'paypal' ? (isDarkMode ? '#fff' : '#fff') : (isDarkMode ? '#fff' : '#282c34')} />
              <Text style={[
                styles.methodText,
                isDarkMode && styles.methodTextDark,
                paymentMethod === 'paypal' && styles.selectedMethodText
              ]}>PayPal</Text>
            </TouchableOpacity>
          </View>

          {paymentMethod === "card" && (
            <>
              <View style={[styles.inputContainer, isDarkMode && styles.inputContainerDark]}>
                <Ionicons name="card-outline" size={20} color={isDarkMode ? '#fff' : '#282c34'} style={styles.inputIcon} />
                <TextInput
                  style={[styles.input, isDarkMode && styles.inputDark]}
                  placeholder="Número de tarjeta"
                  placeholderTextColor={isDarkMode ? '#888' : '#999'}
                  value={cardNumber}
                  onChangeText={setCardNumber}
                  keyboardType="numeric"
                  maxLength={16}
                />
              </View>
              <View style={styles.rowContainer}>
                <View style={[styles.inputContainer, styles.halfWidth, isDarkMode && styles.inputContainerDark]}>
                  <Ionicons name="calendar-outline" size={20} color={isDarkMode ? '#fff' : '#282c34'} style={styles.inputIcon} />
                  <TextInput
                    style={[styles.input, isDarkMode && styles.inputDark]}
                    placeholder="MM/AA"
                    placeholderTextColor={isDarkMode ? '#888' : '#999'}
                    value={expiryDate}
                    onChangeText={setExpiryDate}
                    keyboardType="numeric"
                    maxLength={5}
                  />
                </View>
                <View style={[styles.inputContainer, styles.halfWidth, isDarkMode && styles.inputContainerDark]}>
                  <Ionicons name="lock-closed-outline" size={20} color={isDarkMode ? '#fff' : '#282c34'} style={styles.inputIcon} />
                  <TextInput
                    style={[styles.input, isDarkMode && styles.inputDark]}
                    placeholder="CVC"
                    placeholderTextColor={isDarkMode ? '#888' : '#999'}
                    value={cvc}
                    onChangeText={setCvc}
                    keyboardType="numeric"
                    maxLength={3}
                  />
                </View>
              </View>
            </>
          )}

          {paymentMethod === "paypal" && (
            <View style={[styles.inputContainer, isDarkMode && styles.inputContainerDark]}>
              <Ionicons name="mail-outline" size={20} color={isDarkMode ? '#fff' : '#282c34'} style={styles.inputIcon} />
              <TextInput
                style={[styles.input, isDarkMode && styles.inputDark]}
                placeholder="Correo de PayPal"
                placeholderTextColor={isDarkMode ? '#888' : '#999'}
                value={paypalEmail}
                onChangeText={setPaypalEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          )}

          <TouchableOpacity style={[styles.payButton, isDarkMode && styles.payButtonDark]} onPress={handlePayment}>
            <Text style={styles.payButtonText}>Pagar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.cancelButton, isDarkMode && styles.cancelButtonDark]} onPress={onCancel}>
            <Text style={[styles.cancelButtonText, isDarkMode && styles.cancelButtonTextDark]}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalContentDark: {
    backgroundColor: '#1c1c1e',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  modalSubtitle: {
    fontSize: 16,
    marginBottom: 24,
    color: '#666',
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  methodButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#282c34',
    flex: 0.48,
  },
  methodButtonDark: {
    borderColor: '#fff',
  },
  selectedMethod: {
    backgroundColor: '#282c34',
  },
  selectedMethodDark: {
    backgroundColor: '#4a4a4a',
  },
  methodText: {
    fontSize: 16,
    marginLeft: 8,
    color: '#282c34',
  },
  methodTextDark: {
    color: '#fff',
  },
  selectedMethodText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
  },
  inputContainerDark: {
    borderColor: '#444',
    backgroundColor: '#2c2c2e',
  },
  input: {
    height: 48,
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  inputIcon: {
    marginRight: 12,
  },
  inputDark: {
    color: '#fff',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  payButton: {
    backgroundColor: '#282c34',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  payButtonDark: {
    backgroundColor: '#4a4a4a',
  },
  payButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  cancelButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#282c34',
  },
  cancelButtonDark: {
    borderColor: '#fff',
  },
  cancelButtonText: {
    color: '#282c34',
    fontWeight: 'bold',
    fontSize: 18,
  },
  cancelButtonTextDark: {
    color: '#fff',
  },
  textDark: {
    color: '#fff',
  },
  textMutedDark: {
    color: '#a0a0a0',
  },
});

export default MetodoPago;
