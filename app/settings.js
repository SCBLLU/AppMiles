import { ScrollView } from "react-native";
import Screen from "../components/Screen";
import Ajustes from "../components/Configuraciones/Ajustes";

export default function Settings() {
    return (
        <Screen>
            <ScrollView>
                <Ajustes />
            </ScrollView>
        </Screen>
    );
}
