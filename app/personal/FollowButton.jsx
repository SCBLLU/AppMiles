import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const FollowButton = ({ isFollowing, onFollow }) => (
    <TouchableOpacity
        style={[
            styles.baseButton,
            isFollowing ? styles.followingButton : styles.notFollowingButton,
            isFollowing && styles.buttonShadow,
        ]}
        onPress={onFollow}
    >
        <Text style={styles.followButtonText}>
            {isFollowing ? 'Siguiendo' : 'Seguir'}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    baseButton: {
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        marginRight: 8,
    },
    followingButton: {
        backgroundColor: '#333', // Color de fondo cuando está siguiendo
    },
    notFollowingButton: {
        backgroundColor: '#1DB954', // Color de fondo cuando no está siguiendo
    },
    buttonShadow: {
        elevation: 2, // Sombra para Android
        shadowColor: '#000', // Sombra para iOS
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    followButtonText: {
        color: '#fff', // Color del texto
        fontWeight: '600', // Subtle weight increase
        textAlign: 'center',
        fontSize: 14,
    },
});

export default FollowButton;
