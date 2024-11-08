import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Vibration, Platform, SafeAreaView, Dimensions } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlay, faPause, faRedo, faForward } from "@fortawesome/free-solid-svg-icons";
import { Stack, useLocalSearchParams } from "expo-router";
import { useDarkMode } from "../../components/Utils/DarkModeProvider";
import Svg, { Circle } from 'react-native-svg';
import * as Haptics from 'expo-haptics';

const { width, height } = Dimensions.get('window');
const isSmallDevice = width < 375;

const ExerciseTimer = () => {
    const { title } = useLocalSearchParams();
    const { isDarkMode } = useDarkMode();

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isResting, setIsResting] = useState(false);
    const [sets, setSets] = useState(0);
    const [restSeconds, setRestSeconds] = useState(30);

    const timerRef = useRef(null);

    useEffect(() => {
        if (isActive && !isResting) {
            timerRef.current = global.setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        } else if (isResting) {
            timerRef.current = global.setInterval(() => {
                setRestSeconds((prevSeconds) => {
                    if (prevSeconds <= 1) {
                        handleRestEnd();
                        return 30;
                    }
                    return prevSeconds - 1;
                });
            }, 1000);
        } else {
            global.clearInterval(timerRef.current);
        }

        return () => global.clearInterval(timerRef.current);
    }, [isActive, isResting]);

    const handleStartStop = () => {
        if (Platform.OS === 'ios') {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        } else {
            Vibration.vibrate(100);
        }
        setIsActive(!isActive);
    };

    const handleReset = () => {
        if (Platform.OS === 'ios') {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
        } else {
            Vibration.vibrate([0, 100, 100, 100]);
        }
        setIsActive(false);
        setSeconds(0);
        setRestSeconds(30);
        setSets(0);
        setIsResting(false);
    };

    const handleNextSet = async () => {
        if (Platform.OS === 'ios') {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        } else {
            Vibration.vibrate([0, 100, 50, 100]);
        }
        setSets((prevSets) => prevSets + 1);
        setIsResting(true);
        setIsActive(true);
    };

    const handleRestEnd = () => {
        setIsResting(false);
        setIsActive(false);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const remainingSeconds = time % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const radius = Math.min(width, height) * 0.25;
    const circumference = 2 * Math.PI * radius;
    const progress = isResting
        ? ((30 - restSeconds) / 30) * circumference
        : (seconds / 60) * circumference;

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? "#121212" : "#F3F4F6" }]}>
            <Stack.Screen
                options={{
                    headerTitle: "Regresar",
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: isDarkMode ? "#121212" : "#fff",
                    },
                    headerTintColor: isDarkMode ? "#fff" : "#000",
                }}
            />
            <View style={styles.content}>
                <Text
                    style={[
                        styles.title,
                        { color: isDarkMode ? "#ffffff" : "#333333" },
                    ]}
                >
                    {title ? title : "Ejercicio"}
                </Text>

                <Text
                    style={[
                        styles.subTitle,
                        { color: isDarkMode ? "#cccccc" : "#666666" },
                    ]}
                >
                    {isResting ? "Tiempo de descanso" : "¡Mantén el ritmo!"}
                </Text>

                <View style={styles.timerContainer}>
                    <Svg width={radius * 2} height={radius * 2}>
                        <Circle
                            stroke={isDarkMode ? "#333" : "#e0e0e0"}
                            fill="none"
                            cx={radius}
                            cy={radius}
                            r={radius - 10}
                            strokeWidth="10"
                        />
                        <Circle
                            stroke={isDarkMode ? "#76FF03" : "#273AB7"}
                            fill="none"
                            cx={radius}
                            cy={radius}
                            r={radius - 10}
                            strokeWidth="10"
                            strokeDasharray={circumference}
                            strokeDashoffset={circumference - progress}
                            strokeLinecap="round"
                        />
                    </Svg>
                    <View style={styles.timerTextContainer}>
                        <Text
                            style={[
                                styles.timer,
                                { color: isDarkMode ? "#76FF03" : "#273AB7" },
                            ]}
                        >
                            {isResting ? formatTime(restSeconds) : formatTime(seconds)}
                        </Text>
                        <Text style={[styles.sets, { color: isDarkMode ? "#ffffff" : "#333333" }]}>
                            Set: {sets}
                        </Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            isActive ? styles.pauseButton : styles.startButton,
                            { backgroundColor: isDarkMode ? "#444" : isActive ? "#FF1744" : "#40be6e" },
                        ]}
                        onPress={handleStartStop}
                    >
                        <FontAwesomeIcon
                            icon={isActive ? faPause : faPlay}
                            size={isSmallDevice ? 16 : 20}
                            color="#ffffff"
                        />
                        <Text style={styles.buttonText}>
                            {isActive ? "Pausar" : "Iniciar"}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.button,
                            { backgroundColor: isDarkMode ? "#444" : "#FF1744" },
                        ]}
                        onPress={handleReset}
                    >
                        <FontAwesomeIcon icon={faRedo} size={isSmallDevice ? 16 : 20} color="#ffffff" />
                        <Text style={styles.buttonText}>Reiniciar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.button,
                            { backgroundColor: isDarkMode ? "#444" : "#273AB7" },
                        ]}
                        onPress={handleNextSet}
                    >
                        <FontAwesomeIcon icon={faForward} size={isSmallDevice ? 16 : 20} color="#ffffff" />
                        <Text style={styles.buttonText}>Siguiente Set</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: isSmallDevice ? 24 : 28,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: 'center',
    },
    subTitle: {
        textAlign: "center",
        fontSize: isSmallDevice ? 14 : 16,
        fontStyle: "italic",
        marginBottom: 20,
    },
    timerContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    timerTextContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timer: {
        fontSize: isSmallDevice ? 32 : 40,
        fontWeight: "200",
    },
    sets: {
        fontSize: isSmallDevice ? 16 : 18,
        fontWeight: "600",
        marginTop: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: isSmallDevice ? 10 : 12,
        paddingHorizontal: isSmallDevice ? 16 : 20,
        borderRadius: 25,
        margin: 5,
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    startButton: {
        backgroundColor: "#76FF03",
    },
    pauseButton: {
        backgroundColor: "#FF1744",
    },
    buttonText: {
        fontSize: isSmallDevice ? 14 : 16,
        fontWeight: "600",
        color: "#ffffff",
        marginLeft: 8,
    },
});

export default ExerciseTimer;