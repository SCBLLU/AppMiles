import React, { useState } from "react";
import { StyleSheet, View, ScrollView, StatusBar } from "react-native";
import Logo from "./components/Logo";
import Cursos from "./components/Cursos";
import Planes from "./components/Planes";

export default function App() {
  const [cursoActivo, setCursoActivo] = useState(null);

  const manejarPresiónCurso = (index) => {
    setCursoActivo((prev) => (prev === index ? null : index));
  };

  return (
    <View style={styles.contenedor}>
      <ScrollView contentContainerStyle={styles.contenidoScrollView}>
        <Logo />
        <Cursos
          cursoActivo={cursoActivo}
          manejarPresiónCurso={manejarPresiónCurso}
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
