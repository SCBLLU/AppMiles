import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useDarkMode } from "../Utils/DarkModeProvider";

export const Icono_Login = (props) => {
  const { isDarkMode } = useDarkMode(); // Obtener el estado de modo oscuro

  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style={styles.svg}
          {...props}
        >
          <Path
            d="M320 48a48 48 0 1 0-96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5 1.9 0 3.8.1 5.6.3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3c15 35.8 49.9 59.1 88.7 59.1H384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-21.3c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15C186.6 97.8 175 96 163.3 96c-31 0-60.8 12.3-82.7 34.3l-23.2 23.1c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5l11.5-25.9-9.5-6a95.394 95.394 0 0 1-37.9-44.9L91.2 352z"
            fill={isDarkMode ? "#ffffff" : "#000000"} // Cambia el color según el modo oscuro
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 5,
    alignItems: "center",
  },
  svgContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  svg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default Icono_Login;
