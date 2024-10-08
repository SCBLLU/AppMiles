import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlay, faPause, faRedo } from "@fortawesome/free-solid-svg-icons";
import { Stack, useLocalSearchParams } from "expo-router";
import { useDarkMode } from "../../components/Utils/DarkModeProvider";

const ExerciseTimer = () => {
    const { title } = useLocalSearchParams(); // Captura el título del ejercicio
    const { isDarkMode } = useDarkMode(); // Captura el estado del modo oscuro

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = global.setInterval(() => {
                setSeconds((seconds) => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            global.clearInterval(interval);
        }
        return () => global.clearInterval(interval);
    }, [isActive, seconds]);

    const handleStartStop = () => {
        setIsActive(!isActive);
    };

    const handleReset = () => {
        setIsActive(false);
        setSeconds(0);
    };

    return (
        <>

            <Stack.Screen
                options={{
                    headerTitle: "Regresar",
                    headerBackTitleVisible: false, // Oculta el título del botón de retroceso en iOS
                    headerStyle: {
                        backgroundColor: isDarkMode ? "#121212" : "#fff",
                    },
                    headerTintColor: isDarkMode ? "#fff" : "#000",
                }}

            />
            <View
                style={[
                    styles.container,
                    { backgroundColor: isDarkMode ? "#121212" : "#F3F4F6" }, // Fondo cambia según el modo
                ]}
            >
                {/* Título del ejercicio */}
                <Text
                    style={[
                        styles.title,
                        { color: isDarkMode ? "#ffffff" : "#333333" }, // Color del texto según el modo
                    ]}
                >
                    {title ? title : "Ejercicio"}
                </Text>

                {/* Información adicional */}
                <Text
                    style={[
                        styles.subTitle,
                        { color: isDarkMode ? "#cccccc" : "#666666" },
                    ]}
                >
                    ¡Mantén el ritmo! El cronómetro te ayudará a gestionar tu tiempo.
                </Text>

                {/* Cronómetro */}
                <Text
                    style={[
                        styles.timer,
                        { color: isDarkMode ? "#76FF03" : "#333333" }, // Color del cronómetro
                    ]}
                >
                    {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? "0" : ""}
                    {seconds % 60}
                </Text>

                {/* Botones */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            isActive ? styles.pauseButton : styles.startButton,
                            { backgroundColor: isDarkMode ? "#444" : "#273AB7" }, // Fondo según el modo y estado
                        ]}
                        onPress={handleStartStop}
                    >
                        <FontAwesomeIcon
                            icon={isActive ? faPause : faPlay}
                            size={20}
                            color="#ffffff"
                        />
                        <Text style={styles.buttonText}>
                            {isActive ? "Pausar" : "Iniciar"}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.button,
                            { backgroundColor: isDarkMode ? "#444" : "#FF1744" }, // Botón reiniciar cambia con el modo
                        ]}
                        onPress={handleReset}
                    >
                        <FontAwesomeIcon icon={faRedo} size={20} color="#ffffff" />
                        <Text style={styles.buttonText}>Reiniciar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20,
    },
    subTitle: {
        textAlign: "center",
        fontSize: 16,
        fontStyle: "italic",
        marginBottom: 40,
    },
    timer: {
        fontSize: 72,
        fontWeight: "200",
        marginBottom: 40,
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    startButton: {
        backgroundColor: "#76FF03", // Verde claro
    },
    pauseButton: {
        backgroundColor: "#FF1744", // Rojo para pausar
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#ffffff",
        marginLeft: 10,
    },
});

export default ExerciseTimer;
