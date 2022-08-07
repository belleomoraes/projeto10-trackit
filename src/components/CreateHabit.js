import { useContext, useState } from "react";
import UserContext from "./UserContext";
import Button from "./ButtonStyle";
import HabitStyle from "./HabitStyle";
import Days from "./DaysStyle";
import axios from "axios";
import styled from "styled-components";

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
    setHabit(habit.days.push(day.id));
  }
  return (
    <DayStyle clicked={clicked} onClick={DaySelection}>
      {day.name}
    </DayStyle>
  );
}
export default function CreateHabit() {
  const { config, habit, setHabit, setControl } = useContext(UserContext);
  const [clicked, setClicked] = useState(false);
  let daysFixed = [
    { id: 0, name: "D" },
    { id: 1, name: "S" },
    { id: 2, name: "T" },
    { id: 3, name: "Q" },
    { id: 4, name: "Q" },
    { id: 5, name: "S" },
    { id: 6, name: "S" },
  ];

  function handleHabit(e) {
    setHabit({
      ...habit,
      [e.target.name]: e.target.value,
    });
  }

  function sendHabit() {
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      habit,
      config
    );
    promise.then((res) => {
      setControl(true);
      setHabit(res.data);
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
      <RenderDays
        clicked={clicked}
        daysFixed={daysFixed}
        habit={habit}
        setClicked={setClicked}
        setHabit={sendHabit}
      />
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
