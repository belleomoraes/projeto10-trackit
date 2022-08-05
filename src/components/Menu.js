import { Link } from "react-router-dom";
import styled from 'styled-components';
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
export default function Menu() {
    const percentage = 100;
    return (
      <MenuStyle>
      <Button>
      <Link to={"/habitos"}> <button>Hábitos</button></Link>
      </Button>
      <Bar>
      <Link to={"/hoje"}> <CircularProgressbar value={percentage} text={`${"Hoje"}`}
      background
      backgroundPadding={6}
      styles={buildStyles({
        backgroundColor: "#52B6FF",
        textColor: "#fff",
        pathColor: "#fff",
        trailColor: "transparent"
      })} /></Link>
      </Bar>
      <Button>
      <Link to={"/historico"}><button>Histórico</button></Link>
      </Button>
      </MenuStyle>
    )
  }

  const MenuStyle = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 5%;
position: absolute;
bottom: 0;
width: 100%;
`

const Bar = styled.div `
width: 15vw;

`

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