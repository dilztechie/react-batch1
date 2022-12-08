export default class DataService {
    user = JSON.parse(localStorage.getItem('user'))

    authHeader = () =>
        (this.user && this.user.accessToken) ?
            { Authorization: 'Access Token ' + this.user.accessToken } :
            {}
}