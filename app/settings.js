import { ScrollView } from "react-native";
import Screen from "../components/Screen";
import Ajustes from "../components/Configuraciones/Ajustes";
import Navegacion from "../components/Navegacion";

export default function Settings() {
    return (
        <Screen>
            <ScrollView>
                <Ajustes />
            </ScrollView>
            <Navegacion />
        </Screen>
    );
}
