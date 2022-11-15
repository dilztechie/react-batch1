class User {
    static authenticate = (username, password) =>
        username.toString() == "dilip" && password.toString() == "malani" ?
            "Authorized User" : "UnAuthorized User"
}