import { ScrollView } from "react-native";
import { Stack } from "expo-router";
import Screen from "../components/Screen";
import Nosotros from "../components/Nosotros/Informacion";

export default function About() {
    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerTitle: "Nosotros",
                }}
            />
            <ScrollView>
                <Nosotros />
            </ScrollView>
        </Screen>
    );
}
