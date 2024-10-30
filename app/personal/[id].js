import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, FlatList, Text } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useDarkMode } from '../../components/Utils/DarkModeProvider';
import data from '../../data/data.json';
import Header from './Header';
import FollowButton from './FollowButton';
import AboutMe from './AboutMe';
import SubscriptionPlan from './SubscriptionPlan';
import MetodoPago from './MetodoPago';
import MerchItem from './MerchItem';
import Footer from './Footer';
import SocialMediaLinks from './SocialMediaLinks';

const PersonalDetails = () => {
    const { id } = useLocalSearchParams();
    const { isDarkMode } = useDarkMode();
    const personal = data.personal || [];
    const selectedPersonal = personal.find((p) => p.id === String(id));

    const merchData = selectedPersonal?.merch || [];
    const [isFollowing, setIsFollowing] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isPaymentVisible, setPaymentVisible] = useState(false);
    const plans = data.plans || [];

    if (!selectedPersonal) {
        return (
            <View style={[styles.container, isDarkMode ? styles.containerDark : styles.containerLight]}>
                <Text style={styles.title}>Personal no encontrado.</Text>
            </View>
        );
    }

    const handleFollow = () => setIsFollowing(prev => !prev);
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
                        backgroundColor: isDarkMode ? "#1B1B1B" : "#fff",
                    },
                    headerTintColor: isDarkMode ? "#fff" : "#000",
                }}
            />

            <ScrollView style={[styles.container, isDarkMode ? styles.containerDark : styles.containerLight]}>
                <Header personal={selectedPersonal} isDarkMode={isDarkMode} />
                <FollowButton isFollowing={isFollowing} onFollow={handleFollow} />
                <AboutMe description={selectedPersonal.description} isDarkMode={isDarkMode} />


                <Text style={[styles.sectionTitle, { color: isDarkMode ? '#1DB954' : '#000' }]}>Planes de Suscripción</Text>
                {plans.map((plan) => (
                    <SubscriptionPlan
                        key={plan.id}
                        plan={plan}
                        isDarkMode={isDarkMode}
                        onSubscribe={() => handleSubscribe(plan.id)}
                        isSelected={selectedPlan?.id === plan.id}
                    />
                ))}

                <Text style={[styles.sectionTitle, { color: isDarkMode ? '#1DB954' : '#000' }]}>Merchandising</Text>
                <FlatList
                    style={styles.merchList}
                    data={merchData}
                    renderItem={renderMerchItem}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                <SocialMediaLinks isDarkMode={isDarkMode} title='También disponible en las siguientes plataformas' />

                {isPaymentVisible && (
                    <MetodoPago
                        selectedPlan={selectedPlan}
                        visible={isPaymentVisible}
                        onCancel={() => setPaymentVisible(false)}
                    />
                )}
                <Footer />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    containerLight: {
        backgroundColor: '#fff',
    },
    containerDark: {
        backgroundColor: '#121212',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    merchList: {
        paddingVertical: 10,
    },
});

export default PersonalDetails;
