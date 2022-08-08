import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Initiate from "../Styles/InitiateStyle";
import logo from "../../assets/logo.jpg";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function RegistrationScreen() {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleForm(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  }

  console.log(userInfo);

  function sendForm() {
    setLoading(true);
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      userInfo
    );

    promise.then((res) => {
      setLoading(false);
      navigate("/");
    });

    promise.catch((res) => {
     
      if (res.response.status === 422) {
        setLoading(false);
        alert("Preencha todos os campos");
      }

      if (res.response.status === 409) {
        setLoading(false);
        alert("Este e-mail já está cadastrado");
      }
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
      {loading ? (
        <button onClick={sendForm}>
          <ThreeDots color="#ffffff" height={80} width={60} />
        </button>
      ) : (
        <button onClick={sendForm}>Cadastrar</button>
      )}
      <Link to={"/"}>
        <div>Já tem uma conta? Faça login!</div>
      </Link>
    </Initiate>
  );
}
