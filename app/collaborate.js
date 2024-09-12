import { ScrollView } from "react-native";
import Screen from "../components/Screen";
import Formulario from "../components/Colaborar/Formulario";
import Navegacion from "../components/Navegacion";

export default function Collaborate() {
    return (
        <Screen>
            <ScrollView>
                <Formulario />
            </ScrollView>
            <Navegacion />
        </Screen>
    );
}
