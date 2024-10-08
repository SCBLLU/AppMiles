import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { useDarkMode } from '../../components/Utils/DarkModeProvider';
import { Ionicons } from '@expo/vector-icons';
import MetodoPago from './MetodoPago'; // Asegúrate de importar tu componente de pago
import data from '../../data/data.json';

const plans = [
    { id: 'basic', name: 'Básico', price: 9.99, color: '#4CAF50' },
    { id: 'pro', name: 'Pro', price: 19.99, color: '#2196F3' },
    { id: 'premium', name: 'Premium', price: 29.99, color: '#FFC107' },
];

const PersonalDetails = () => {
    const { id } = useLocalSearchParams();
    const { isDarkMode } = useDarkMode();
    const personal = data.personal || [];
    const selectedPersonal = personal.find((p) => p.id === String(id));

    const [isFollowing, setIsFollowing] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isPaymentVisible, setPaymentVisible] = useState(false);

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

    const handleSubscribe = (planId) => {
        setSelectedPlan(plans.find(plan => plan.id === planId)); // Encuentra el plan completo
        setPaymentVisible(true); // Muestra el modal de pago
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
                    headerBackTitleVisible: false, // Oculta el título del botón de retroceso en iOS
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
                                <Ionicons name="person-add" size={16} color={isDarkMode ? "#fff" : "#000"} /> 500 suscriptores
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
                {plans.map((plan) => (
                    <View key={plan.id} style={[styles.card, isDarkMode && styles.cardDark]}>
                        <Text style={[styles.planName, { color: plan.color }]}>
                            Plan {plan.name}
                        </Text>
                        <Text style={[styles.planPrice, { color: plan.color }]}>
                            ${plan.price}/mes
                        </Text>
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
                            onPress={() => handleSubscribe(plan.id)}
                        >
                            <Text style={styles.subscribeButtonText}>
                                {selectedPlan?.id === plan.id ? 'Suscrito' : 'Suscribirse'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}

                <Text style={[styles.sectionTitle, isDarkMode && styles.textDark]}>
                    Merchandising
                </Text>
                <FlatList style={{ paddingHorizontal: 20, paddingBottom: 20 }}
                    data={[
                        { id: '1', name: 'Camiseta', price: 29.99, imageUrl: 'https://shop.spotify.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0390%2F6749%2Fproducts%2FE_CC2_BoxSets-03_BoxSet2_1.png%3Fv%3D1658175224%26width%3D828&w=828&q=75' },
                        { id: '2', name: 'Botella', price: 14.99, imageUrl: 'https://shop.spotify.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0390%2F6749%2Ffiles%2FKamikaze-Vinyl-Green_1.png%3Fv%3D1687283871%26width%3D828&w=828&q=75' },
                        { id: '3', name: 'Gorra', price: 19.99, imageUrl: 'https://shop.spotify.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0390%2F6749%2Fproducts%2FE_CC2_2LP-01.png%3Fv%3D1657736210%26width%3D828&w=828&q=75' },
                        { id: '4', name: 'Taza', price: 9.99, imageUrl: 'https://shop.spotify.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0390%2F6749%2Fproducts%2F5_RELAPSELP-Blackvinyl.png%3Fv%3D1623249319%26width%3D828&w=828&q=75' },
                        { id: '5', name: 'Póster', price: 4.99, imageUrl: 'https://shop.spotify.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0390%2F6749%2Fproducts%2F4F3A1195.jpg%3Fv%3D1690915794%26width%3D828&w=828&q=75' },
                        { id: '6', name: 'Pegatina', price: 1.99, imageUrl: 'https://shop.spotify.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0272%2F7605%2F0568%2Ffiles%2FUntitledSession0873P-1_1.jpg%3Fv%3D1694634483%26width%3D828&w=828&q=75' },
                        { id: '7', name: 'Libreta', price: 9.99, imageUrl: 'https://shop.spotify.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0272%2F7605%2F0568%2Fproducts%2Fdamn2lp_d7e03e5a-650b-4afd-8746-beaf9b8c1d7d.png%3Fv%3D1690926244%26width%3D828&w=828&q=75' },
                        { id: '8', name: 'Mochila', price: 39.99, imageUrl: 'https://shop.spotify.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0272%2F7605%2F0568%2Fproducts%2FLAMAR_BOXSET_GROUP_BLACK.png%3Fv%3D1694543084%26width%3D828&w=828&q=75' },
                    ]}
                    renderItem={renderMerchItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                {isPaymentVisible && (
                    <MetodoPago
                        selectedPlan={selectedPlan} // Pasar el plan seleccionado
                        visible={isPaymentVisible} // Controla la visibilidad del modal
                        onCancel={() => setPaymentVisible(false)} // Cierra el modal
                    />
                )}
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
        flexWrap: 'wrap',
        marginTop: 8,
    },
    statText: {
        fontSize: 14,
        marginRight: 16,
        marginBottom: 4,
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