import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Initiate from "./InitiateStyle";
import logo from "../assets/logo.jpg";
import { useContext} from "react";
import UserContext from "./UserContext";



export default function RegistrationScreen() {
  const { userInfo, setUserInfo} = useContext(UserContext);
  const navigate = useNavigate()

  function handleForm(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  }

  console.log(userInfo);

  function sendForm() {
    
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      userInfo
    );

    promise.then((res) => {
      navigate("/");
    });

    promise.catch((res) => {
      if (res.response.status === 422) {
        alert("Preencha todos os campos")
      }

      if (res.response.status === 409) {
        alert("Este e-mail já está cadastrado")
      }
    })
  }
  
  return (
    <Initiate>
      <img src={logo} />
      <form>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={userInfo.email}
          onChange={handleForm}
        />
        <input
          type="password"
          placeholder="senha"
          name="password"
          value={userInfo.password}
          onChange={handleForm}
        />
        <input
          type="text"
          placeholder="nome"
          name="name"
          value={userInfo.name}
          onChange={handleForm}
        />
        <input
          type="url"
          placeholder="foto"
          name="image"
          value={userInfo.image}
          onChange={handleForm}
        />
      </form>
        <button onClick={sendForm}>Cadastrar</button>
      <Link to={"/"}>
        <div>Já tem uma conta? Faça login!</div>
      </Link>
      </Initiate>
  );
}
