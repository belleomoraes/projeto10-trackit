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
