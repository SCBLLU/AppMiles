import { ScrollView } from "react-native";
import { Stack } from "expo-router";
import Screen from "../components/Screen";
import Formulario from "../components/Colaborar/Formulario";

export default function Collaborate() {
    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerTitle: "Colaborar",
                }}
            />
            <ScrollView>
                <Formulario />
            </ScrollView>
        </Screen>
    );
}
