import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { useDarkMode } from '../../components/Utils/DarkModeProvider';
import { Ionicons } from '@expo/vector-icons';
import data from '../../data/data.json';

const PersonalDetails = () => {
    const { id } = useLocalSearchParams();
    const { isDarkMode } = useDarkMode();
    const router = useRouter();
    const personal = data.personal || [];
    const selectedPersonal = personal.find((p) => p.id === String(id));

    const [isFollowing, setIsFollowing] = useState(false);

    if (!selectedPersonal) {
        return (
            <View style={[styles.container, isDarkMode && styles.containerDark]}>
                <Text style={[styles.title, isDarkMode && styles.textDark]}>
                    Personal no encontrado.
                </Text>
            </View>
        );
    }

    const handleFollow = () => {
        setIsFollowing(!isFollowing);
    };

    const renderMerchItem = ({ item }) => (
        <TouchableOpacity style={styles.merchItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.merchImage} />
            <Text style={[styles.merchName, isDarkMode && styles.textDark]}>{item.name}</Text>
            <Text style={[styles.merchPrice, isDarkMode && styles.textMutedDark]}>${item.price}</Text>
        </TouchableOpacity>
    );

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
                <View style={styles.header}>
                    <Image
                        source={{ uri: selectedPersonal.imageUrl || "https://via.placeholder.com/200" }}
                        style={styles.avatar}
                    />
                    <View style={styles.headerInfo}>
                        <Text style={[styles.title, isDarkMode && styles.textDark]}>
                            {selectedPersonal.name}
                        </Text>
                        <Text style={[styles.subtitle, isDarkMode && styles.textMutedDark]}>
                            {selectedPersonal.type}
                        </Text>
                        <View style={styles.stats}>
                            <Text style={[styles.statText, isDarkMode && styles.textDark]}>
                                <Ionicons name="people" size={16} color={isDarkMode ? "#fff" : "#000"} /> 1.5K seguidores
                            </Text>
                            <Text style={[styles.statText, isDarkMode && styles.textDark]}>
                                <Ionicons name="star" size={16} color={isDarkMode ? "#fff" : "#000"} /> {selectedPersonal.ranking || "N/A"}
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.actionButtons}>
                    <TouchableOpacity
                        style={[styles.followButton, isFollowing && styles.followingButton]}
                        onPress={handleFollow}
                    >
                        <Text style={styles.followButtonText}>
                            {isFollowing ? 'Siguiendo' : 'Seguir'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="share-social" size={24} color={isDarkMode ? "#fff" : "#000"} />
                    </TouchableOpacity>
                </View>

                <Text style={[styles.sectionTitle, isDarkMode && styles.textDark]}>
                    Sobre mí
                </Text>
                <Text style={[styles.description, isDarkMode && styles.textDark]}>
                    {selectedPersonal.description || 'No hay descripción disponible.'}
                </Text>

                <Text style={[styles.sectionTitle, isDarkMode && styles.textDark]}>
                    Planes de Suscripción
                </Text>
                <View style={[styles.card, isDarkMode && styles.cardDark]}>
                    <Text style={[styles.planName, isDarkMode && styles.textLight]}>
                        Plan {selectedPersonal.type}
                    </Text>
                    <Text style={[styles.planPrice, isDarkMode && styles.priceDark]}>
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
                        style={styles.subscribeButton}
                        onPress={() => console.log('Suscripción solicitada')}
                    >
                        <Text style={styles.subscribeButtonText}>Suscribirse</Text>
                    </TouchableOpacity>
                </View>

                <Text style={[styles.sectionTitle, isDarkMode && styles.textDark]}>
                    Merchandising
                </Text>
                <FlatList
                    data={[
                        { id: '1', name: 'Camiseta', price: 29.99, imageUrl: 'https://via.placeholder.com/100' },
                        { id: '2', name: 'Botella', price: 14.99, imageUrl: 'https://via.placeholder.com/100' },
                        { id: '3', name: 'Gorra', price: 19.99, imageUrl: 'https://via.placeholder.com/100' },
                        { id: '4', name: 'Mochila', price: 39.99, imageUrl: 'https://via.placeholder.com/100' },
                        { id: '5', name: 'Toalla', price: 9.99, imageUrl: 'https://via.placeholder.com/100' },
                        { id: '6', name: 'Calcetines', price: 4.99, imageUrl: 'https://via.placeholder.com/100' },
                        { id: '7', name: 'Pulsera', price: 2.99, imageUrl: 'https://via.placeholder.com/100' },
                        { id: '8', name: 'Mascarilla', price: 3.99, imageUrl: 'https://via.placeholder.com/100' },
                    ]}
                    renderItem={renderMerchItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerDark: {
        backgroundColor: '#121212',
    },
    header: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginRight: 20,
    },
    headerInfo: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    textDark: {
        color: '#fff',
    },
    textMutedDark: {
        color: '#b3b3b3',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 4,
    },
    stats: {
        flexDirection: 'row',
        marginTop: 8,
    },
    statText: {
        fontSize: 14,
        marginRight: 16,
        color: '#000',
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    followButton: {
        backgroundColor: '#1DB954',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        flex: 1,
        marginRight: 10,
    },
    followingButton: {
        backgroundColor: '#333',
    },
    followButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    iconButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: 10,
        borderRadius: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 20,
        color: '#000',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        paddingHorizontal: 20,
        marginBottom: 20,
        color: '#000',
    },
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
        color: "#333",
    },
    textLight: {
        color: "#fff",
    },
    planPrice: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 16,
        color: "#1DB954",
    },
    priceDark: {
        color: "#1DB954",
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
        backgroundColor: "#1DB954",
    },
    subscribeButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    merchItem: {
        width: 120,
        marginRight: 16,
    },
    merchImage: {
        width: 120,
        height: 120,
        borderRadius: 8,
        marginBottom: 8,
    },
    merchName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    merchPrice: {
        fontSize: 14,
        color: '#666',
    },
});

export default PersonalDetails;