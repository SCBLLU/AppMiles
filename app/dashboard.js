import { ScrollView } from "react-native";
import Screen from "../components/Screen";
import Menu from "../components/Menu/Cursos";
import { Stack } from "expo-router";

export default function Dashboard() {
    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerTitle: "Menu",
                }}
            />
            <ScrollView contentContainerStyle>
                <Menu />
            </ScrollView>
        </Screen>
    );
}
