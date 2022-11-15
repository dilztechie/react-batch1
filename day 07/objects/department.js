class Department {
    constructor(id, name, location) {
        this.id = id
        this.name = name
        this.location = location
    }

    toString = () => "Department [id:" + this.id + ", name:" + this.name
        + ", location:" + this.location + "]"
}