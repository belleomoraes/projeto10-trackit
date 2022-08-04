
import styled from 'styled-components';
import logo from "../assets/logo.jpg"
export default function Head () {
    return (
        <HeadStyle>
        <div>TrackIt</div>
        <img src={logo}/>
        </HeadStyle>
    )
}

const HeadStyle = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');

display: flex;
justify-content: space-between;
align-items: center;
background-color: #126BA5;
width: 100%;
height: 16vh;
color: #FFFFFF;
font-family: 'Playball', cursive;
font-size: 7vh;

div {
    margin-left: 5%;
}
img {
    border-radius: 50%;
    width: 10vw;
    margin-right: 5%;
}
`