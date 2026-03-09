import './Nav.css'
import { logout } from '../../service/auth'
import { useNavigate } from 'react-router-dom'
import BotaoLink from '../BotaoLink/BotaoLink.jsx'
import Botao from '../Botao/Botao.jsx'

const Nav = () => {

    const navigate = useNavigate()

    const fazerLogout = async () => {
        try {
            await logout()
            alert("Logout realizado.")
            navigate('/login/')
        } catch (error) {
            alert(error.response.data.erro)
        }
    }

    return (
        <>
            <nav className='menu-nav'>
                <BotaoLink nomeBotao={'Home'} linkBotao={'/home/'} />
                <BotaoLink nomeBotao={'Nova Transação'} linkBotao={'/criar_editar_transacao'} />
                <BotaoLink nomeBotao={'Meus Períodos'} linkBotao={'/meus_periodos'}/>
                <BotaoLink nomeBotao={'Editar meus dados'} linkBotao={'/editar_usuario'}/>
                <Botao nomeBotao={'Fazer Logout'} onClick={fazerLogout}>Logout</Botao>
            </nav>
        </>
    )
}

export default Nav