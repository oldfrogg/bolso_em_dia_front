import './TransacoesPeriodoComponente.css'
import { useNavigate } from 'react-router-dom'
import { deleteTransacao, getTransacoesPorPeriodo } from '../../service/transacaoService.js'
import { getCategorias } from '../../service/categoriaService.js'
import { getPeriodoAtual, getPeriodoById } from '../../service/periodoService.js'
import { useState, useEffect } from 'react'
import Botao from '../Botao/Botao.jsx'


const TransacoesPeriodoComponente = ({ periodoId }) => {
    const navigate = useNavigate()
    console.log(periodoId)

    const [periodoSelecionado, setPeriodoSelecionado] = useState([])
    const [periodoAtual, setPeriodoAtual] = useState([])
    const [transacoes, setTransacoes] = useState([])
    const [categorias, setCategorias] = useState([]) // estado para atribuir todas as categorias do BD
    // faço isso pq a tabela TRANSACOES não retorna a categoria_nome, apenas o id.
    // carrego todas aqui para evitar várias requisições para buscar a categoria dentro da requisição que pede as transações
    // carrego todas para fazer a lógica de atribuição do nome da categoria com base no seu id aqui no front mesmo

    // carrego todas as transacoes ao abrir a pag
    useEffect(() => {
        async function carregarTransacoes() {
            try {
                const data = await getTransacoesPorPeriodo(periodoId)
                setTransacoes(data)
            } catch (error) {
                alert(error.response.data.erro)
            }
        }
        carregarTransacoes()
    }, [])

    useEffect(() => {
        async function carregaPeriodoAtual() {
            try {
                const periodo = await getPeriodoAtual()
                setPeriodoAtual(periodo)
            } catch (error) {
                alert(error.response.data.erro)
            }
        }
        carregaPeriodoAtual()
    }, [])

    useEffect(() => {
        async function carregaPeriodoSelecionado() {
            try {
                const periodo = await getPeriodoById(periodoId)
                setPeriodoSelecionado(periodo)
            } catch (error) {
                alert(error.response.data.erro)
            }
        }
        carregaPeriodoSelecionado()
    }, [])

    // carrego todas as categorias ao abrir a pag
    useEffect(() => {
        async function carregaCategorias() {
            try {
                const data = await getCategorias()
                setCategorias(data)
            } catch (error) {
                alert(error.response.data.erro)
            }
        }
        carregaCategorias()
    }, [])

    // funcao sera chamada na hora de listar o nome da categoria em cada transação
    // sinto que estou a chamando demais e poderia evitar isso, futuramente devo incluir categoria_nome na tabela TRANSACOES mesmo 
    const getNomeCategoria = (id) => {
        const categoria = categorias.find(categoria => categoria.id === id)
        return categoria ? categoria.categoria : "Categoria não encontrada"
    }

    const saldoPeriodo = () => {
        let entradas = 0
        let saidas = 0
        let total = 0
        transacoes.map((transacao) => {
            if (transacao.is_entrada) {
                entradas += Number(transacao.valor)
            }
            else {
                saidas += Number(transacao.valor)
            }
        })
        total = entradas - saidas
        return total
    }
    const saldo = saldoPeriodo()

    const deletarTransacao = async (id) => {
        if (!confirm("Certeza que deseja deletar a transação?")) {
            return
        }
        try {
            await deleteTransacao(id)
            alert("Transação excluída!")
            setTransacoes(prev => 
                prev.filter(transacao => transacao.id !== id)
            )
        } catch (error) {
            alert(error.response.data.erro)
        }
    }

    return (
        <>
            <div className='transacoes-periodo'>
                <h1>Saldo do período:</h1>
                <h3 className={saldo >= 0 ? "positivo" : "negativo"}>R${saldo}</h3>
                <h2>Período:</h2>
                <h4>Início</h4>
                <p>{periodoSelecionado.inicio}</p>
                <h4>Final</h4>
                <p>{periodoSelecionado.fim}</p>
                <h1>Transacoes do Periodo:</h1>
                {transacoes.map((transacao) => {
                    return (
                        <div className='transacao' key={transacao.id}>
                            <h4>Valor</h4>
                            <p className={transacao.is_entrada ? "positivo" : "negativo"}>{transacao.is_entrada ? "+" : "-"}R${transacao.valor}</p>
                            <h4>Categoria</h4>
                            <p>{getNomeCategoria(transacao.categoria_id)}</p>
                            <h4>Descrição</h4>
                            <p>{transacao.descricao}</p>
                            <h4>Data</h4>
                            <p>{transacao.data_transacao}</p>
                            {Number(periodoId) === periodoAtual.id ? (
                                <Botao nomeBotao={'Editar Transação'} onClick={() => navigate(`/criar_editar_transacao/${transacao.id}`)}>Editar Transação</Botao>
                            ) : null
                            }
                            {Number(periodoId) === periodoAtual.id ? (
                                <Botao id='btn-deletar' nomeBotao={'Deletar Transação'} onClick={() => { deletarTransacao(transacao.id) }}>Deletar Transação</Botao>
                            ) : null
                            }
                            <br></br>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TransacoesPeriodoComponente