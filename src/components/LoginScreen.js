import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";
import logo from "../assets/logo.jpg";
import Initiate from "./InitiateStyle";
import axios from "axios";

export default function LoginScreen() {
  const { setChange, loginInfo, setLoginInfo, setToken, setImg } = useContext(UserContext);
  
  const navigate = useNavigate();

  function ChangeScreen() {
    setChange(false);
    navigate("/cadastro");
  }

  function sendInfoLogin() {
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      loginInfo
    );

    promise.then((res) => {
      setToken(res.data.token)
      setImg(res.data.image)
      navigate("/habitos");
    });

    promise.catch((res) => {
      if (res.response.status === 422) {
        alert("Preencha todos os campos");
        setLoginInfo({
          email: "",
          password: "",
        });
      }

      if (res.response.status === 401) {
        alert("E-mail ou senha incorretos");
        setLoginInfo({
          email: "",
          password: "",
        });
      }
    });
  }

  function handleLogin(e) {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  }
  

  return (
    <Initiate>
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
      <button onClick={sendInfoLogin}>Entrar</button>
      <div onClick={ChangeScreen}>Não tem uma conta? Cadastre-se</div>
    </Initiate>
  );
}
