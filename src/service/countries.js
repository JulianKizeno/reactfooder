import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: 'https://reactr-realfooder.herokuapp.com/api/countries',
            withCredentials: true
        })
    }
    getCountries = () => this.service.get('/')
}