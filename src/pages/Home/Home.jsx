import './Home.css'
import Nav from '../../componentes/Nav/Nav.jsx'
import TransacoesPeriodoComponente from '../../componentes/TransacoesPeriodoComponente/TransacoesPeriodoComponente.jsx'
import { getPeriodoAtual } from '../../service/periodoService.js'
import { useEffect, useState } from 'react'
import BotaoLink from '../../componentes/BotaoLink/BotaoLink.jsx'

const Home = () => {

    const [periodoIdAtual, setPeriodoIdAtual] = useState()

    useEffect(() => {
        const carregaPeriodoIdAtual = async () => {
            const periodo = await getPeriodoAtual()
            setPeriodoIdAtual(periodo.id)
        }
        carregaPeriodoIdAtual()
    }, [])

    return (
        <>
            <Nav />
            <div className='home-page'>
                <BotaoLink id={'btn-nova-transacao'} nomeBotao={'Nova Transação'} linkBotao={"/criar_editar_transacao"}></BotaoLink>
                {periodoIdAtual && (
                    <TransacoesPeriodoComponente periodoId={periodoIdAtual} />
                )}
            </div>
        </>
    )
}
export default Home