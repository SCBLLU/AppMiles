import { ScrollView } from "react-native";
import { Stack } from "expo-router";
import Screen from "../components/Screen";

export default function Collaborate() {
    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerTitle: "Colaborar",
                }}
            />
            <ScrollView>

            </ScrollView>
        </Screen>
    );
}
