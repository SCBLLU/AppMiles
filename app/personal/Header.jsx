import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ personal, isDarkMode }) => (
    <View style={styles.header}>
        <Image
            source={{ uri: personal.imageUrl || "https://via.placeholder.com/200" }}
            style={styles.avatar}
        />
        <View style={styles.headerInfo}>
            <Text style={[styles.title, isDarkMode && styles.textDark]}>
                {personal.name}
            </Text>
            <Text style={[styles.subtitle, isDarkMode && styles.textMutedDark]}>
                {personal.type}
            </Text>
            <View style={styles.stats}>
                <Text style={[styles.statText, isDarkMode && styles.textDark]}>
                    <Ionicons name="people" size={16} color={isDarkMode ? "#fff" : "#000"} /> 1.5K seguidores
                </Text>
                <Text style={[styles.statText, isDarkMode && styles.textDark]}>
                    <Ionicons name="person-add" size={16} color={isDarkMode ? "#fff" : "#000"} /> 500 suscriptores
                </Text>
                <Text style={[styles.statText, isDarkMode && styles.textDark]}>
                    <Ionicons name="star" size={16} color={isDarkMode ? "#fff" : "#000"} /> {personal.ranking || "N/A"}
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
});

export default Header;
