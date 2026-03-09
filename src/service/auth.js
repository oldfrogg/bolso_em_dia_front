import api from "../api/api"


const login = async (dados) => {
    console.log(dados)
    const response = await api.post("/auth/login/", dados)
    return response
}

const logout = async () => {
    const response = await api.post("/auth/logout")
    return response
}

export { login, logout }