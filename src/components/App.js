import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Switch, Route } from 'react-router-dom'
import Navbar from './ui/navbar/Navbar'
import IndexPage from './pages/index/Index-page'

import Signup from './pages/signup/Signup'

import AuthService from '../service/auth.service'
import FoodsIndex from './pages/foods/FoodIndex'
import FoodDetails from './pages/food-details/FoodDetails'
import FoodStats from './pages/statistics/FoodStats'
import Diets from './pages/diet/Diets'

class App extends Component {

    constructor() {
        super()
        this.state = { 
            loggedInUser: null, 
        }
        this.authService = new AuthService()
    }

    setTheUser = userObj => this.setState({ loggedInUser: userObj }, () => console.log('El estado de App ha cambiado:', this.state))

    fetchUser = () => {
        const currentUser = localStorage.currentUser || false
        this.setTheUser(JSON.parse(currentUser))
    }

    componentDidMount = () => {
        this.fetchUser()
    }


    render() {
        return (
            <>
                <Route exact render={ props => <Navbar setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} {...props}/>} />
                <Switch>
                    <Route path="/" exact render={ props => <IndexPage loggedInUser={this.state.loggedInUser} setTheUser={this.setTheUser} {...props}/>} />
                    <Route path="/alimentos" exact render={ props => <FoodsIndex loggedInUser={this.state.loggedInUser} {...props}/>} />
                    <Route path="/alimento/:foodId" exact render={ props => <FoodDetails loggedInUser={this.state.loggedInUser} {...props}/>} />
                    <Route path="/estadisticas" exact render={ props => <FoodStats loggedInUser={this.state.loggedInUser} {...props}/>} />
                    <Route path="/dietas" exact render={ props => <Diets loggedInUser={this.state.loggedInUser} {...props}/>} />
                    <Route path="/signup" exact render={props => <Signup  setTheUser={this.setTheUser} {...props}/>} />
                </Switch>
            </>
        )
    }
}

export default App