import axios from "axios"

const EMS_API_BASE_URL = "http://localhost:7080/employees/"

class EmployeeService {

    createEmployee = employee => axios.post(EMS_API_BASE_URL, employee) // POST

    getEmployees = () => axios.get(EMS_API_BASE_URL) // GET 

    getEmployeeById = id => axios.get(EMS_API_BASE_URL + id) // GET

    updateEmployee = (employee, id) => axios.put(EMS_API_BASE_URL + id, employee) // PUT

    deleteEmployee = id => axios.delete(EMS_API_BASE_URL + id) // DELETE

}

export default new EmployeeService()