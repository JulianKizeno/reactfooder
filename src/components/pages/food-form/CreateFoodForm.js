import React, { Component } from 'react'
import FoodsService from '../../../service/foods'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class CreateFoodForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            img: '',
            price: 0,
            kcal: 0,
            protein: 0,
            fat: 0,
            carbs: 0,
            stock: 0,
            importTax: false,
            origin: ''
        }
        this.foodsService = new FoodsService()
    }

    handleInputChange = e => {      
        const { name, value } = e.target
        this.setState({[name] : value})
    }

    handleCheckBox = (e) => {
        this.setState({importTax : e.target.checked})
    }

    showInfo = () =>{ 
        if(this.props.editProductModal){
            const id = this.props.productId
            this.foodsService.getFood(id)
                .then(response => this.setState( response.data ))
                .catch(err => console.log(err))
        }
    }

    componentDidMount = () => {
        this.showInfo()
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.props.newProductModal){
            const stateCopy = { ...this.state }
            stateCopy.origin = stateCopy.origin.split(',').map(elm => elm.trim())
            stateCopy.owner_id = this.props.loggedInUser._id
    
            this.foodsService.saveFood(stateCopy)
                .then(() => {
                    this.props.finishFoodPost()
                })
                .catch(err => console.log(err))
        }
        if(this.props.editProductModal){
            const id = this.state._id
            const stateCopy = {...this.state}
            stateCopy.origin = stateCopy.origin.toString().split(',').map(elm => elm.trim()) 
            stateCopy.owner_id = this.props.loggedInUser._id

            this.foodsService.editFood(id, stateCopy)
            .then(() =>{
                this.props.finishFoodPost()
            })
            .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <Container as="section" style={{paddingTop: '0px'}}>

                <Row> 
                    <h1 style={{marginLeft: '15px', marginTop: '8px', marginBottom: 0}}>
                        { !this.props.editProductModal ? 'Crear Nuevo Alimento' : 'Editar Alimento'}
                    </h1>  
                </Row>
                <hr/>

                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>

                            <Form.Group controlId="name">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Nombre del producto" value={this.state.name} onChange={this.handleInputChange} required/>
                            </Form.Group>

                            <Form.Group controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control name="description" as="textarea" placeholder="Descripción del producto" value={this.state.description} onChange={this.handleInputChange} required/>
                            </Form.Group>

                            <Form.Group controlId="originCountry">
                                <Form.Label>Países de origen (separar por comas)</Form.Label>
                                <Form.Control name="origin" type="text" placeholder="País(es) de origen" value={this.state.origin} onChange={this.handleInputChange} required/>
                            </Form.Group>

                            <Form.Group controlId="productImage">
                                <Form.Label>Imagen (URL)</Form.Label>
                                <Form.Control name="img" type="text" placeholder="http://" value={this.state.img} onChange={this.handleInputChange} required/>
                            </Form.Group>

                        </Col>
                        <Col>
                            <Row>

                                <Col>
                                    <Form.Group controlId="price">
                                        <Form.Label>Precio</Form.Label>
                                        <Form.Control name="price" type="number"  value={this.state.price} onChange={this.handleInputChange} required/>
                                    </Form.Group>

                                    <Form.Group controlId="protein">
                                        <Form.Label>Proteínas</Form.Label>
                                        <Form.Control name="protein" type="number"  value={this.state.protein} onChange={this.handleInputChange} required/>
                                    </Form.Group>

                                    <Form.Group controlId="carbs">
                                        <Form.Label>Carbohidratos</Form.Label>
                                        <Form.Control name="carbs" type="number"  value={this.state.carbs} onChange={this.handleInputChange} required/>
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group controlId="kcal">
                                        <Form.Label>Kcal</Form.Label>
                                        <Form.Control name="kcal" type="number"  value={this.state.kcal} onChange={this.handleInputChange} required/>
                                    </Form.Group>

                                    <Form.Group controlId="fat">
                                        <Form.Label>Grasas</Form.Label>
                                        <Form.Control name="fat" type="number"  value={this.state.fat} onChange={this.handleInputChange} required/>
                                    </Form.Group>

                                    <Form.Group controlId="stock">
                                        <Form.Label>Stock</Form.Label>
                                        <Form.Control name="stock" type="number"  value={this.state.stock} onChange={this.handleInputChange} required/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group controlId="importTax">
                                <Form.Check name="importTax" type="checkbox" label="Aplica impuestos de importación" checked={this.state.importTax} onChange={this.handleCheckBox}/>
                            </Form.Group>

                            <Button variant="dark" type="submit" style={{width: '100%'}}>
                                {!this.props.editProductModal ? 'Crear alimento' : 'Guardar Cambios' }                                   
                            </Button>     
                                  
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }
}

export default CreateFoodForm