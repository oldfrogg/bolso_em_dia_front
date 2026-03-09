import axios from "axios";

// crio uma instância central da API
const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true // enviar cookies junto com a requisição
});

// tratar UNAUTHORIZED evitando repetir código em todo lugar
api.interceptors.response.use(
    (response) => response,
    (error) => {

        if (error.response && error.response.status === 401) {
            console.log("Usuário não autenticado")
        }

        return Promise.reject(error)
    }
)

export default api
