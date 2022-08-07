import { useContext } from "react";
import UserContext from "./UserContext";
import WithHabit from "./WithHabit";
import CreateHabit from "./CreateHabit";

export default function FormHabit() {
  const { control } = useContext(UserContext);

  return control ? <WithHabit /> : <CreateHabit />;
}
