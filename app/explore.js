import { ScrollView } from "react-native";
import Screen from "../components/Utils/Screen";
import BuscadorEjercicio from "../components/Explorar/BuscadorEjercicio";
import TodasCategorias from "../components/Explorar/TodasCategorias";
import PersonalScreen from "../components/Explorar/Personal/TodosPersonal";

export default function Explore() {
  return (
    <Screen>
      <ScrollView>
        <BuscadorEjercicio />
        <PersonalScreen />
        <TodasCategorias />
      </ScrollView>
    </Screen>
  );
}
