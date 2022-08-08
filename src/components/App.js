import "../reset.css";
import GlobalStyle from "./Styles/GlobalStyle";
import UserContext from "../context/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./Login/LoginScreen";
import RegistrationScreen from "./Login/RegistrationScreen";
import HabitsScreen from "./Habit/HabitsScreen";
import HistoryScreen from "./History/HistoryScreen";
import TodayScreen from "./Today/TodayScreen";
import { useState } from "react";

export default function App() {
  const [change, setChange] = useState(true);
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

  return (
    <UserContext.Provider
      value={{
        change,
        setChange,
        habit,
        setHabit,
        control,
        setControl,
        daysFixed,
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
