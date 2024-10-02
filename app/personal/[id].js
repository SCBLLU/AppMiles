import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import { useDarkMode } from "../../components/Utils/DarkModeProvider";
import data from "../../data/data.json";

const PersonalDetails = () => {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const { isDarkMode } = useDarkMode();
    const personal = data.personal || [];

    const selectedPersonal = personal.find((p) => p.id === String(id));

    if (!selectedPersonal) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Personal no encontrado.</Text>
            </View>
        );
    }

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: isDarkMode ? "#121212" : "#fff" },
            ]}
        >
            <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}>
                {selectedPersonal.name}
            </Text>
            <Text style={[styles.subtitle, { color: isDarkMode ? "#b3b3b3" : "#666" }]}>
                Tipo: {selectedPersonal.type}
            </Text>
            {/* Agrega más información aquí si lo deseas */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "flex-start",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 16,
        marginTop: 5,
    },
});

export default PersonalDetails;
