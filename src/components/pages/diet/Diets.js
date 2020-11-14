import React, { Component } from 'react'
import FoodsService from '../../../service/foods'

import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'  
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveBar } from '@nivo/bar'
import Col from "react-bootstrap/Col"


class Diets extends Component {

    constructor(props) {
        super(props)
        this.state = {
            food: []
        }
        this.foodsService = new FoodsService()
    }

    getAllFood = () => {
        this.foodsService.getFoods()
             .then(response => this.setState({ food: response.data}))
             .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getAllFood()
    }

    render() {
        const dataFilter = this.state.food.filter((food) => food.protein > 3)
        const dataSorted = dataFilter.sort((a, b) => a < b ? 1 : -1)
        const data = dataSorted.slice(0, 9)
        
        const FoodProtein = data.map((food) => {
            const newData = {
                "id": food.name, 
                "value": food.protein   
            }
            return newData
        })

        const FoodKcal = data.map((food) => {
            const newData = {
                "id": food.name, 
                "value": food.kcal   
            }
            return newData
        })
        
        const foodCarbs = data.map((food) => {
            const newData = {
                "id": food.name, 
                "value": food.carbs   
            }
            return newData
        })
        
        return (

            <Container className='backg-diets'>
                <h1 style={{marginBottom: '50px'}}>Dietas</h1>
                <Accordion>
                    <Card style={{backgroundColor: '#ffffff66', alignItems: 'baseline', marginBottom: '100px'}} >
                        <Accordion.Toggle as={Card.Header} eventKey="0" className='btn-dark btn' >
                        Alimentos Ricos en proteína
                        </Accordion.Toggle>
                        <p style={{paddingLeft:'50px', textAlign:'justify'}}>Después del agua, las proteínas son el nutriente con mayor presencia en el cuerpo humano.
                            Es por eso que son parte fundamental para nuestro desarrollo y bienestar físico ya que son un componente importante para la formación de los músculos, 
                            el cerebro y los órganos vitales del cuerpo, además de ayudar al correcto funcionamiento del sistema inmunológico e influir en el metabolismo.
                        </p>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body >
                                <Row style={{justifyContent:'flex-end'}}>
                                    <Col md={4}>

                                        <Row style={{height : '300px', backgroundColor: 'transparent', alignItems: 'center'}}>
                                
                                                <ResponsivePie
                                                    data={FoodProtein}
                                                    margin={{ top: 65, right: 0, bottom: 60, left: 0 }}
                                                    innerRadius={0}
                                                    padAngle={0}
                                                    cornerRadius={45}
                                                    colors={{ scheme: 'nivo' }}
                                                    borderWidth={1}
                                                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                                                    radialLabelsSkipAngle={10}
                                                    radialLabelsTextXOffset={6}
                                                    radialLabelsTextColor="#333333"
                                                    radialLabelsLinkOffset={0}
                                                    radialLabelsLinkStrokeWidth={1}
                                                    radialLabelsLinkColor={{ from: 'color' }}
                                                    slicesLabelsSkipAngle={5}
                                                    radialLabelsLinkDiagonalLength={20}
                                                    radialLabelsLinkHorizontalLength={20}
                                                    slicesLabelsTextColor="#333333"
                                                    defs={[
                                                        {
                                                            id: 'dots',
                                                            type: 'patternDots',
                                                            background: 'inherit',
                                                            color: 'rgba(255, 255, 255, 0.3)',
                                                            size: 4,
                                                            padding: 1,
                                                            stagger: true
                                                        },
                                                        {
                                                            id: 'lines',
                                                            type: 'patternLines',
                                                            background: 'inherit',
                                                            color: 'rgba(255, 255, 255, 0.3)',
                                                            rotation: -45,
                                                            lineWidth: 6,
                                                            spacing: 10
                                                        }
                                                    ]}
                                                    fill={[
                                                        {
                                                            match: {
                                                                id: 'Espárragos'
                                                            },
                                                            id: 'lines'
                                                        },
                                                        {
                                                            match: {
                                                                id: 'Aguacate'
                                                            },
                                                            id: 'dots'
                                                        },
                                                        {
                                                            match: {
                                                                id: 'Pepino'
                                                            },
                                                            id: 'lines'
                                                        },
                                                        {
                                                            match: {
                                                                id: 'Tomate rama'
                                                            },
                                                            id: 'dots'
                                                        },
                                                        {
                                                            match: {
                                                                id: 'Berenjena'
                                                            },
                                                            id: 'lines'
                                                        }
                                                    ]}
                                                />
                                            </Row>
                                    </Col>
                                    <Col sm={6}>
                                        <Row style={{margin: 'auto', width: '85%', justifyContent: 'center'}} >
                                            {data.map((food, idx) => { return (
                                            <Link to={`/alimento/${food._id}`} style={{textDecoration: 'none', color: 'inherit'}} key={idx}>
                                                <Card className='diet-card' >    
                                                    <img src={food.img} alt={food.name} style={{textAlign: 'center'}}/>
                                                    <h3 style={{textAlign: 'center', fontSize: '16px', margin: 0}}>{food.name} </h3>
                                                </Card>
                                            </Link>
                                            )})}
                                        </Row>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    

                    <Card style={{backgroundColor: '#ffffff66', alignItems: 'baseline', marginBottom: '100px'}} >
                        <Accordion.Toggle as={Card.Header} eventKey="2" className='btn-dark btn'>
                        Alimentos Ricos en Carbohidrátos
                        </Accordion.Toggle>
                        <p style={{paddingLeft:'50px', textAlign:'justify'}}>
                            Se recomienda que entre un 45-65% de las calorías totales de la dieta diaria proceda de los hidratos de carbonos.
                            Los hidrátos de carbono permiten que tu cuerpo se mueva: son la principal fuente de energía, por delante de las grasas y las proteínas. La glucosa de los hidratos de 
                            carbono pasa directamente al cerebro para que tu mente pueda funcionar, además mejoran el estado de ánimo: los hidratos de carbono complejos son ricos en vitamina B, 
                            esencial para el buen funcionamiento del sistema nervioso y el estado de ánimo.
                        </p>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body >
                                <Row style={{justifyContent:'flex-end'}}>
                                    <Col sm={6}>
                                        <Row style={{margin: 'auto', width: '85%', justifyContent: 'center'}} >
                                            {data.map((food, idx) => { return (
                                            <Link to={`/alimento/${food._id}`} style={{textDecoration: 'none', color: 'inherit'}} key={idx}>
                                                <Card className='diet-card' >    
                                                    <img src={food.img} alt={food.name} style={{textAlign: 'center'}}/>
                                                    <h3 style={{textAlign: 'center', fontSize: '16px', margin: 0}}>{food.name} </h3>
                                                </Card>
                                            </Link>
                                            )})}
                                        </Row>
                                    </Col>
                                    <Col md={5}>

                                        <Row style={{height : '300px', backgroundColor: 'transparent', alignItems: 'center'}}>
                                
                                            <ResponsiveBar
                                                keys={['value']}
                                                data={foodCarbs}
                                                indexBy={'id'}
                                                margin={{ top: 50, right: 140, bottom: 50, left: 60 }}
                                                padding={0.3}
                                                colors={{ scheme: 'set3' }}
                                                axisBottom={{
                                                    tickSize: 5,
                                                    tickPadding: 2,
                                                    tickRotation: -40,

                                                }}
                                                axisLeft={{
                                                    tickSize: 5,
                                                    tickPadding: 8,
                                                    tickRotation: 0,
                                                    legend: 'Aporte',
                                                    legendPosition: 'middle',
                                                    legendOffset: -50
                                                }}
                                                labelSkipWidth={12}
                                                labelSkipHeight={12}
                                                labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
                                                animate={true}
                                                motionStiffness={90}
                                                motionDamping={15}
                                                />
                                            </Row>
                                    </Col>
                                    
                                </Row>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card style={{backgroundColor: '#ffffff66', alignItems: 'baseline', marginBottom: '100px'}} >
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className='btn-dark btn'>
                        Alimentos Calóricos
                        </Accordion.Toggle>
                        <p style={{paddingLeft:'50px', textAlign:'justify'}}>Las calorías son indispensables para el desarrollo del individuo, para absorber nutrientes de los alimentos, 
                            y para las actividades físicas o actividades que generan mucho estrés. Refiriéndose a los alimentos, dice que aunque el número de calorías varía entre ellos, 
                            todos las contienen, desde un filete de salmón, hasta los pepinos y el pan dulce.
                        </p>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body >
                                <Row style={{justifyContent:'flex-end'}}>
                                    <Col md={4}>

                                        <Row style={{height : '300px', backgroundColor: 'transparent', alignItems: 'center'}}>
                                
                                            <ResponsivePie
                                                data={FoodKcal}
                                                margin={{ top: 65, right: 0, bottom: 60, left: 0 }}
                                                innerRadius={0.6}
                                                padAngle={5}
                                                colors={{ scheme: 'nivo' }}
                                                borderWidth={1}
                                                borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                                                radialLabelsSkipAngle={10}
                                                radialLabelsTextXOffset={6}
                                                radialLabelsTextColor="#333333"
                                                radialLabelsLinkOffset={0}
                                                radialLabelsLinkStrokeWidth={1}
                                                radialLabelsLinkColor={{ from: 'color' }}
                                                slicesLabelsSkipAngle={10}
                                                slicesLabelsTextColor="#333333"
                                                animate={true}
                                                motionStiffness={90}
                                                motionDamping={15}
                                                defs={[
                                                    {
                                                        id: 'dots',
                                                        type: 'patternDots',
                                                        background: 'inherit',
                                                        color: 'rgba(255, 255, 255, 0.3)',
                                                        size: 4,
                                                        padding: 1,
                                                        stagger: true
                                                    },
                                                    {
                                                        id: 'lines',
                                                        type: 'patternLines',
                                                        background: 'inherit',
                                                        color: 'rgba(255, 255, 255, 0.3)',
                                                        rotation: -45,
                                                        lineWidth: 6,
                                                        spacing: 10
                                                    }
                                                ]}
                                                fill={[
                                                    {
                                                        match: {
                                                            id: 'Espárragos'
                                                        },
                                                        id: 'lines'
                                                    },
                                                    {
                                                        match: {
                                                            id: 'Aguacate'
                                                        },
                                                        id: 'dots'
                                                    },
                                                    {
                                                        match: {
                                                            id: 'Pepino'
                                                        },
                                                        id: 'lines'
                                                    },
                                                    {
                                                        match: {
                                                            id: 'Tomate rama'
                                                        },
                                                        id: 'dots'
                                                    },
                                                    {
                                                        match: {
                                                            id: 'Berenjena'
                                                        },
                                                        id: 'lines'
                                                    }
                                                ]}
                                            />
                                        </Row>
                                    </Col>
                                    <Col sm={6}>
                                        <Row style={{margin: 'auto', width: '85%', justifyContent: 'center'}} >
                                            {data.map((food, idx) => { return (
                                            <Link to={`/alimento/${food._id}`} style={{textDecoration: 'none', color: 'inherit'}} key={idx}>
                                                <Card className='diet-card' >    
                                                    <img src={food.img} alt={food.name} style={{textAlign: 'center'}}/>
                                                    <h3 style={{textAlign: 'center', fontSize: '16px', margin: 0}}>{food.name} </h3>
                                                </Card>
                                            </Link>
                                            )})}
                                        </Row>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>

        )
    }
}

export default Diets