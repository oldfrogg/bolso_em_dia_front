import './Botao.css'

const Botao = ({ nomeBotao, ...props }) => {
    return (
        <button className='btn-primario' {...props}>{nomeBotao}</button>
    )
}

export default Botao