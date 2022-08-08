import { useContext, useState } from "react";
import UserContext from "./UserContext";
import Days from "./DaysStyle";
import HabitStyle from "./HabitStyle";
import styled from "styled-components";
import axios from "axios";

function RenderDays({ daysFixed, habit }) {
  return (
    <Days>
      {daysFixed.map((day) => (
        <Day day={day} habit={habit} />
      ))}
    </Days>
  );
}
function Day({ day, habit }) {
  return <DayStyle>{day.name}</DayStyle>;
}
export default function WithHabit({ controlHabit }) {
  const { daysFixed } = useContext(UserContext);
  console.log(controlHabit);

  // function DeleteHabit() {
  //   const tokenLocal = localStorage.getItem("myValueInLocalStorage");
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${tokenLocal}`,
  //     },
  //   };

  //   const promise = axios.delete("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO")
  // }

  return (
    <HabitStyle>
      {controlHabit.length !== 0 &&
        controlHabit.map((habit) => (
          <>
            <span>
              <h1>{habit.name}</h1>
              <ion-icon name="trash-outline"></ion-icon>
            </span>
            <RenderDays daysFixed={daysFixed} habit={habit} />
          </>
        ))}
    </HabitStyle>
  );
}

const DayStyle = styled.div`
  background-color: ${(props) => (props.clicked ? "#F4F4F4" : "#ffffff")};
`;
