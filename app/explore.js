import { ScrollView } from "react-native";
import Screen from "../components/Utils/Screen";
import BuscadorEjercicio from "../components/Explorar/BuscadorEjercicio";
import TodasCategorias from "../components/Explorar/TodasCategorias";
import PersonalList from "../components/Explorar/Personal/TodosPersonal";

export default function Explore() {
  return (
    <Screen>
      <ScrollView>
        <BuscadorEjercicio />
        <PersonalList />
        <TodasCategorias />
      </ScrollView>
    </Screen>
  );
}
