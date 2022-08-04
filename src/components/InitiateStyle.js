import styled from 'styled-components';

const Initiate = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center ;
margin: 0 auto;

img {
    margin: 5%;
}
form {
display: flex;
flex-direction: column;
}

input {
    border: 1px solid #D5D5D5;
    width: 50vw;
    height: 5vh;
    margin: 3px ;
    font-size: 100%;
    padding: 5%;
}

input::placeholder {
    color: #D5D5D5;
}

button {
    color: #f4f4f4;
    border: none;
    border-radius: 3px;
    background-color: #52B6FF;
    width: 50vw;
    height: 5vh;
    font-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3%;
    font-weight: bold;
}

div {
margin-top: 2%;
color: #52B6FF;
text-decoration: underline;
font-size: 75%;
}

`

export default Initiate