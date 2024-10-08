import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MerchItem = ({ item, isDarkMode }) => (
    <TouchableOpacity
        style={[
            styles.merchItem,
            isDarkMode && styles.merchItemDark,
            isDarkMode && styles.shadowDark,
        ]}
        activeOpacity={0.7}
    >
        <Image source={{ uri: item.imageUrl }} style={styles.merchImage} />
        <Text style={[styles.merchName, { color: isDarkMode ? '#fff' : '#000' }]}>
            {item.name}
        </Text>
        <Text style={[styles.merchPrice, { color: isDarkMode ? '#b3b3b3' : '#666' }]}>
            ${item.price}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    merchItem: {
        width: 100,
        marginRight: 16,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 40,
        backgroundColor: '#fff', // Color de fondo por defecto para modo claro
    },
    merchItemDark: {
        backgroundColor: '#121212', // Fondo oscuro característico de Spotify
    },
    merchImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom: 8,
    },
    merchName: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 4,
    },
    merchPrice: {
        fontSize: 14,
    },
    shadowDark: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});

export default MerchItem;
