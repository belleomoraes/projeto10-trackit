import { useContext } from "react";
import UserContext from "../../context/UserContext";
import WithHabit from "../Habit/WithHabit";
import CreateHabit from "../Habit/CreateHabit";

export default function FormHabit() {
  const { control } = useContext(UserContext);

  return control ? <WithHabit /> : <CreateHabit />;
}
