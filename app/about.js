import { ScrollView } from "react-native";
import { Stack } from "expo-router";
import Screen from "../components/Screen";
import Nosotros from "../components/Nosotros/Informacion";
import Logo from "../components/Logo";

export default function About() {
    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerTitle: "Nosotros",
                    headerLeft: () => <Logo />,
                }}
            />
            <ScrollView>
                <Nosotros />
            </ScrollView>
        </Screen>
    );
}
