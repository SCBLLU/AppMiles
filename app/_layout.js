import React from "react";
import { Stack, usePathname } from "expo-router";
import { DarkModeProvider } from "../components/Utils/DarkModeProvider";
import { NotificationsProvider } from "../components/Utils/NotificationsProvider";
import { UserProvider } from "../components/Utils/UserContext";

import Navegacion from "../components/Navegacion";
import Header from "../components/Header";

export default function Layout() {
    const pathname = usePathname();

    return (
        <UserProvider>
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
                            name="explore"
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

                    </Stack>

                    {pathname !== "/" && <Navegacion />}
                </NotificationsProvider>
            </DarkModeProvider>
        </UserProvider>

    );
}
