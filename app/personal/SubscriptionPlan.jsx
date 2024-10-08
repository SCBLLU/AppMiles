import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SubscriptionPlan = ({ plan, isDarkMode, onSubscribe, isSelected }) => {
    const features = [
        `Asesoría ${plan.id === 'plan1' ? 'básica' : plan.id === 'plan2' ? 'profesional' : 'personalizada'}`,
        `Acceso a contenido ${plan.id === 'plan1' ? 'básico' : plan.id === 'plan2' ? 'exclusivo' : 'de miembros'}`,
        `Seguimiento de progreso ${plan.id === 'plan1' ? 'básico' : plan.id === 'plan2' ? 'avanzado' : 'personalizado'}`,
        `Consultas ${plan.id === 'plan1' ? '1 al mes' : plan.id === 'plan2' ? '4 al mes' : 'ilimitadas'}`,
    ];

    return (
        <LinearGradient
            colors={isDarkMode ? ['#282828', '#181818'] : ['#fff', '#f8f8f8']}
            style={styles.card}
        >
            <Text style={[styles.planName, { color: isDarkMode ? '#fff' : '#000' }]}>
                {plan.name}
            </Text>
            <Text style={[styles.planPrice, { color: '#1DB954' }]}>
                ${plan.price}/mes
            </Text>
            <View style={styles.featuresContainer}>
                {features.map((feature, index) => (
                    <View key={index} style={styles.featureRow}>
                        <View style={[styles.bullet, { backgroundColor: '#1DB954' }]} />
                        <Text style={[styles.feature, { color: isDarkMode ? '#b3b3b3' : '#333' }]}>
                            {feature}
                        </Text>
                    </View>
                ))}
            </View>
            <TouchableOpacity
                style={[
                    styles.subscribeButton,
                    { backgroundColor: isSelected ? '#1DB954' : isDarkMode ? '#333' : '#eee' },
                ]}
                onPress={onSubscribe}
            >
                <Text
                    style={[
                        styles.subscribeButtonText,
                        { color: isSelected ? '#fff' : isDarkMode ? '#fff' : '#000' },
                    ]}
                >
                    {isSelected ? 'SUSCRITO' : 'SUSCRIBIRSE'}
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        padding: 20,
        marginHorizontal: 16,
        marginBottom: 16,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    planName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    planPrice: {
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 20,
    },
    featuresContainer: {
        marginBottom: 24,
    },
    featureRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    bullet: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginRight: 12,
    },
    feature: {
        fontSize: 16,
        flex: 1,
    },
    subscribeButton: {
        paddingVertical: 16,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subscribeButtonText: {
        fontSize: 14,
        fontWeight: '700',
        letterSpacing: 1,
    },
});

export default SubscriptionPlan;