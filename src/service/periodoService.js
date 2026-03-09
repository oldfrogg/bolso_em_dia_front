/*
router.post("/criar", verificarLogin, PeriodoController.createPeriodo) // cria periodo novo
router.get("/meus_periodos", verificarLogin, PeriodoController.getPeriodosByUser) // verifica todos os periodos de um usuario
router.get("/atual", verificarLogin, PeriodoController.getAtualByUser) // verifica periodo atual do usuario
router.get("/periodo/:id", verificarLogin, PeriodoController.getPeriodo) // verifica um periodo especifico
*/

import api from "../api/api.js"

const criarPeriodo = async (dadosPeriodo) => {
    const response = await api.post("/periodos/criar/", dadosPeriodo)
    return response.data
}

const getMeusPeriodos = async () => {
    const response = await api.get("/periodos/meus_periodos/")
    return response.data
}

const getPeriodoAtual = async () => {
    const response = await api.get("/periodos/atual/")
    return response.data
}


const getPeriodoById = async (id) => {
    const response = await api.get(`/periodos/periodo/${id}/`)
    return response.data
}




export { getMeusPeriodos, getPeriodoAtual, criarPeriodo, getPeriodoById }