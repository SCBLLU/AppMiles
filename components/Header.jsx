import React from "react";
import { View, StyleSheet, Platform, StatusBar, Text } from "react-native";
import { useDarkMode } from "./Utils/DarkModeProvider";
import Profile from "./User";

const Header = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <View
      style={[
        styles.headerContainer,
        { backgroundColor: isDarkMode ? "#121212" : "#fff" }, // Color de fondo del header
      ]}
    >
      <View style={styles.titleContainer}>
        <Text style={[styles.headerTitle, { color: isDarkMode ? "#fff" : "#121212" }]}>
          AcoMiles
        </Text>
      </View>
      <Profile />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingTop: Platform.select({
      ios: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 50, // Ajusta el padding para iOS
    }),
  },
  titleContainer: {
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Header;
