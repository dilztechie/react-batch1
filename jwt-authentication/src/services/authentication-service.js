class AuthenticationService {
    user = null
    isRegistered = false

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
            this.isRegistered = true
        })
        return this.isRegistered
    }

    login = (username, password) => {
        fetch('http://localhost:3030/users')
            .then(response => response.json())
            .then(users => {
                users.map(data => {
                    if (data.user.username === username && data.user.password === password)
                        this.user = data.user
                })
            })
        localStorage.setItem("user", JSON.stringify(this.user))
        return this.user
    }
}

export default new AuthenticationService()