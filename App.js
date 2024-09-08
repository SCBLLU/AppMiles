import React from "react";
import { View, ScrollView, StatusBar } from "react-native";
import Main from "./components/Main";

export default function App() {
  return (
    <View>
      <ScrollView>
        <Main />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
