import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Proximamente from "./BotonProximamente";
import { useDarkMode } from "../Utils/DarkModeProvider";

const { width } = Dimensions.get("window");

const Preguntas = ({ preguntaActiva, manejarPresionPregunta }) => {
  const [preguntaAbierta, setPreguntaAbierta] = useState(null);
  const { isDarkMode } = useDarkMode(); // Obtener el estado del modo oscuro

  const preguntas = [
    {
      titulo: "¿Qué es AcoMiles?",
      descripcion:
        "AcoMiles es una aplicación innovadora que ofrece un control integral sobre ejercicios personalizados, permitiendo a los usuarios seguir entrenamientos predeterminados o suscribirse a los servicios de entrenadores y nutricionistas certificados.",
    },
    {
      titulo:
        "¿Cuál es el modelo de negocio para entrenadores y nutricionistas?",
      descripcion:
        "Los socios, que son profesionales capacitados en entrenamiento y nutrición, brindan asesoría personalizada a los usuarios. Por cada suscripción a sus servicios, ellos reciben el 70% de la tarifa, mientras que AcoMiles retiene el 30%, asegurando un crecimiento sostenible para ambas partes.",
    },
    {
      titulo: "¿Es posible generar ingresos adicionales como socio?",
      descripcion:
        "Afirmativo. Además de las tarifas de suscripción, los socios tienen la oportunidad de promocionar productos relacionados con el fitness y la nutrición en la sección de 'shop' de la aplicación. De cada venta generada, los socios obtienen el 80% de las ganancias, mientras que AcoMiles se queda con el 20%.",
    },
    {
      titulo:
        "¿Es necesario estar suscrito a un entrenador para utilizar la aplicación?",
      descripcion:
        "No, la aplicación puede ser utilizada sin necesidad de una suscripción a un entrenador. No obstante, al no estar suscrito, los usuarios no podrán acceder a los beneficios de asesorías personalizadas y planes de entrenamiento específicos ofrecidos por los profesionales.",
    },
    {
      titulo: "¿Qué tipo de productos puedo promocionar en la aplicación?",
      descripcion:
        "Los socios tienen la libertad de promocionar productos que se alineen con el entrenamiento y la nutrición, tales como suplementos, equipos de ejercicio y planes de alimentación, entre otros, brindando así un valor agregado a su oferta.",
    },
    {
      titulo: "¿Qué tipo de soporte recibiré como socio?",
      descripcion:
        "AcoMiles se compromete a proporcionar un soporte integral a sus socios, que incluye acceso a recursos de marketing, capacitación continua y asistencia técnica, con el objetivo de maximizar su éxito dentro de la plataforma.",
    },
    {
      titulo: "¿Cómo puedo convertirme en socio de AcoMiles?",
      descripcion:
        "Para convertirte en socio, deberás cumplir con ciertos requisitos de capacitación y certificación establecidos por AcoMiles. Una vez que se complete este proceso de evaluación, podrás ofrecer tus servicios a través de nuestra aplicación.",
    },
  ];

  return (
    <View
      style={[
        styles.contenedor,
        { backgroundColor: isDarkMode ? "#121212" : "#fff" },
      ]}
    >
      <Text style={[styles.titulo, { color: isDarkMode ? "#fff" : "#000" }]}>
        Preguntas Frecuentes
      </Text>
      <Text
        style={[styles.informacion, { color: isDarkMode ? "#ccc" : "#666" }]}
      >
        A continuación, se presentan respuestas a las preguntas más comunes
        sobre AcoMiles y su modelo de negocio.
      </Text>
      {preguntas.map((pregunta, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tarjetaPregunta,
            {
              backgroundColor: isDarkMode ? "#1e1e1e" : "#fff",
              borderColor:
                preguntaActiva === index
                  ? isDarkMode
                    ? "#ccc"
                    : "#000"
                  : "transparent",
            },
            preguntaActiva === index && styles.tarjetaActiva,
          ]}
          onPress={() => {
            if (preguntaAbierta === index) {
              setPreguntaAbierta(null);
            } else {
              manejarPresionPregunta(index);
              setPreguntaAbierta(index);
            }
          }}
        >
          <Text
            style={[
              styles.tituloPregunta,
              { color: isDarkMode ? "#fff" : "#000" },
            ]}
          >
            {pregunta.titulo}
          </Text>
          {preguntaAbierta === index && (
            <Text
              style={[
                styles.descripcionPregunta,
                { color: isDarkMode ? "#ccc" : "#555" },
              ]}
            >
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
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
    width: width * 0.9,
  },
  tarjetaPregunta: {
    width: width * 0.9,
    padding: 20,
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
  },
});

export default Preguntas;
