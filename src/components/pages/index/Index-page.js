import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import AuthService from '../../../service/auth.service'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'


class IndexPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loginInfo: {
                username: '',
                password: ''
            },
            errorMessage: ''
        }
        this.authService = new AuthService()
    }

    handleInputChange = e => {

        let loginInfoCopy = { ...this.state.loginInfo }
        const { name, value } = e.target
        loginInfoCopy = { ...loginInfoCopy, [name]: value }

        this.setState({ loginInfo: loginInfoCopy })
    }

    handleSubmit = e => { 
        e.preventDefault()

        this.authService.login(this.state.loginInfo)
            .then(response => {
                localStorage.setItem('currentUser', JSON.stringify(response.data))
                this.props.setTheUser(response.data)
                this.props.history.push('/alimentos')
            })
            .catch(err => console.log(err))
    }

    render(){
        return (
            <Container className="index-page">
                <Row className='background-index'>
                    <Col md={4}>

                        <h3>Inicio de sesión</h3>
                        <hr></hr>
                        <Form onSubmit={this.handleSubmit}>

                            <Form.Group controlId="name">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="pwd">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>

                            <p className='error-message' style={{ display: this.state.errorMessage ? 'block' : 'none' }}>
                                {this.state.errorMessage}
                            </p>

                            <Button variant="dark" type="submit">Iniciar sesión</Button>
                        </Form>
                        <p><small>¿No tienes cuenta? <Link to="/signup">Regístrate</Link></small></p>
                    </Col>

                    <Col md={7} style={{marginTop: '20px'}}>
                        <header style={{marginLeft: '60px', textAlign: 'center', backgroundColor: 'transparent', color: '#333', borderRadius: '10px', padding: '50px 0'}}>
                            <h1>RealFooder</h1>
                            <p>Una sencilla SPA de alimentación</p>
                        </header>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default IndexPage