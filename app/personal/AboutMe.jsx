import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutMe = ({ description, isDarkMode }) => {
    return (
        <View style={[styles.container, isDarkMode && styles.containerDark]}>
            <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Acerca de mí</Text>
            <Text style={[styles.description, { color: isDarkMode ? '#b3b3b3' : '#333' }]}>
                {description}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
        shadowRadius: 5,
    },
    containerDark: {
        backgroundColor: '#121212', // Fondo oscuro para modo oscuro
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        lineHeight: 22,
    },
});

export default AboutMe;
