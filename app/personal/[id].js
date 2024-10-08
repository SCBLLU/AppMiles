import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, FlatList, Text } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useDarkMode } from '../../components/Utils/DarkModeProvider';
import MetodoPago from './MetodoPago';
import data from '../../data/data.json';
import Header from './Header';
import AboutMe from './AboutMe';
import FollowButton from './FollowButton';
import SubscriptionPlan from './SubscriptionPlan';
import MerchItem from './MerchItem';

const PersonalDetails = () => {
    const { id } = useLocalSearchParams();
    const { isDarkMode } = useDarkMode();
    const personal = data.personal || [];
    const selectedPersonal = personal.find((p) => p.id === String(id));

    // Obtener merchData del archivo JSON
    const merchData = selectedPersonal?.merch || [];
    const [isFollowing, setIsFollowing] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isPaymentVisible, setPaymentVisible] = useState(false);

    // Acceder a los planes globales
    const plans = data.plans || []; // Cambiado para acceder a los planes globalmente

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
        setIsFollowing(prev => !prev);
    };

    const handleSubscribe = (planId) => {
        const plan = plans.find(plan => plan.id === planId);
        if (plan) {
            setSelectedPlan(plan);
            setPaymentVisible(true);
        }
    };

    const renderMerchItem = ({ item }) => (
        <MerchItem item={item} isDarkMode={isDarkMode} />
    );

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "Regresar",
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: isDarkMode ? "#121212" : "#fff",
                    },
                    headerTintColor: isDarkMode ? "#fff" : "#000",
                }}
            />

            <ScrollView style={[styles.container, isDarkMode && styles.containerDark]}>
                <Header personal={selectedPersonal} isDarkMode={isDarkMode} />
                <FollowButton isFollowing={isFollowing} onFollow={handleFollow} />
                <AboutMe description={selectedPersonal.description} isDarkMode={isDarkMode} />

                <Text style={[styles.sectionTitle, isDarkMode && styles.textDark]}>
                    Planes de Suscripción
                </Text>
                {plans.map((plan) => (
                    <SubscriptionPlan
                        key={plan.id}
                        plan={plan}
                        isDarkMode={isDarkMode}
                        onSubscribe={() => handleSubscribe(plan.id)}
                        isSelected={selectedPlan?.id === plan.id}
                    />
                ))}

                <Text style={[styles.sectionTitle, isDarkMode && styles.textDark]}>
                    Merchandising
                </Text>
                <FlatList
                    style={{ paddingHorizontal: 20, paddingBottom: 20 }}
                    data={merchData}
                    renderItem={renderMerchItem}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                {isPaymentVisible && (
                    <MetodoPago
                        selectedPlan={selectedPlan}
                        visible={isPaymentVisible}
                        onCancel={() => setPaymentVisible(false)}
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    textDark: {
        color: '#fff',
    },
});

export default PersonalDetails;
