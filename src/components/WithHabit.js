import styled from "styled-components";
export default function WithHabit({controlHabit}) {
console.log(controlHabit)
  return (
      <CreatingHabit>
    <span>
      <h1>{controlHabit.name}</h1>
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
  </CreatingHabit>
  )
}

    

const CreatingHabit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  margin-left: 5%;
  border-radius: 5px;
  width: 89%;
  padding: 2%;
  margin-bottom: 5%;

  ion-icon {
    font-size: 4vh;
    color: #666666;
  }
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    width: 80vw;
    height: 5vh;
    font-size: 3vh;
    color: #666666;
  }
`;

const Days = styled.div`
  display: flex;
  font-size: 4vh;
 

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    color: #d5d5d5;
    width: 8vw;
    height: 6vh;
    margin-right: 1%;
  }
`;
