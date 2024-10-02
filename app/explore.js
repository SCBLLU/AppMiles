import { ScrollView } from "react-native";
import Screen from "../components/Utils/Screen";
import BuscadorEjercicio from "../components/Explorar/BuscadorEjercicio";
import TodasCategorias from "../components/Explorar/TodasCategorias";
import Personal from "../components/Explorar/TodosPersonal";

export default function Explore() {
  return (
    <Screen>
      <ScrollView>
        <BuscadorEjercicio />
        <Personal />
        <TodasCategorias />
      </ScrollView>
    </Screen>
  );
}
