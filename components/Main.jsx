import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Logo from "./Logo";
import Preguntas from "./Preguntas";
import Planes from "./Planes";

export function Main() {
  const [preguntaActiva, setPreguntaActiva] = useState(null);
  const insets = useSafeAreaInsets();

  const manejarPresionPregunta = (index) => {
    setPreguntaActiva((prev) => (prev === index ? null : index));
  };

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <ScrollView contentContainerStyle>
        <Logo />
        <Preguntas
          preguntaActiva={preguntaActiva}
          manejarPresionPregunta={manejarPresionPregunta}
        />
        <Planes />
      </ScrollView>
    </View>
  );
}
