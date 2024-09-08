import { View, StatusBar, StyleSheet } from "react-native";
import Main from "./components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (

    <SafeAreaProvider>
      <View style={styles.contenedor}>
        <StatusBar style="auto" />

        <Main />
      </View>
    </SafeAreaProvider>

  );
}
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

});