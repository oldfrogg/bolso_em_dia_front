/*
router.post("/criar", UsuarioController.createUsuario)
router.get("/", UsuarioController.getUsuarios) // será apenas para admin futuramente
router.get("/usuario", verificarLogin, UsuarioController.getUsuario)
router.put("/editar", verificarLogin ,UsuarioController.editUsuario)
router.delete("/deletar", verificarLogin, UsuarioController.deleteUsuario)
*/

import api from "../api/api.js"

const criarUsuario = async (dadosUsuario) => {
    const response = await api.post("/usuarios/criar/", dadosUsuario)
    return response.data
}

const getUsuarios = async () => {
    const response = await api.get("/usuarios/")
    return response.data
}

const getUsuario = async () => { // usa o sessionId
    const response = await api.get("/usuarios/usuario/")
    return response.data
}

const editUsuario = async (dadosUsuario) => {
    const response = await api.put(`/usuarios/editar/`, dadosUsuario)
    return response.data
}

const deletaUsuario = async () => {
    const response = await api.delete(`/usuarios/deletar/`)
    return response.data
}

export { criarUsuario, getUsuarios, getUsuario, editUsuario, deletaUsuario }