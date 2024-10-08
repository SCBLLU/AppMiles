import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SubscriptionPlan = ({ plan, isDarkMode, onSubscribe, isSelected }) => (
    <View style={[styles.card, isDarkMode && styles.cardDark]}>
        <Text style={[styles.planName, { color: plan.color }]}>Plan {plan.name}</Text>
        <Text style={[styles.planPrice, { color: plan.color }]}>${plan.price}/mes</Text>
        <View style={styles.featuresContainer}>
            <Text style={[styles.feature, isDarkMode && styles.textLight]}>
                • {plan.id === 'basic' ? 'Asesoría básica' : 'Asesoría personalizada'}
            </Text>
            <Text style={[styles.feature, isDarkMode && styles.textLight]}>
                • Acceso a contenido {plan.id === 'premium' ? 'premium' : 'exclusivo'}
            </Text>
            <Text style={[styles.feature, isDarkMode && styles.textLight]}>
                • Seguimiento de progreso {plan.id === 'premium' ? 'avanzado' : 'básico'}
            </Text>
            <Text style={[styles.feature, isDarkMode && styles.textLight]}>
                • {plan.id === 'basic' ? '2 consultas al mes' : 'Consultas ilimitadas'}
            </Text>
        </View>
        <TouchableOpacity
            style={[styles.subscribeButton, { backgroundColor: plan.color }]}
            onPress={onSubscribe}
        >
            <Text style={styles.subscribeButtonText}>
                {isSelected ? 'Suscrito' : 'Suscribirse'}
            </Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        padding: 16,
        marginHorizontal: 20,
        marginBottom: 20,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardDark: {
        backgroundColor: "#2c2c2c",
    },
    planName: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
    },
    textLight: {
        color: "#fff",
    },
    planPrice: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 16,
    },
    featuresContainer: {
        marginBottom: 16,
    },
    feature: {
        fontSize: 14,
        marginBottom: 4,
        color: "#333",
    },
    subscribeButton: {
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: "center",
    },
    subscribeButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});

export default SubscriptionPlan;
