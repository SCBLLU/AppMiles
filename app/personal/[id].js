import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useDarkMode } from '../../components/Utils/DarkModeProvider';
import data from '../../data/data.json';

const PersonalDetails = () => {
    const { id } = useLocalSearchParams(); // Obtener el ID del personal desde la URL
    const { isDarkMode } = useDarkMode(); // Obtener el estado del modo oscuro
    const personal = data.personal || []; // Obtener el listado de personal desde el JSON

    // Buscar el personal por el id
    const selectedPersonal = personal.find((p) => p.id === String(id));

    // Lógica si no se encuentra el personal
    if (!selectedPersonal) {
        return (
            <View style={[styles.container, isDarkMode && styles.containerDark]}>
                <Text style={[styles.title, isDarkMode && styles.textDark]}>
                    Personal no encontrado.
                </Text>
            </View>
        );
    }

    // Función para manejar la suscripción
    const handleSubscribe = () => {
        console.log('Suscripción solicitada');
    };

    return (
        <>

            <Stack.Screen
                options={{
                    headerTitle: "Regresar",
                    headerStyle: {
                        backgroundColor: isDarkMode ? "#121212" : "#fff",
                    },
                    headerTintColor: isDarkMode ? "#fff" : "#000",
                }}
            />

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

                {/* Sección de planes de suscripción */}
                <Text style={[styles.sectionTitle, isDarkMode && styles.textDark]}>
                    Planes de Suscripción
                </Text>
                <View style={[styles.card, isDarkMode && styles.cardDark]}>
                    <Text style={[styles.name, isDarkMode && styles.textLight]}>
                        Plan {selectedPersonal.type}
                    </Text>
                    <Text style={[styles.type, isDarkMode && styles.textMuted]}>
                        {selectedPersonal.type}
                    </Text>
                    <Text style={[styles.price, isDarkMode && styles.priceDark]}>
                        ${selectedPersonal.price}/mes
                    </Text>
                    <View style={styles.featuresContainer}>
                        <Text style={[styles.feature, isDarkMode && styles.textLight]}>
                            • Asesoría personalizada
                        </Text>
                        <Text style={[styles.feature, isDarkMode && styles.textLight]}>
                            • Acceso a contenido exclusivo
                        </Text>
                        <Text style={[styles.feature, isDarkMode && styles.textLight]}>
                            • Seguimiento de progreso
                        </Text>
                        <Text style={[styles.feature, isDarkMode && styles.textLight]}>
                            • Consultas ilimitadas
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.subscribeButton, isDarkMode && styles.subscribeButtonDark]}
                        onPress={handleSubscribe}
                    >
                        <Text style={styles.subscribeButtonText}>Suscribirse</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>


    );
};

// Estilos
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
    card: {
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
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
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#333",
    },
    textLight: {
        color: "#fff",
    },
    textMuted: {
        color: "#b3b3b3",
    },
    type: {
        fontSize: 16,
        marginBottom: 8,
        color: "#666",
    },
    price: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 16,
        color: "#ffa000",
    },
    priceDark: {
        color: "#ffd700",
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
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "#009688",
    },
    subscribeButtonDark: {
        backgroundColor: "#FF3D00",
    },
    subscribeButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});

export default PersonalDetails;
