import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ personal, isDarkMode }) => (
    <View style={[styles.header, { backgroundColor: isDarkMode ? '#1B1B1B' : '#fff' }]}>
        <Image
            source={{ uri: personal.imageUrl || "https://via.placeholder.com/200" }}
            style={styles.avatar}
        />
        <View style={styles.headerInfo}>
            <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>{personal.name}</Text>
            <Text style={[styles.subtitle, { color: isDarkMode ? '#b3b3b3' : '#666' }]}>{personal.type}</Text>
            <View style={styles.stats}>
                <Text style={[styles.statText, { color: isDarkMode ? '#fff' : '#000' }]}>
                    <Ionicons name="people" size={16} color={isDarkMode ? '#fff' : '#000'} /> 1.5K seguidores
                </Text>
                <Text style={[styles.statText, { color: isDarkMode ? '#fff' : '#000' }]}>
                    <Ionicons name="person-add" size={16} color={isDarkMode ? '#fff' : '#000'} /> 500 suscriptores
                </Text>
                <Text style={[styles.statText, { color: isDarkMode ? '#fff' : '#000' }]}>
                    <Ionicons name="star" size={16} color={isDarkMode ? '#fff' : '#000'} /> {personal.ranking || "N/A"}
                </Text>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderRadius: 20,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 15,
        borderWidth: 2,
        borderColor: '#1DB954', // Borde verde para el avatar
    },
    headerInfo: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
    },
    subtitle: {
        fontSize: 14,
        marginTop: 4,
    },
    stats: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8,
    },
    statText: {
        fontSize: 13,
        marginRight: 12,
        marginBottom: 4,
    },
});

export default Header;
