import { ScrollView } from "react-native";
import Screen from "../components/Screen";
import Menu from "../components/Menu/Cursos";
import { Stack } from "expo-router";
import Logo from "../components/Logo";
import Exit from "../components/Menu/Exit";

export default function Dashboard() {
    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerTitle: "Menu",
                    headerLeft: () => <Logo />,
                    headerRight: () => <Exit />,
                }}
            />
            <ScrollView contentContainerStyle>
                <Menu />
            </ScrollView>
        </Screen>
    );
}
