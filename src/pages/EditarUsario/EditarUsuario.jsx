import './EditarUsuario.css'
import { useEffect, useState } from 'react'
import { getUsuario, editUsuario, deletaUsuario } from '../../service/usuarioService'
import { useNavigate } from 'react-router-dom'
import Nav from '../../componentes/Nav/Nav'
import Botao from '../../componentes/Botao/Botao'

const EditarUsuario = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const carregarUsuario = async (id) => {
            try {
                const data = await getUsuario(id)
                setForm(data)
            } catch (error) {
                alert(error.response.data.erro)
            }
        }
        carregarUsuario()
    }, [])

    const [form, setForm] = useState({
        username: "",
        senha: "",
        email: "",
        dia_base: 1
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const submitEditarUsuario = async (e) => {
        e.preventDefault()

        // fazer essa lógica aqui só pro caso de o usuário apagar o dia base para mandar em branco
        const dados = {
            username: form.username,
            email: form.email,
            senha: form.senha
        }
        if (form.dia_base) {
            dados.dia_base = Number(form.dia_base)
        }

        try {
            await editUsuario(dados)
            navigate('/home')
        } catch (error) {
            alert(error.response.data.erro)
        }
        return
    }

    const deletarUsuario = async () => {
        if (!confirm("Certeza que deseja deletar o seu cadastro?")) {
            return
        }
        try {
            await deletaUsuario()
            alert("Usuário deletado com sucesso.")
            navigate('/login')
        } catch (error) {
            alert(error.response.data.erro)
        }
    }

    return (
        <>
            <Nav />
            <div className='div-editar-usuario'>
                <h1>Editar Cadastro</h1>
                <form className='div-form-criar-usuario'>
                    <label>
                        Username
                        <input
                            type='text'
                            name='username'
                            value={form.username}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Senha
                        <input
                            type='password'
                            name='senha'
                            value={form.senha}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        E-mail
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Seu Dia Base
                        <input
                            type='number'
                            name='dia_base'
                            id='input-dia-base'
                            min="1"
                            max="28"
                            value={form.dia_base}
                            onChange={handleChange}
                        />
                    </label>
                    <Botao onClick={submitEditarUsuario} nomeBotao={"Editar Usuário"}></Botao>
                </form>
                <Botao id={'btn-deletar'} nomeBotao={'Deletar meu perfil'} onClick={deletarUsuario}></Botao>
            </div>
        </>
    )
}
export default EditarUsuario