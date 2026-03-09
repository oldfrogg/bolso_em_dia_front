import './Login.css'
import Nav from '../../componentes/Nav/Nav.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../service/auth.js'
import BotaoLink from '../../componentes/BotaoLink/BotaoLink.jsx'
import Botao from '../../componentes/Botao/Botao.jsx'

const Login = () => {

    const [username, setUsername] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()

    async function fazerLogin(e) {
        e.preventDefault()
        console.log(username)
        console.log(senha)

        const dados = { username, senha }

        try {
            await login(dados)
            console.log("Login realizado!")
            navigate("/home")
        } catch (error) {
            alert("Usuário ou senha inválidos!")
        }
    }

    return (
        <>
            <Nav />
            <div className='div-login'>
                <h1>Login</h1>
                <form className='form-login'>
                    <label>Nome de Usuário
                        <input
                            placeholder='username'
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label>Senha
                        <input
                            placeholder='senha'
                            type="password"
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </label>
                    <Botao nomeBotao={"Login"} onClick={fazerLogin}></Botao>
                </form>
                <BotaoLink id={'btn-go-to-criar-usuario'} nomeBotao={'Sou novo aqui'} linkBotao={"/criar_usuario"}></BotaoLink>

            </div>
        </>
    )
}
export default Login