import React, { useState } from "react";
import { StyleSheet, View, ScrollView, StatusBar } from "react-native";
import Logo from "./Logo";
import Preguntas from "./Preguntas";
import Planes from "./Planes";

export default function App() {
  const [preguntaActiva, setPreguntaActiva] = useState(null);

  const manejarPresionPregunta = (index) => {
    setPreguntaActiva((prev) => (prev === index ? null : index));
  };

  return (
    <View style={styles.contenedor}>
      <ScrollView contentContainerStyle={styles.contenidoScrollView}>
        <Logo />
        <Preguntas
          preguntaActiva={preguntaActiva}
          manejarPresionPregunta={manejarPresionPregunta}
        />
        <Planes />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  contenidoScrollView: {
    alignItems: "center",
  },
});
