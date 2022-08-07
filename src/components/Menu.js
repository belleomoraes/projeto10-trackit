import { Link } from "react-router-dom";
import styled from 'styled-components';
import Button from "./ButtonStyle";
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
      <Link to={"/habitos"}> <div>Hábitos</div></Link>
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
      <Link to={"/historico"}><div>Histórico</div></Link>
      </Button>
      </MenuStyle>
    )
  }

  const MenuStyle = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 5%;
position: fixed;
bottom: 0;
width: 100%;
z-index: 1;
background-color: #ffffff ;
`

const Bar = styled.div `
width: 15vw;

`