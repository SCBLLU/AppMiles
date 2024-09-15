import { Stack, usePathname } from "expo-router";
import { DarkModeProvider } from "../components/DarkModeProvider";
import { NotificationsProvider } from "../components/NotificationsProvider";

import Logo from "../components/Logo";
import Exit from "../components/Menu/Exit";
import Navegacion from "../components/Navegacion";
import Profile from "../components/Perfil";

export default function Layout() {
    const pathname = usePathname(); // Obtiene la ruta actual

    return (
        
        <DarkModeProvider>
            <NotificationsProvider>
                <Stack>
                    <Stack.Screen
                        name="index"
                        options={{
                            headerShown: false, // Oculta el header para la pantalla de login
                        }}
                    />

                    <Stack.Screen
                        name="dashboard"
                        options={{
                            headerTitle: "Menu",
                            headerLeft: () => <Profile />,
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

                {/* Solo mostrar la navegación si no estamos en la ruta '/' (login) */}
                {pathname !== "/" && <Navegacion />}
            </NotificationsProvider>
        </DarkModeProvider>
    );
}
