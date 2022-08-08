import Head from "./Head";
import SubHead from "./SubHeadStyle";
import FormHabit from "./FormHabit";
import Menu from "./Menu";
import NoHabit from "./NoHabit";
import WithHabit from "./WithHabit";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Habits() {
  const [controlHabit, setControlHabit] = useState([]);
  const [newHabit, setNewHabit] = useState(false);
  const img = localStorage.getItem("myImageInLocalStorage");
  useEffect(() => {
    const tokenLocal = localStorage.getItem("myValueInLocalStorage");
    const config = {
      headers: {
        Authorization: `Bearer ${tokenLocal}`,
      },
    };
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );
    promise.then((res) => {
      setControlHabit(res.data);
    });
  }, []);

  return (
    <>
      <Head img={img} />
      <SubHead>
        <div>Meus Hábitos</div>
        <button onClick={() => setNewHabit(true)}>+</button>
      </SubHead>
      {!newHabit ? "" : <FormHabit />}
      {controlHabit.length === 0 ? <NoHabit /> : <WithHabit controlHabit={controlHabit} />}
      <Menu />
    </>
  );
}
