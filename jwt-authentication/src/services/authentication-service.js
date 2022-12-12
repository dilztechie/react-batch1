class AuthenticationService {
    result = null

    register = (fullName, username, email, password, role) => {
        fetch('http://localhost:3030/users', {
            method: 'POST',
            body: JSON.stringify({
                "user": {
                    "name": fullName,
                    "username": username,
                    "email": email,
                    "password": password,
                    "role": role
                }
            }),
            headers: { 'Content-type': 'application/json' }
        }).then(response => {
            response.json()
        }).catch(error => false)
        return true
    }

    login = (username, password) => {
        fetch('http://localhost:3030/users')
            .then(response => response.json())
            .then(users => {
                users.map(data => {
                    if (data.user.username === username && data.user.password === password)
                        this.result = data
                    return this.result
                })
            })
        localStorage.setItem("user", this.result)
        return this.result
    }
}

export default new AuthenticationService()