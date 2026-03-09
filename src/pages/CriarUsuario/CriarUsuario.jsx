import './CriarUsuario.css'
import { useState } from 'react'
import { criarUsuario } from '../../service/usuarioService'
import { useNavigate } from 'react-router-dom'
import Nav from '../../componentes/Nav/Nav'
import Botao from '../../componentes/Botao/Botao'

const CriarUsuario = () => {
    const navigate = useNavigate()
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

    const submitCriarUsuario = async (e) => {
        e.preventDefault()
        console.log(form)

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
            await criarUsuario(dados)
            navigate('/')
        } catch (error) {
            alert(error.response.data.erro)
        }
        return
    }

    return (
        <>
            <Nav />
            <div className='div-criar-usuario'>
                <h1>Criar Novo Usuário</h1>
                <form className='div-form-criar-usuario'>
                    <label>
                        Username
                        <input
                            type='text'
                            name='username'
                            required
                            value={form.username}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Senha
                        <input
                            type='password'
                            name='senha'
                            required
                            value={form.senha}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        E-mail
                        <input
                            type='email'
                            name='email'
                            required
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
                    <Botao id={'btn-criar-usuario'} nomeBotao={"Criar Usuário"} onClick={submitCriarUsuario}></Botao>
                </form>
            </div>
        </>
    )
}

export default CriarUsuario