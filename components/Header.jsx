import React from "react";
import { View, StyleSheet, Platform, StatusBar } from "react-native";
import { useDarkMode } from "./DarkModeProvider";
import Profile from "./Perfil";
const Header = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <View
      style={[
        styles.headerContainer,
        { backgroundColor: isDarkMode ? "#121212" : "#fff" }, //Color de fondo del header
      ]}
    >
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
      ios: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 40, // Ajusta el padding para iOS
    }),
  },
});

export default Header;
