import { ScrollView } from "react-native";
import Screen from "../components/Utils/Screen";
import Login from "../components/Login/Ingreso";
import Icono_Login from "../components/Login/Icono";

export default function Main() {

    return (
        <Screen>
            <ScrollView contentContainerStyle>
                <Icono_Login />
                <Login />
            </ScrollView>
        </Screen>
    );
}
