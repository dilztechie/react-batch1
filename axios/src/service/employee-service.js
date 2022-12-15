import axios from "axios";

const EMS_API_BASE_URL = "http://localhost:7080/employees/"

class EmployeeService {

    client = axios.create({ baseURL: EMS_API_BASE_URL })

    createEmployee = employee => this.client.post(employee) // POST

    getEmployees = () => this.client.get() // GET 

    getEmployeeById = id => this.client.get(id) // GET

    updateEmployee = (employee, id) => this.client.put(id, employee) // PUT

    deleteEmployee = id => this.client.delete(id) // DELETE

}

export default new EmployeeService()