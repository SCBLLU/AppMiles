import React, { useState } from "react";
import { ScrollView } from "react-native";
import Screen from "../components/Utils/Screen";
import Bienvenida from "../components/Colaborar/Bienvenida";
import Preguntas from "../components/Colaborar/Preguntas";


export default function Collaborate() {
    const [preguntaActiva, setPreguntaActiva] = useState(null);


    const manejarPresionPregunta = (index) => {
        setPreguntaActiva((prev) => (prev === index ? null : index));
    };

    return (
        <Screen>
            <ScrollView>
                <Bienvenida />
                <Preguntas
                    preguntaActiva={preguntaActiva}
                    manejarPresionPregunta={manejarPresionPregunta}
                />
            </ScrollView>
        </Screen>
    );
}
