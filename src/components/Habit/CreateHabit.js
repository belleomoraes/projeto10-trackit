import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import Button from "../Styles/ButtonStyle";
import HabitStyle from "../Styles/HabitStyle";
import Days from "../Styles/DaysStyle";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
function RenderDays({ daysFixed, setHabit, habit }) {
  return (
    <Days>
      {daysFixed.map((day) => (
        <Day day={day} habit={habit} daysFixed={daysFixed} setHabit={setHabit} />
      ))}
    </Days>
  );
}
function Day({ day, habit, setHabit }) {
  const [clicked, setClicked] = useState();
  const [control, setControl] = useState(0);

  function DaySelection() {
    if (control === 0) {
      setClicked(true);
      habit.days.push(day.id);
      setControl(1);
    }

    if (control === 1) {
      setClicked(false);
      habit.days = habit.days.filter((d) => d !== day.id);
      setControl(0);
    }
  }
  return (
    <DayStyle clicked={clicked} onClick={DaySelection}>
      {day.name}
    </DayStyle>
  );
}
export default function CreateHabit({ setNewHabit }) {
  const navigate = useNavigate();
  const { setControl, daysFixed } = useContext(UserContext);
  const [habit, setHabit] = useState({
    name: "",
    days: [],
  });
  const [loading, setLoading] = useState(false);

  function handleHabit(e) {
    setHabit({
      ...habit,
      [e.target.name]: e.target.value,
    });
  }

  function sendHabit() {
    setLoading(true)
    const tokenLocal = localStorage.getItem("myValueInLocalStorage");
    const config = {
      headers: {
        Authorization: `Bearer ${tokenLocal}`,
      },
    };

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      habit,
      config
    );
    promise.then((res) => {
      setLoading(false)
      setControl(true);
      setHabit(res.data);
      setNewHabit(false);
    });
  }

  function Cancel() {
    setNewHabit(false);
  }
  
  return (
    <HabitStyle loading = {loading}>
      <form>
        <input
          type="text"
          placeholder="nome do hábito"
          name="name"
          value={habit.name}
          onChange={handleHabit}
        />
      </form>
      <RenderDays daysFixed={daysFixed} habit={habit} setHabit={setHabit} />
      <Button >
      {!loading ?(<><div onClick={Cancel}>Cancelar</div>
        <button onClick={sendHabit}>Salvar</button></>) :<><div >Cancelar</div>
        <button><ThreeDots color="#ffffff" height={80} width={60} /></button></> }
      </Button>

    </HabitStyle>
  );
}

const DayStyle = styled.div`
  background-color: ${(props) => (props.clicked ? "#F4F4F4" : "#ffffff")};
`;
