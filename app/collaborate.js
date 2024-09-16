import { ScrollView } from "react-native";
import Screen from "../components/Utils/Screen";
import Bienvenida from "../components/Colaborar/Bienvenida";

export default function Collaborate() {
    return (
        <Screen>
            <ScrollView>
                <Bienvenida />
            </ScrollView>
        </Screen>
    );
}
