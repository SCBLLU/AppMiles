import { View, Text, StyleSheet } from "react-native";

export default function Nosotros() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nosotros</Text>
      <Text style={styles.text}>
        This is a simple app that uses the Spotify API to display a user's top
        tracks and artists. It was created by Miles.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
