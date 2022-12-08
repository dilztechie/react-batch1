import axios from "axios"

export default class AuthenticationService {
    login = (username, password) =>
        axios.post('http://localhost:7080/api/auth', { username, password })
            .then(response => {
                localStorage.setItem("user", JSON.stringify(response.data))
                return response.data
            })

    logout = () => localStorage.removeItem("user")

    register = (username, email, password) =>
        axios.post('http://localhost:7080/api/auth', { username, email, password })

    getCurrentUser = () => JSON.parse(localStorage.getItem("user"))
}