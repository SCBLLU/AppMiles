import React, { useState } from "react";
import { ScrollView } from "react-native";
import Preguntas from "../components/Planes/Preguntas";
import Planes from "../components/Planes/Planes";
import MetodoPago from "../components/Planes/Pago";
import Screen from "../components/Utils/Screen";

export default function Subscription() {
    const [preguntaActiva, setPreguntaActiva] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [paymentVisible, setPaymentVisible] = useState(false);

    const manejarPresionPregunta = (index) => {
        setPreguntaActiva((prev) => (prev === index ? null : index));
    };

    // Función para manejar la selección de plan
    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
        setPaymentVisible(true); // Mostrar el formulario de pago cuando se seleccione un plan
    };

    // Función para cancelar el proceso de pago
    const handlePaymentCancel = () => {
        setPaymentVisible(false);
        setSelectedPlan(null); // Restablecer la selección de plan
    };

    return (
        <Screen>
            <ScrollView contentContainerStyle>
                <Preguntas
                    preguntaActiva={preguntaActiva}
                    manejarPresionPregunta={manejarPresionPregunta}
                />
                <Planes onPlanSelect={handlePlanSelect} />
                {selectedPlan && (
                    <MetodoPago
                        selectedPlan={selectedPlan}
                        visible={paymentVisible}
                        onCancel={handlePaymentCancel}
                    />
                )}
            </ScrollView>
        </Screen>
    );
}
