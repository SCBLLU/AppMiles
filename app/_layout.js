import { Stack } from "expo-router";
import Logo from "../components/Logo";
import Exit from "../components/Menu/Exit";

export default function Layout() {
    return (
        <Stack>

            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="dashboard"
                options={{
                    headerTitle: "Menu",
                    headerLeft: () => <Logo />,
                    headerRight: () => <Exit />,
                }}
            />

            <Stack.Screen
                name="subscriptions"
                options={{
                    headerTitle: "Planes",
                    headerLeft: () => <Logo />,
                    headerRight: () => <Exit />,
                }}
            />

            <Stack.Screen
                name="collaborate"
                options={{
                    headerTitle: "Colaborar",
                    headerLeft: () => <Logo />,
                    headerRight: () => <Exit />,
                }}
            />

            <Stack.Screen
                name="settings"
                options={{
                    headerTitle: "Ajustes",
                    headerLeft: () => <Logo />,
                    headerRight: () => <Exit />,
                }}
            />

        </Stack>
    );
}
