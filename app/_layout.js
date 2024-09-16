import React from "react";
import { Stack, usePathname } from "expo-router";
import { DarkModeProvider } from "../components/DarkModeProvider";
import { NotificationsProvider } from "../components/NotificationsProvider";

import Navegacion from "../components/Navegacion";
import Header from "../components/Header";

export default function Layout() {
    const pathname = usePathname();

    return (
        <DarkModeProvider>
            <NotificationsProvider>
                {pathname !== "/" && <Header />}

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
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="subscriptions"
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="collaborate"
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="settings"
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack>

                {pathname !== "/" && <Navegacion />}
            </NotificationsProvider>
        </DarkModeProvider>
    );
}
