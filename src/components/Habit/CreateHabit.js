import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import Button from "../Styles/ButtonStyle";
import HabitStyle from "../Styles/HabitStyle";
import Days from "../Styles/DaysStyle";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

  function DaySelection() {
    setClicked(true);
    habit.days.push(day.id)
   
  }
  return (
    <DayStyle clicked={clicked} onClick={DaySelection}>
      {day.name}
    </DayStyle>
  );
}
export default function CreateHabit({ setNewHabit, newHabit }) {
  const navigate = useNavigate();
  const { setControl, daysFixed } = useContext(UserContext);
  const [habit, setHabit] = useState({
    name: "",
    days: [],
  });

  function handleHabit(e) {
    setHabit({
      ...habit,
      [e.target.name]: e.target.value,
    });
  }

  function sendHabit() {
    
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
      setControl(true);
      setHabit(res.data);
      setNewHabit(false);
      
    });
  }

  return (
    <HabitStyle>
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
      <Button>
        <div>Cancelar</div>
        <button onClick={sendHabit}>Salvar</button>
      </Button>
    </HabitStyle>
  );
}

const DayStyle = styled.div`
  background-color: ${(props) => (props.clicked ? "#F4F4F4" : "#ffffff")};
`;
