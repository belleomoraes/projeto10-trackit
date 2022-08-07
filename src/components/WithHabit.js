import styled from "styled-components";
import Days from "./DaysStyle";
import HabitStyle from "./HabitStyle";
export default function WithHabit({controlHabit}) {
  return (
      <HabitStyle>
    <span>
      <h1>laalala</h1>
      <ion-icon name="trash-outline"></ion-icon>
    </span>

    <Days>
      <div>D</div>
      <div>S</div>
      <div>T</div>
      <div>Q</div>
      <div>Q</div>
      <div>S</div>
      <div>S</div>
    </Days>
    </HabitStyle>

  
  
  )
}

    

