import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const PersonalCard = ({ item, isDarkMode, onPress }) => (
    <TouchableOpacity
        style={[styles.card, isDarkMode && styles.cardDark]}
        onPress={onPress}
    >
        <Image
            source={{ uri: item.imageUrl || "https://via.placeholder.com/100" }}
            style={styles.avatar}
        />
        <View style={styles.textContainer}>
            <Text style={[styles.personalName, isDarkMode && styles.textDark]}>
                {item.name}
            </Text>
            <Text style={[styles.personalType, isDarkMode && styles.textMutedDark]}>
                {item.type}
            </Text>
            <View style={styles.rankContainer}>
                <Ionicons name="star" size={16} color={isDarkMode ? "#ffd700" : "#ffa000"} />
                <Text style={[styles.personalRank, isDarkMode && styles.rankDark]}>
                    {item.ranking || "N/A"}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardDark: {
        backgroundColor: "#333",
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    textContainer: {
        flex: 1,
        marginLeft: 16,
    },
    personalName: {
        fontSize: 18,
        fontWeight: "600",
        color: "#333",
    },
    personalType: {
        fontSize: 14,
        marginTop: 4,
        color: "#666",
    },
    rankContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    personalRank: {
        fontSize: 14,
        fontWeight: "500",
        color: "#ffa000",
        marginLeft: 4,
    },
    textDark: {
        color: "#fff",
    },
    textMutedDark: {
        color: "#b3b3b3",
    },
    rankDark: {
        color: "#ffd700",
    },
});

export default PersonalCard;
