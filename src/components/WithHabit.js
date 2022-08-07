import { useContext, useState } from "react";
import UserContext from "./UserContext";
import Days from "./DaysStyle";
import HabitStyle from "./HabitStyle";
import styled from "styled-components";



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
  const [clicked, setClicked] = useState(false);

  console.log(day, habit.name, habit.days, day.id);

  if (day.id === habit.days) {
    console.log("entrou comparaçao day");
    setClicked(true);
  }

  return <DayStyle clicked={clicked}>{day.name}</DayStyle>;
}
export default function WithHabit({ controlHabit }) {
  const { daysFixed, config } = useContext(UserContext);

  return (
    <HabitStyle>
      {controlHabit.length !== 0 &&
        controlHabit.map((habit) => (
          <>
            <span>
              <h1>{habit.name}</h1>
              <ion-icon name="trash-outline" ></ion-icon>
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
