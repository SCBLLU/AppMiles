import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,

} from "react-native-reanimated";

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export default function ExploreButton({ onPress, isDarkMode }) {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    const handlePressIn = () => {
        scale.value = withSpring(0.95);
    };

    const handlePressOut = () => {
        scale.value = withSpring(1);
    };

    return (
        <AnimatedTouchableOpacity
            style={[styles.button, isDarkMode && styles.buttonDark, animatedStyle]}
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityLabel="Explorar Personal"
        >
            <FontAwesomeIcon
                icon={faCompass}
                style={styles.icon}
                size={20}
            />
            <Text style={styles.buttonText}>Explorar Personal</Text>
        </AnimatedTouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        backgroundColor: "#007BFF",
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonDark: {
        backgroundColor: "#333",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 8,
    },
    icon: {
        color: "#fff",
    },
});