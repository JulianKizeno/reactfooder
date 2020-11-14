import React, { Component } from 'react'
import AuthService from './../../../service/auth.service'
import CountriesService from './../../../service/countries'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'


class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            loginInfo: {
                country: '',
                username: '',
                password: ''
            },
            errorMessage: ''
        }
        this.authService = new AuthService()
        this.countryService = new CountriesService()
    }

    getAllCountries = () =>{
        this.countryService.getCountries()
            .then(response => this.setState({countries: response.data}))
            .catch(err => console.log(err))
    }

    componentDidMount = () =>{
        this.getAllCountries()
    }


    handleInputChange = e => {
        let loginInfoCopy = { ...this.state.loginInfo }
        const { name, value } = e.target
        loginInfoCopy = { ...loginInfoCopy, [name]: value }
        this.setState({ loginInfo: loginInfoCopy })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.authService.signup(this.state.loginInfo)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.history.push('/alimentos')
            })
            .catch(err => console.log(err))
    }



    render() {
        return (
            <Container>
                <Row className='background-index' style={{marginTop: '65px'}}>
                    <Col md={{ span: 4, offset: 4 }}>

                        <h3>Registro de usuario</h3>
                        <hr></hr>
                        <Form onSubmit={this.handleSubmit} method="POST">

                            <Form.Group controlId="name">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="pwd">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="select">
                                <Form.Label>País</Form.Label>
                                <Form.Control as="select" name="country" value={this.state.country} onChange={this.handleInputChange}>
                                    <option>Selecciona un país</option>
                                    {this.state.countries.map((elm,idx) => <option key={idx}>{elm.name}</option>)} 
                                </Form.Control>
                            </Form.Group>

                            <p
                                className='error-message'
                                style={{ display: this.state.errorMessage ? 'block' : 'none' }}>{this.state.errorMessage}
                            </p>

                            <Button variant="dark" type="submit">Registrarme</Button>
                        </Form>

                        <p><small>¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link></small></p>

                    </Col>
                </Row>

            </Container>
        )
    }
}


export default Signup