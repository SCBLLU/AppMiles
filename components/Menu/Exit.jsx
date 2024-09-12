import React from "react";
import { Link } from "expo-router";
import { LogOut } from "lucide-react-native";
import { StyleSheet } from "react-native";

const Exit = () => {
  return (
    <Link href="/" style={styles.icon}>
      <LogOut size={24} color="black" />
    </Link>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
});

export default Exit;
