import axios from "axios";
import authHeader from "./authentication-service"

export default class UserService {
    getPublicContent = () => axios.get('http://localhost:7080/api/data/all')

    getUserContent = () => axios.get('http://localhost:7080/api/data/user',
        { headers: authHeader() })

    getAdminContent = () => axios.get('http://localhost:7080/api/data/admin',
        { headers: authHeader() })
}