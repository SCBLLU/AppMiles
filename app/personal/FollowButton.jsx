import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const FollowButton = ({ isFollowing, onFollow }) => (
    <TouchableOpacity
        style={[styles.followButton, isFollowing && styles.followingButton]}
        onPress={onFollow}
    >
        <Text style={styles.followButtonText}>
            {isFollowing ? 'Siguiendo' : 'Seguir'}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
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
});

export default FollowButton;
