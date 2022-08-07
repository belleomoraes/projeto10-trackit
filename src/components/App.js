import "../reset.css";
import GlobalStyle from "./GlobalStyle";
import UserContext from "./UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";
import HabitsScreen from "./HabitsScreen";
import HistoryScreen from "./HistoryScreen";
import TodayScreen from "./TodayScreen";
import { useState } from "react";

export default function App() {
  const [img, setImg] = useState("")
  const [change, setChange] = useState(true);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [token, setToken] = useState("");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

  const [habit, setHabit] = useState({
    name: "",
    days: []
  });

  const [control, setControl] = useState(false);

  return (
    <UserContext.Provider
      value={{
        change,
        setChange,
        loginInfo,
        setLoginInfo,
        config,
        userInfo,
        setUserInfo,
        token,
        setToken,
        img, 
        setImg,
        habit,
        setHabit,
        control,
        setControl
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/cadastro" element={<RegistrationScreen />} />
          <Route path="/habitos" element={<HabitsScreen />} />
          <Route path="/hoje" element={<TodayScreen />} />
          <Route path="/historico" element={<HistoryScreen />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
