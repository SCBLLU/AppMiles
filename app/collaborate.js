import { ScrollView } from "react-native";
import Screen from "../components/Screen";
import Formulario from "../components/Colaborar/Formulario";

export default function Collaborate() {
    return (
        <Screen>
            <ScrollView>
                <Formulario />
            </ScrollView>
        </Screen>
    );
}
