import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Proximamente from "./BotonProximamente";

const { width } = Dimensions.get("window");

const Preguntas = ({ preguntaActiva, manejarPresionPregunta }) => {
  const [preguntaAbierta, setPreguntaAbierta] = useState(null);

  const preguntas = [
    {
      titulo: "¿Qué incluye la suscripción básica?",
      descripcion:
        "La suscripción básica incluye acceso a ejercicios personalizados y seguimiento de progreso.",
    },
    {
      titulo: "¿Puedo cancelar mi suscripción en cualquier momento?",
      descripcion:
        "Sí, puedes cancelar tu suscripción en cualquier momento sin cargos adicionales.",
    },
    {
      titulo: "¿Hay descuentos por planes anuales?",
      descripcion:
        "Sí, ofrecemos descuentos si optas por la suscripción anual en lugar de la mensual.",
    },
  ];

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Preguntas Frecuentes</Text>
      <Text style={styles.informacion}>
        Respuestas a las preguntas más comunes sobre nuestras suscripciones.
      </Text>
      {preguntas.map((pregunta, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.tarjetaPregunta, preguntaActiva === index]}
          onPress={() => {
            if (preguntaAbierta === index) {
              setPreguntaAbierta(null);
            } else {
              manejarPresionPregunta(index);
              setPreguntaAbierta(index);
            }
          }}
        >
          <Text style={styles.tituloPregunta}>{pregunta.titulo}</Text>
          {preguntaAbierta === index && (
            <Text style={styles.descripcionPregunta}>
              {pregunta.descripcion}
            </Text>
          )}
        </TouchableOpacity>
      ))}

      <Proximamente />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    alignItems: "center",
    paddingVertical: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  informacion: {
    color: "#666",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
    width: width * 0.9,
  },
  tarjetaPregunta: {
    width: width * 0.9,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  tituloPregunta: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descripcionPregunta: {
    fontSize: 16,
    color: "#555",
  },
});

export default Preguntas;
