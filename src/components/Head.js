import styled from "styled-components";
import { useContext } from "react";
import UserContext from "./UserContext";


export default function Head() {
  const { img } = useContext(UserContext);
  console.log(img)
  return (
    <HeadStyle>
      <div>TrackIt</div>
      <img src={img} />
    </HeadStyle>
  );
}

const HeadStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Playball&display=swap");

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #126ba5;
  width: 100%;
  height: 16vh;
  color: #ffffff;
  font-family: "Playball", cursive;
  font-size: 7vh;
  position: absolute;
  top: 0;

  div {
    margin-left: 5%;
  }
  img {
    border-radius: 50%;
    width: 10vw;
    margin-right: 5%;
  }
`;
