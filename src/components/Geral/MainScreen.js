
import RegistrationScreen from "../Login/RegistrationScreen";
import LoginScreen from "../Login/LoginScreen"
import { useContext } from "react";
import UserContext from "../../context/UserContext";
export default function MainScreen() {
  const { change } = useContext(UserContext);
  
  return (
      change ? <LoginScreen /> : <RegistrationScreen/>
  );
}
