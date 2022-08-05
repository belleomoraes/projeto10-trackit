
import "../reset.css";
import GlobalStyle from "./GlobalStyle";
import UserContext from "./UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./MainScreen";
import RegistrationScreen from "./RegistrationScreen"
import HabitsScreen from "./HabitsScreen"
import HistoryScreen from "./HistoryScreen"
import TodayScreen from "./TodayScreen"
import { useState } from "react";

export default function App() {
    const [change, setChange] = useState(true);
  
    return (
<UserContext.Provider value = {{change, setChange}}>
<GlobalStyle />
<BrowserRouter>
<Routes>
<Route path="/" element={<MainScreen />} />
<Route path="/cadastro" element={<RegistrationScreen />} />
<Route path="/habitos" element={<HabitsScreen />} />
<Route path="/hoje" element={<TodayScreen />} />
<Route path="/historico" element={<HistoryScreen />} />
</Routes>
</BrowserRouter>
</UserContext.Provider>
    )
}