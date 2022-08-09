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
  margin-bottom: 20%;
  opacity: ${(props) => (props.loading ? "0.7" :  "1" )};


  input {
    border: 1px solid #d5d5d5;
    width: 80vw;
    height: 4vh;
    margin: 8px;
    font-size: 2.8vh;
    padding: 5%;
    background-color: ${(props) => (props.loading ? "#F4F4F4" :  "#ffffff" )};
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
    margin-top: 6%;
  }

  h1 {
    width: 80vw;
    height: 5vh;
    font-size: 3vh;
    color: #666666;
  }
`;

export default HabitStyle

