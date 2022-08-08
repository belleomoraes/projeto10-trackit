import styled from "styled-components";

export default function Head({ img }) {
  return (
    <HeadStyle>
      <div>TrackIt</div>
      <img src={img} />
    </HeadStyle>
  );
}

const HeadStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #126ba5;
  width: 100%;
  height: 12%;
  color: #ffffff;
  position: fixed;
  top: 0;
  padding: 4%;
  z-index: 1;

  div {
    width: 30%;
    font-size: 10vw;
    font-family: "Playball", cursive;
  }

  img {
    border-radius: 50%;
    width: 10vw;
    height: 8vh;
  }
`;
