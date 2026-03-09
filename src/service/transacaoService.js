/*
router.post("/criar", verificarLogin, TransacaoController.createTransacao)
router.get("/transacao/:id", verificarLogin,TransacaoController.getTransacao) // mostra transacao por id
router.get("/minhas_transacoes", verificarLogin,TransacaoController.getTransacoesByUser)
router.get("/periodo/:periodoId", verificarLogin,TransacaoController.getTransacoesByUserAndPeriodo)
router.put("/editar/:id", verificarLogin,TransacaoController.editTransacao)
router.delete("/deletar/:id", verificarLogin,TransacaoController.deleteTransacao)
*/

import api from "../api/api.js"

const criarTransacao = async (dadosTransacao) => {
    const response = await api.post("/transacoes/criar/", dadosTransacao)
    return response.data
}

const getTransacaoById = async (id) => {
    const response = await api.get(`/transacoes/transacao/${id}/`)
    return response.data
}

const getMinhasTransacoes = async () => {
    const response = await api.get("/transacoes/minhas_transacoes/")
    return response.data
}

const getTransacoesPorPeriodo = async (periodoId) => {
    const response = await api.get(`/transacoes/periodo/${periodoId}/`)
    return response.data
}

const editTransacao = async(id, dadosTransacao) => {
    const response = await api.put(`/transacoes/editar/${id}/`, dadosTransacao)
    return response.data
}

const deleteTransacao = async (id) => {
    const response = await api.delete(`/transacoes/deletar/${id}/`)
    return response.data
}

export { criarTransacao, getTransacaoById, getMinhasTransacoes, getTransacoesPorPeriodo, editTransacao, deleteTransacao }

