
import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen"
import { useContext } from "react";
import UserContext from "./UserContext";
export default function MainScreen() {
  const { change } = useContext(UserContext);
  
  return (
      change ? <LoginScreen /> : <RegistrationScreen/>
  );
}
