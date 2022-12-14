import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import logo from "../../assets/logo.jpg";
import Initiate from "../Styles/InitiateStyle"
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function LoginScreen() {
  const { setChange } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  function ChangeScreen() {
    setChange(false);
    navigate("/cadastro");
  }

  function sendInfoLogin() {
    setLoading(true);
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      loginInfo
    );

    promise.then((res) => {
      setLoading(false);
      localStorage.setItem("myValueInLocalStorage", res.data.token);
      localStorage.setItem("myImageInLocalStorage", res.data.image);
      navigate("/habitos");
    });

    promise.catch((res) => {
      if (res.response.status === 422) {
        setLoading(false);
        alert("Preencha todos os campos");
        setLoginInfo({
          email: "",
          password: "",
        });
      }

      if (res.response.status === 401) {
        setLoading(false);
        alert("E-mail ou senha incorretos");
        setLoginInfo({
          email: "",
          password: "",
        });
      }
    });
  }

  function handleLogin(e) {
    e.preventDefault();
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <Initiate loading={loading}>
      <img src={logo} />
      <form>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={loginInfo.email}
          onChange={handleLogin}
        />
        <input
          type="password"
          placeholder="senha"
          name="password"
          value={loginInfo.password}
          onChange={handleLogin}
        />
      </form>
      {loading ? (
        <button onClick={sendInfoLogin}>
          <ThreeDots color="#ffffff" height={80} width={60} />
        </button>
      ) : (
        <button onClick={sendInfoLogin}>Entrar</button>
      )}
      <div onClick={ChangeScreen}>N??o tem uma conta? Cadastre-se</div>
    </Initiate>
  );
}
