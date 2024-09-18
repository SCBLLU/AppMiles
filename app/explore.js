import { ScrollView } from "react-native";
import Screen from "../components/Utils/Screen";
import BuscadorEjercicio from "../components/Explorar/BuscadorEjercicio";

export default function Explore() {
  return (
    <Screen>
      <ScrollView>
        <BuscadorEjercicio />
      </ScrollView>
    </Screen>
  );
}