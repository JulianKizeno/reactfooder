import React, { Component } from 'react'
import FoodsService from '../../../service/foods'

import Container from 'react-bootstrap/Container'
import Table from "react-bootstrap/Table"
import Row from "react-bootstrap/Row"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import CreateFoodForm from '../food-form/CreateFoodForm'
import ModalPopUp from '../../ui/pop-up/ModalPopUp'
import { Link } from 'react-router-dom'

import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FoodsIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newProductModal: false,
            editProductModal: false,
            toastModal: false,
            toastAfterModal: false,
            food: [],
            filteredFood: [],
            search: ''
        }
        this.foodsService = new FoodsService()
    }


    handleOnChange = e =>{
        this.setState({search: e.target.value})
        this.searchBar(e.target.value)
    }
    
    toggleModal = (modalName) => {
        this.setState({ [modalName]: !this.state[modalName]})
    }

    searchBar = (foods) =>{
        const filteredFood = this.state.food.filter((product) => product.name && product.name.toLowerCase().includes(foods.toLowerCase()))
        this.setState({ filteredFood: filteredFood }) 
    }
    
    getAllFood = () => {
       this.foodsService.getFoods()
            .then(response => this.setState( { food: response.data, filteredFood: response.data }))
            .catch(err => console.log(err))
    }

    handleDelete = (foodId) => {
        this.foodsService.deleteFood(foodId)
            .then(() => {
                this.toggleModal('toastModal')
                this.getAllFood()
                setTimeout(() => {
                    this.toggleModal('toastModal')
                }, 3000)
            })
            .catch(err => console.log(err))
    }

    showModalEdit = (productId) =>{
        this.setState({_id: productId})
        this.toggleModal('editProductModal')
    }

    componentDidMount = () => {
       this.getAllFood()
    }

    finishFoodPost = () =>{
        this.getAllFood()
        if(this.state.newProductModal){
            this.toggleModal('newProductModal')
            this.toggleModal('toastAfterModal')
            setTimeout(() => {
                this.toggleModal('toastAfterModal')
            }, 3000)
        }else {
            this.toggleModal('editProductModal')
        }
    }

    render() {
        
        return (
            <div style={{position:'relative'}}  className='backg-foods'>
            <Container as="section">

                <Row style={{margin: 0}}>
                    <header>
                        <h1>Alimentos</h1>
                        <p>Consulta los detalles de stock, precios y origen.</p>
                    </header>
                </Row>

                <Row className='modal-row' >
                    <form>
                        <label>Nombre:</label>
                        <input type="text" value={this.state.search} className="searchBar" onChange={this.handleOnChange} />
                    </form>
                    {
                        this.props.loggedInUser && 
                        <Button variant="outline-dark" className="btn bck-home-btn" onClick={() => this.toggleModal('newProductModal')}>Añadir nuevo alimento</Button>
                    }
                </Row>

                <ModalPopUp show={this.state.toastAfterModal} onClose={() => this.toggleModal('toastAfterModal')} style={{borderRadius: '5px', width: 'inherit'}}>
                    <p>Mensaje</p>
                        <hr/>
                    <p>Producto Creado Correctamente</p>
                </ModalPopUp>  
                
                <Modal show={this.state.newProductModal || this.state.editProductModal} onHide={ () => this.state.editProductModal ? this.toggleModal('editProductModal') : this.toggleModal('newProductModal')} > 
                    <Modal.Body>
                        {
                            !this.state.newProductModal ?
                            <CreateFoodForm finishFoodPost={this.finishFoodPost} editProductModal={this.state.editProductModal} loggedInUser={this.props.loggedInUser} productId={this.state._id} />  
                            :                  
                            <CreateFoodForm finishFoodPost={this.finishFoodPost}  newProductModal={this.state.newProductModal} loggedInUser={this.props.loggedInUser}/>                    
                        }
                    </Modal.Body>
                </Modal>

                <Table className="table">     
                    <tbody>
                    {this.state.filteredFood.map((elm, idx) => (
                        <tr key={idx}>
                            <td>
                                <img
                                className="product-picture"
                                src={elm.img} alt={elm.name}
                                />
                            </td>
                            <td>
                                <p>{elm.name}</p>
                            </td>
                            <td>
                                <p>
                                    Precio: {elm.price} € | Stock disponible: {elm.stock}  uds
                                    { 
                                        this.props.loggedInUser && elm.origin.includes(this.props.loggedInUser.country) &&
                                        <sup>Proximidad</sup>
                                    } 
                                </p>

                                 <Link to={`/alimento/${elm._id}`} style={{textDecoration: 'none', color: 'inherit'}}><Button variant="outline-dark">Detalles </Button></Link>

                                {
                                    this.props.loggedInUser && this.props.loggedInUser._id === elm.owner_id &&  
                                    <>                                     
                                    <Button variant="outline-dark" onClick={() => this.handleDelete(elm._id)} ><FontAwesomeIcon icon={faTrashAlt} /></Button>
                                    <Button variant="outline-dark" onClick={() => this.showModalEdit(elm._id)}> <FontAwesomeIcon icon={faEdit} /></Button>
                                    </>
                                }

                            </td>
                        </tr>
                    ))}
                    { 
                        !this.state.filteredFood.length && (
                        <tr>
                            <td>
                                <p>Sin resultados</p>
                            </td>
                        </tr>
                        )
                    }
                    </tbody>
                </Table>
                
                <ModalPopUp show={this.state.toastModal} title='Mensaje' message='Producto Borrado Correctamente' onClose={() => this.toggleModal('toastModal')} />
                    
            </Container>
            </div>
        )
    }
}

export default FoodsIndex