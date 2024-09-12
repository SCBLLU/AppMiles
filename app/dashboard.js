import { ScrollView } from "react-native";
import Screen from "../components/Screen";
import Menu from "../components/Menu/Cursos";
import Navegacion from "../components/Navegacion";

export default function Dashboard() {
    return (
        <Screen>
            <ScrollView contentContainerStyle>
                <Menu />
            </ScrollView>
            <Navegacion />
        </Screen>
    );
}
