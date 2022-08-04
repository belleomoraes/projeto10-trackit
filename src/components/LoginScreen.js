
import logo from "../assets/logo.jpg"
import Initiate from './InitiateStyle';

export default function LoginScreen() {
return (
    <Initiate>
    <img src={logo}/>
    <form>
  <input type="email" placeholder='email'/> 
  <input type="password" placeholder='senha'/>
    </form>
    <button>Entrar</button>
    <div>Não tem uma conta? Cadastre-se</div>
    </Initiate>
)
}

