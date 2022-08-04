
import "../reset.css";
import GlobalStyle from "./GlobalStyle";
import UserContext from "./UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen"
import HabitsScreen from "./HabitsScreen"
import HistoryScreen from "./HistoryScreen"
import TodayScreen from "./TodayScreen"

export default function App() {
    return (
<UserContext.Provider>
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
    )
}