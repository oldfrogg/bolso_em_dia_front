import './CriarEditarTransacao.css'
import Nav from '../../componentes/Nav/Nav.jsx'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { criarTransacao, editTransacao, getTransacaoById } from '../../service/transacaoService'
import { getCategorias } from '../../service/categoriaService.js'
import { getPeriodoAtual } from '../../service/periodoService.js'
import { useNavigate } from 'react-router-dom'
import Botao from '../../componentes/Botao/Botao.jsx'

const CriarEditarTransacao = () => {

    const navigate = useNavigate()

    const { id } = useParams()

    const [categorias, setCategorias] = useState([]) // esse é para o carregamento das categorias, que vêm do back
    const [periodoAtual, setPeriodoAtual] = useState(null)

    const formLimpo = {
        categoriaId: "",
        valor: "",
        descricao: "",
        dataTransacao: "",
        isEntrada: null
    }

    useEffect(() => {
        const carregarCategorias = async () => {
            try {
                const data = await getCategorias()
                setCategorias(data)
            } catch (error) {
                alert(error.response.data.erro)
            }
        }

        const carregaPeriodoAtual = async () => {
            try {
                const periodo = await getPeriodoAtual()
                setPeriodoAtual(periodo)
            } catch (error) {
                alert(error.response.data.erro)
            }
        }

        const carregarTransacao = async () => {
            if (!id) { // limpo os campos caso não tenha parâmetro
                setForm(formLimpo)
                return
            }

            try {
                const data = await getTransacaoById(id)
                console.log(data)
                setForm({
                    categoriaId: data.categoria_id,
                    valor: data.valor,
                    descricao: data.descricao,
                    dataTransacao: data.data_transacao,
                    isEntrada: data.is_entrada
                })
            } catch (error) {
                alert(error.response.data.erro)
            }
        }
        carregarCategorias()
        carregaPeriodoAtual()
        carregarTransacao()
    }, [id])


    /*
    const [categoriaId, setCategoriaId] = useState("")
    const [valor, setValor] = useState("")
    const [descricao, setDescricao] = useState("")
    const [dataTransacao, setDataTransacao] = useState("")
    const [isEntrada, setIsEntrada] = useState(null)
    */

    // Farei dessa forma para deixar mais escalável, reduzindo a declaração de useStates.
    // Mas por isso terei uma handleChange genérica logo abaixo. 
    const [form, setForm] = useState(formLimpo)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }


    /*
    ======= FUNÇÃO PRINCIPAL. SUBMETER TRANSAÇÃO =======
    */
    const submitTransacao = async (e) => {
        e.preventDefault()

        // atriburei à constantes data completa para poder fazer as regras de negócio
        const data = new Date(form.dataTransacao)
        const inicio = new Date(periodoAtual.inicio)
        const fim = new Date(periodoAtual.fim)

        if (!(data >= inicio && data <= fim)) {
            alert("Data da transação deve pertencer ao período atual")
            return
        }

        if (!id) {
            try {
                await criarTransacao({
                    ...form,
                    valor: Number(form.valor),
                    categoria_id: Number(form.categoriaId),
                    periodo_id: periodoAtual.id,
                    data_transacao: form.dataTransacao,
                    is_entrada: form.isEntrada,
                })
            } catch (error) {
                alert(error.response.data.erro)
            }
        }

        else {
            try {
                await editTransacao(id, {
                    ...form,
                    valor: Number(form.valor),
                    categoria_id: Number(form.categoriaId),
                    periodo_id: periodoAtual.id,
                    data_transacao: form.dataTransacao,
                    is_entrada: form.isEntrada,
                })
            } catch (error) {
                alert(error.response.data.erro)
            }
        }
        navigate('/home')
    }

    return (
        <>
            <Nav />
            <div className='div-criar-editar-transacao'>
                <h1>Transação</h1>
                <form>
                    <label htmlFor="cat"><h3>Categoria:</h3></label>
                    <select
                        id="cat"
                        name="categoriaId"
                        required
                        value={form.categoriaId}
                        // onChange={(e) => setCategoriaId(e.target.value)}
                        onChange={handleChange}
                    >
                        <option value="">Selecione</option>
                        {categorias.map((categoria) => {
                            return (
                                <option key={categoria.id} value={categoria.id}>{categoria.categoria}</option>
                            )
                        })}
                    </select>

                    <h3>
                        Entrada
                        <input
                            type="radio"
                            name="isEntrada"
                            required
                            checked={form.isEntrada === true}
                            onChange={() => setForm({ ...form, isEntrada: true })}>
                        </input>
                    </h3>
                    <h3>
                        Saída
                        <input
                            type="radio"
                            name="isEntrada"
                            required
                            checked={form.isEntrada === false}
                            onChange={() => setForm({ ...form, isEntrada: false })}>
                        </input>
                    </h3>
                    <h3>
                        Valor: 
                        <input
                            type='number'
                            name="valor"
                            required
                            step={0.01}
                            min={0.01}
                            value={form.valor}
                            onChange={handleChange}>
                        </input>
                    </h3>
                    <h3>
                        Descrição:
                        <input
                            type='text'
                            name="descricao"
                            value={form.descricao}
                            onChange={handleChange}
                        >
                        </input>
                    </h3>
                    <h3>
                        Data:
                        <input
                            type='date'
                            name="dataTransacao"
                            required
                            value={form.dataTransacao}
                            onChange={handleChange}>
                        </input>
                    </h3>
                    <Botao
                        onClick={submitTransacao}
                        nomeBotao={"Confirmar Transação"}>
                    </Botao>
                </form>
            </div>
        </>
    )
}
export default CriarEditarTransacao