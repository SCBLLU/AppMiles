import { Stack } from "expo-router";
import { View, } from "react-native";
import Navegacion from "../components/Navegacion";

export default function Layout() {
    return (
        <View style={{ flex: 1 }}>
            <Stack screenOptions={{
                headerTitle: "",

            }} />
            <Navegacion />
        </View>
    );
}

