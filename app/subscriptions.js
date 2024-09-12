import React, { useState } from "react";
import { ScrollView } from "react-native";
import Preguntas from "../components/Planes/Preguntas";
import Planes from "../components/Planes/Planes";
import Screen from "../components/Screen";
import { Stack } from "expo-router";
import Logo from "../components/Logo";

export default function Subscription() {
    const [preguntaActiva, setPreguntaActiva] = useState(null);

    const manejarPresionPregunta = (index) => {
        setPreguntaActiva((prev) => (prev === index ? null : index));
    };

    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerTitle: "Planes",
                    headerLeft: () => <Logo />,
                }}
            />
            <ScrollView contentContainerStyle>
                <Preguntas
                    preguntaActiva={preguntaActiva}
                    manejarPresionPregunta={manejarPresionPregunta}
                />
                <Planes />
            </ScrollView>
        </Screen>
    );
}
