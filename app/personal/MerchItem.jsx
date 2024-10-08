import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MerchItem = ({ item, isDarkMode }) => (
    <TouchableOpacity style={styles.merchItem}>
        <Image source={{ uri: item.imageUrl }} style={styles.merchImage} />
        <Text style={[styles.merchName, isDarkMode && styles.textDark]}>{item.name}</Text>
        <Text style={[styles.merchPrice, isDarkMode && styles.textMutedDark]}>${item.price}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
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

export default MerchItem;
