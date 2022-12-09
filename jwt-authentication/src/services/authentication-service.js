import axios from "axios"

export default class AuthenticationService {
    login = (username, password) =>
        axios.post('http://localhost:7080//api/auth/signin', { username, password })
            .then(response => {
                localStorage.setItem("user", JSON.stringify(response.data))
                return response.data
            })

    logout = () => localStorage.removeItem("user")

    register = (username, email, password) =>
        axios.post('http://localhost:7080/api/auth/signup', { username, email, password })
            .then(response => {
                console.log(response.data)
                return response.data
            })

    getCurrentUser = () => JSON.parse(localStorage.getItem("user"))
}