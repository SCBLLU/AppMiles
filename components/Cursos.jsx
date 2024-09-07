import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Proximamente from "./Proximamente";

const { width } = Dimensions.get("window");

const Cursos = ({ cursoActivo, manejarPresiónCurso }) => {
  const [cursoAbierto, setCursoAbierto] = useState(null);

  const cursos = [
    {
      titulo: "Introducción a JavaScript",
      descripcion:
        "Aprende los fundamentos de JavaScript y cómo programar en este lenguaje.",
    },
    {
      titulo: "Fundamentos de React",
      descripcion:
        "Aprende a crear aplicaciones web con React y Redux desde cero.",
    },
    {
      titulo: "Desarrollo en React Native",
      descripcion:
        "Aprende a crear aplicaciones móviles con React Native y Expo.",
    },
  ];

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Cursos de programación</Text>
      <Text style={styles.informacion}>
        Conoce de nuestros curso y como puedes aprender a mejorar en la
        programación
      </Text>
      {cursos.map((curso, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.tarjetaCurso, cursoActivo === index]}
          onPress={() => {
            if (cursoAbierto === index) {
              setCursoAbierto(null);
            } else {
              manejarPresiónCurso(index);
              setCursoAbierto(index);
            }
          }}
        >
          <Text style={styles.tituloCurso}>{curso.titulo}</Text>
          {cursoAbierto === index && (
            <Text style={styles.descripcionCurso}>{curso.descripcion}</Text>
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
  },
  tarjetaCurso: {
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

  tituloCurso: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descripcionCurso: {
    fontSize: 16,
    color: "#555",
  },
});

export default Cursos;
