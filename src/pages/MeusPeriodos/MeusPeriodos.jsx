import './MeusPeriodos.css'
import { useEffect, useState } from 'react'
import { getMeusPeriodos } from '../../service/periodoService.js'
import Nav from '../../componentes/Nav/Nav.jsx'
import { useNavigate } from 'react-router-dom'
import Botao from '../../componentes/Botao/Botao.jsx'

const MeusPeriodos = () => {

    const navigate = useNavigate()
    const [periodos, setPeriodos] = useState([])

    useEffect(() => {
        async function carregarPeriodos() {
            try {
                const data = await getMeusPeriodos()
                console.log(data)
                setPeriodos(data)
            } catch (error) {
                alert(error.response.data.erro)
            }
        }
        carregarPeriodos()
    }, [])

    const goToTransacoesPeriodo = (periodoId) => {
        navigate("/transacoes_periodo", {
            state: { periodoId: periodoId }
        })
    }

    return (
        <>
            <Nav />
            <div className='div-meus-periodos'>
                <h2>Meus Períodos</h2>
                {periodos.map((periodo) => (
                    <div className='div-periodo' key={periodo.id}>
                        <h3>Início:</h3>
                        <p>{periodo.inicio}</p>
                        <h3>Fim:</h3>
                        <p>{periodo.fim}</p>
                        <Botao nomeBotao={'Visualizar Período'} onClick={() => goToTransacoesPeriodo(periodo.id)}>Visualizar</Botao>
                    </div>
                ))}
            </div >
        </>
    )
}
export default MeusPeriodos