import logo from "../assets/logo.jpg"
import Initiate from "./InitiateStyle"

export default function LoginScreen() {
return (
    <Initiate>
    <img src={logo}/>
    <form>
  <input type="email" placeholder='email'/> 
  <input type="password" placeholder='senha'/>
  <input type="text" placeholder='nome'/>
  <input type="url" placeholder='foto'/>
    </form>
    <button>Cadastrar</button>
    <div>Já tem uma conta? Faça login!</div>
    </Initiate>
)
}

