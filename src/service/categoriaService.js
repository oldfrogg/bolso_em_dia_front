/*
router.get("/", CategoriaController.getCategorias)
router.get("/:id", CategoriaController.getCategoria)
*/

import api from "../api/api"

const getCategorias = async () => {
    const response = await api.get("/categorias/")
    return response.data
}

const getCategoria = async (id) => {
    const response = await api.get(`/categorias/${id}/`)
    return response.data
}
 
export { getCategoria, getCategorias }