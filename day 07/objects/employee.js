class Employee {
    constructor(id, name, designation, department, salary) {
        this.id = id
        this.name = name
        this.designation = designation
        this.department = department
        this.salary = salary
    }

    toString = () => "Employee [id:" + this.id + ", name:" + this.name
        + ", designation:" + this.designation + ", department:" + this.department
        + ", salary:" + this.salary + "]"
}