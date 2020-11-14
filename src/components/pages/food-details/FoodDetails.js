import React, { Component } from 'react'
import FoodsService from '../../../service/foods'

import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Card } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'


class FoodDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.foodsService = new FoodsService()
    }

    getOneFood = () => { 
        const id = this.props.match.params.foodId
        this.foodsService.getFood(id)
            .then(response => this.setState(response.data))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getOneFood()
    }

    render() {
        return (
            <Container as="section" className='backg-details'>
                <Row >
                    <Col md={4}>
                    <Card>
                        <h1 style={{textAlign: 'center', marginBottom: '30px'}}>{this.state.name} </h1>
                            <img src={this.state.img} alt={this.state.name} style={{textAlign: 'center'}}/>
                    </Card>
                    </Col>
                    <Col md={{span: 7, offset: 1, margin: 0}}>
                        <h2>Especificaciones</h2>
                        <p>{this.state.description} </p>
                        <hr/>
                        <p>Precio: {this.state.price} €</p>
                        <Tabs defaultActiveKey="nutricional">
                            <Tab eventKey="nutricional" title="Nutricional">
                                <h3>Información notricional</h3>
                                <hr/>
                                <h6 style={{marginTop: '20px', marginBottom: '20px'}}>Aporte nutricional por 100g</h6>
                                <ul>
                                    <li>Calorias: {this.state.kcal}</li>
                                    <li>Proteínas: {this.state.protein}</li>
                                    <li>Grasas: {this.state.fat}</li>
                                    <li>Carbohidratos: {this.state.carbs}</li>
                                </ul>
                            </Tab>
                            <Tab eventKey="origen" title="Origen">
                                <h3>Origen</h3>
                                <hr/>
                                <h6 style={{marginTop: '20px', marginBottom: '20px'}}> {this.state.name} procente de:  </h6>
                                <ul>
                                    {
                                        !this.state.origin ? undefined :
                                            this.state.origin.map((elm,idx) => <li key={idx}>{elm}</li>)
                                    }                             
                                </ul>
                            </Tab>
                            <Tab eventKey="stock" title="Stock">
                                <h3>Stock</h3>
                                <hr/>
                                <p>Stock actual: {this.state.stock} unidades en stock </p>
                            </Tab>
                        </Tabs>
                        <Button variant="outline-dark" className="bck-home-btn" onClick={()=> this.props.history.goBack()}>Volver</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default FoodDetails