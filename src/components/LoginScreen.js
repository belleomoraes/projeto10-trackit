
import logo from "../assets/logo.jpg"
import Initiate from './InitiateStyle';
import { Link } from "react-router-dom";

export default function LoginScreen() {

return (
    <Initiate>
    <img src={logo}/>
    <form>
  <input type="email" placeholder='email' required/> 
  <input type="password" placeholder='senha' required/>
    </form>
    <Link to={"/habitos"}><button>Entrar</button></Link>
    <Link to={"/cadastro"}><div>Não tem uma conta? Cadastre-se</div></Link>
    </Initiate>
)
}

