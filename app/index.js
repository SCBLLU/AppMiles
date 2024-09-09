import { ScrollView } from "react-native";
import Screen from "../components/Screen";
import Login from "../components/Login/Ingreso";

export default function Main() {


    return (
        <Screen>
            <ScrollView contentContainerStyle>
                <Login />
            </ScrollView>
        </Screen>
    );
}
