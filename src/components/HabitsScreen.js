import Head from "./Head";
import SubHead from "./SubHeadStyle";
import FormHabit from "./FormHabit";
import Menu from "./Menu";
import NoHabit from "./NoHabit";
import WithHabit from "./WithHabit";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserContext from "./UserContext";
export default function Habits() {
  const [controlHabit, setControlHabit] = useState({});
  const [newHabit, setNewHabit] = useState(false);
  const { config, habit } = useContext(UserContext);
  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config
    );
    promise.then((res) => {
      setControlHabit(res.data);
    });
  }, []);

  console.log(habit)
  console.log(config)
  return (
    <>
      <Head />
      <SubHead>
        <div>Meus Hábitos</div>
        <button onClick={() => setNewHabit(true)}>+</button>
      </SubHead>
      {!newHabit ? "" : <FormHabit />}
      {controlHabit.length === 0 ?  <NoHabit /> : <WithHabit controlHabit = {controlHabit}/>}
      <Menu />
    </>
  );
}
