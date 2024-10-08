import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutMe = ({ description, isDarkMode }) => {
    return (
        <View style={[styles.container, isDarkMode && styles.containerDark]}>
            <Text style={[styles.title, isDarkMode && styles.textDark]}>
                Acerca de mí
            </Text>
            <Text style={[styles.description, isDarkMode && styles.textMutedDark]}>
                {description}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        marginBottom: 20,
    },
    containerDark: {
        backgroundColor: '#2c2c2c',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    textDark: {
        color: '#fff',
    },
    description: {
        fontSize: 16,
        color: '#666',
    },
    textMutedDark: {
        color: '#b3b3b3',
    },
});

export default AboutMe;
