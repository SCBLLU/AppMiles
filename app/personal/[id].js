import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useDarkMode } from '../../components/Utils/DarkModeProvider';
import data from '../../data/data.json';
import SubscriptionCard from '../../components/Explorar/Personal/SubscriptionCard';

const PersonalDetails = () => {
    const { id } = useLocalSearchParams();
    const { isDarkMode } = useDarkMode();
    const personal = data.personal || [];

    const selectedPersonal = personal.find((p) => p.id === String(id));

    if (!selectedPersonal) {
        return (
            <View style={[styles.container, isDarkMode && styles.containerDark]}>
                <Text style={[styles.title, isDarkMode && styles.textDark]}>
                    Personal no encontrado.
                </Text>
            </View>
        );
    }

    const handleSubscribe = () => {
        // Implementar lógica de suscripción aquí
        console.log('Suscripción solicitada');
    };

    return (
        <ScrollView style={[styles.container, isDarkMode && styles.containerDark]}>
            <Image
                source={{ uri: selectedPersonal.imageUrl || "https://via.placeholder.com/200" }}
                style={styles.avatar}
            />
            <Text style={[styles.title, isDarkMode && styles.textDark]}>
                {selectedPersonal.name}
            </Text>
            <Text style={[styles.subtitle, isDarkMode && styles.textMutedDark]}>
                {selectedPersonal.type}
            </Text>
            <Text style={[styles.description, isDarkMode && styles.textDark]}>
                {selectedPersonal.description || 'No hay descripción disponible.'}
            </Text>
            <Text style={[styles.sectionTitle, isDarkMode && styles.textDark]}>
                Planes de Suscripción
            </Text>
            <SubscriptionCard
                name={`Plan ${selectedPersonal.type}`}
                type={selectedPersonal.type}
                price={selectedPersonal.price}
                features={[
                    'Asesoría personalizada',
                    'Acceso a contenido exclusivo',
                    'Seguimiento de progreso',
                    'Consultas ilimitadas'
                ]}
                onSubscribe={handleSubscribe}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    containerDark: {
        backgroundColor: '#121212',
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        alignSelf: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },
    textDark: {
        color: '#fff',
    },
    textMutedDark: {
        color: '#b3b3b3',
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 20,
        color: '#666',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 20,
        color: '#000',
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#000',
    },
});

export default PersonalDetails;
