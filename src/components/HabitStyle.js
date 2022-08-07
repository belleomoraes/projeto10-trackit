import styled from 'styled-components';
const HabitStyle = styled.div`
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
    font-size: 2.8vh;
    padding: 5%;
  }

  input::placeholder {
    color: #d5d5d5;
  }
  ion-icon {
    font-size: 3.4vh;
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

export default HabitStyle

