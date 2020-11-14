import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import AuthService from '../../../service/auth.service'

import { Link } from 'react-router-dom'


class Navigation extends Component {

    constructor(props) {
        super(props)
        this.authService = new AuthService()
    }

    logout = () => {
        this.props.setTheUser(false)
        localStorage.setItem('currentUser', JSON.stringify(null))
        this.authService.logout()
        this.props.history.push('/')
    }

    render() {

        return (
            <Navbar expand="md">
                <Navbar.Brand as="div">
                    {
                        this.props.loggedInUser ?
                        <div>RealFooder!</div>
                        :
                        <Link to="/">RealFooder!</Link>
                    }
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as="div"><Link to="/alimentos">Alimentos</Link></Nav.Link>
                        <Nav.Link as="div"><Link to="/estadisticas">Estadísticas</Link></Nav.Link>
                        <Nav.Link as="div"><Link to="/dietas">Dietas</Link></Nav.Link>
                        {
                            !this.props.loggedInUser ?
                                <>
                                    <Nav.Link as="div"><Link to="/">Iniciar sesión</Link></Nav.Link>
                                    <Nav.Link as="div"><Link to="/signup">Registro</Link></Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link as="div" onClick={this.logout} style={{cursor:'pointer'}}>Cerrar sesión</Nav.Link>
                                </>

                        }

                    </Nav>
                    <Navbar.Text className="ml-auto"> Hola, {this.props.loggedInUser ? this.props.loggedInUser.username : 'invitad@'}</Navbar.Text>
                </Navbar.Collapse>

            </Navbar>
        )
    }

}

export default Navigation