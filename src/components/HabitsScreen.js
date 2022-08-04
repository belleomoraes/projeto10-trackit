import styled from "styled-components";
import Head from "./Head";
import SubHead from "./SubHeadStyle";
import Initiate from "./InitiateStyle";

function NoHabit() {
  return (
    <Info>
      Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
    </Info>
  );
}

function FormHabit() {
  return (
    <CreatingHabit>
      <form>
        <input type="text" placeholder="nome do hábito" />
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
export default function Habits() {
  return (
    <>
      <Head />
      <SubHead>
        <div>Meus Hábitos</div>
        <button>+</button>
      </SubHead>
      <FormHabit />
      <NoHabit />
    </>
  );
}

const Info = styled.div`
  color: #666666;
  width: 80%;
  margin: 0 auto;
  font-size: 3.2vh;
  line-height: 4.6vh;
`;

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
justify-content:flex-end;
align-items: center;
padding: 5%;

button {
    color: #f4f4f4;
    border: none;
    border-radius: 3px;
    background-color: #52B6FF;
    width: 14vw;
    height: 5vh;
    font-size: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-weight: bold;
    margin: 1%;
}
`
