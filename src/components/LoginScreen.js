import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";
import logo from "../assets/logo.jpg";
import Initiate from "./InitiateStyle";

export default function LoginScreen() {
    const { setChange } = useContext(UserContext);
    const navigate = useNavigate()
    
    function ChangeScreen () {
        setChange(false)
        navigate("/cadastro");
    }
    return (
        <Initiate>
        <img src={logo} />
        <form>
          <input type="email" placeholder="email" required />
          <input type="password" placeholder="senha" required />
        </form>
        <Link to={"/habitos"}>
          <button>Entrar</button>
        </Link>
          <div onClick={ChangeScreen}>Não tem uma conta? Cadastre-se</div>
      </Initiate>
    );
  }