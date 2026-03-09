import { Link } from 'react-router-dom'
import './BotaoLink.css'

const BotaoLink = ({nomeBotao, linkBotao, ...props}) => {
    return(
        <Link to={linkBotao} className='btn-primario' {...props}>{nomeBotao}</Link>
    )
}

export default BotaoLink