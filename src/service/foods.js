import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: 'https://reactr-realfooder.herokuapp.com/api/foods',
            withCredentials: true
        })
    }
    getFoods = () => this.service.get('/')
    getFood = foodId => this.service.get(`/details/${foodId}`)
    saveFood = newFood => this.service.post(`/newFood`, newFood)
    deleteFood = id => this.service.delete(`/delete/${id}`)
    editFood = (productId, object) => this.service.put(`/edit/${productId}`, object)
}