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
  const [img, setImg] = useState("");
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
    days: [],
  });

  const [control, setControl] = useState(false);
  let daysFixed = [
    { id: 0, name: "D" },
    { id: 1, name: "S" },
    { id: 2, name: "T" },
    { id: 3, name: "Q" },
    { id: 4, name: "Q" },
    { id: 5, name: "S" },
    { id: 6, name: "S" },
  ];

  const [clicked, setClicked] = useState(false);

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
        setControl,
        daysFixed,
        clicked,
        setClicked,
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
