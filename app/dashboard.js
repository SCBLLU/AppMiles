import React from "react";
import { ScrollView } from "react-native";
import Screen from "../components/Utils/Screen";
import Menu from "../components/Menu/Caracteristicas";
import DatosGenerales from "../components/Menu/DatosGenerales";
import DatosPasos from "../components/Menu/DatosPasos";
import ActividadesFisicas from "../components/Menu/ActividadesFisicas";

// Función para generar números aleatorios en un rango
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Función para generar datos aleatorios de prueba con lógica
const generateRandomData = () => {
    const currentSteps = getRandomNumber(500, 10000);
    const goalSteps = getRandomNumber(3000, 6000);
    const minutes = getRandomNumber(30, 800);
    const calories = getRandomNumber(100, 600);

    return {
        currentSteps,
        goalSteps,
        minutes,
        calories,
    };
};

export default function Dashboard() {
    const { currentSteps, goalSteps, minutes, calories } = generateRandomData();

    return (
        <Screen>
            <ScrollView contentContainerStyle={{}}>
                <DatosPasos currentSteps={currentSteps} goalSteps={goalSteps} />
                <DatosGenerales steps={currentSteps} minutes={minutes} calories={calories} />
                <ActividadesFisicas />
                <Menu />
            </ScrollView>
        </Screen>
    );
}
