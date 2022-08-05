import styled from "styled-components";
import { useContext, useState } from "react";
import UserContext from "./UserContext";
import Habits from "./HabitsScreen";

export default function FormHabit() {
  const [habit, setHabit] = useState({
    name: "",
    days: [],
  });
  const { config } = useContext(UserContext);

  function handleHabit(e) {
    setHabit({
      ...habit,
      [e.target.name]: e.target.value,
    });
  }

  console.log(habit)
  return (
    <CreatingHabit>
      <form>
        <input type="text" placeholder="nome do hábito" name="name" value={habit.name} onChange={handleHabit} />
      </form>
      <Days>
        <div>D</div>
        <div>S</div>
        <div>T</div>
        <div>Q</div>
        <div>Q</div>
        <div>S</div>
        <div>S</div>
      </Days>
      <Button>
        <button>Cancelar</button>
        <button>Salvar</button>
      </Button>
    </CreatingHabit>
  );
}

const CreatingHabit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  margin-left: 5%;
  border-radius: 5px;
  width: 89%;
  margin: 0 auto;
  margin-bottom: 5%;

  input {
    border: 1px solid #d5d5d5;
    width: 80vw;
    height: 4vh;
    margin: 8px;
    font-size: 100%;
    padding: 5%;
  }

  input::placeholder {
    color: #d5d5d5;
  }
`;

const Days = styled.div`
  display: flex;
  margin-left: 1%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    color: #d5d5d5;
    width: 5vw;
    height: 5vw;
    margin: 1%;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5%;

  button {
    color: #f4f4f4;
    border: none;
    border-radius: 3px;
    background-color: #52b6ff;
    width: 14vw;
    height: 5vh;
    font-size: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin: 1%;
  }
`;
