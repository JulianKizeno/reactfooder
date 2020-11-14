import React, { Component } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveRadar } from '@nivo/radar'
import { Container } from 'react-bootstrap'

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import FoodsService from '../../../service/foods'

class FoodStats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            food : []
        }
        this.foodsService = new FoodsService()
    }

    bringFoods = () => {
        this.foodsService.getFoods()
            .then(response => {
                this.setState({ food: response.data })
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () =>{
        this.bringFoods()
    }

    render(){
        const data = this.state.food.slice(0, 6)
        
        const properties = {fat: 'Grasa', protein: 'Proteina', carbs: 'Carbohidratos'}
        const foodNames = data.map(f => f.name)

        const nutritionValues = Object.keys(properties).map((propertyKey) => {

            const newData = {
                property: properties[propertyKey]
            }

            data.map(food => {
                return newData[food.name] = food[propertyKey]
            })

            return newData
        })


        const FoodPrices = data.map((food) => {
            const newData = {
                "id": food.name, 
                "label": food.name, 
                "value": food.price
            }
            return newData
        })

        const nutritionalComparison = data.map((foods)=>{
            const newData = {
                "foodNames": foods.name, 
                "Grasa": foods.fat, 
                "Carbohidrátos": foods.carbs, 
                "Proteína": foods.protein
            }
            return newData
        })
        
        return(
            <Container className='backg-stats'>
                <h1 style={{marginBottom: '50px'}}>Estadísticas</h1>
                <h3 style={{position: 'absolute'}}>Aportes Nutricionales</h3>
                <Row style={{height : '300px', marginBottom: '100px', backgroundColor: 'rgba(255, 255, 255, 0.6)'}}>
                    <ResponsiveBar
                    keys={foodNames}
                    data={nutritionValues}
                    indexBy='property'
                    margin={{ top: 50, right: 140, bottom: 50, left: 60 }}
                    padding={0.3}
                    colors={{ scheme: 'set3' }}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: '#38bcb2',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: '#eed312',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'Aguacate'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'Espárragos'
                            },
                            id: 'lines'
                        }
                    ]}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Valor Nutricional',
                        legendPosition: 'middle',
                        legendOffset: 46
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Aporte',
                        legendPosition: 'middle',
                        legendOffset: -50
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 5,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    />
                </Row>

                <Row style={{height : '300px', backgroundColor: 'rgba(255, 255, 255, 0.6)'}}>
                    <Col md={7}>
                    <h3 style={{position: 'absolute'}}>Comparativa de precios</h3>
                        <ResponsivePie
                            data={FoodPrices}
                            margin={{ top: 65, right: 0, bottom: 60, left: 0 }}
                            innerRadius={0.15}
                            padAngle={45}
                            colors={{ scheme: 'accent' }}
                            borderWidth={1}
                            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                            radialLabelsLinkDiagonalLength={5}
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
                            legends={[
                                {
                                    anchor: 'left',
                                    direction: 'column',
                                    translateY: 50,
                                    itemsSpacing: 10,
                                    itemWidth: 100,
                                    itemHeight: 10,
                                    itemTextColor: '#999',
                                    symbolSize: 18,
                                    symbolShape: 'circle',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#000'
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                    </Col>

                    <Col md={5}>
                    <h3 style={{position: 'absolute'}}>Comparativa Nutricional</h3>
                        <ResponsiveRadar
                            data={nutritionalComparison}
                            keys={['Grasa', 'Carbohidrátos','Proteína']}
                            indexBy= "foodNames"
                            maxValue="auto"
                            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                            curve="linearClosed"
                            borderColor="inherit"
                            gridLevels={5}
                            gridShape="circular"
                            gridLabelOffset={20}
                            enableDots={true}
                            dotSize={5}
                            dotColor="white"
                            dotBorderWidth={2}
                            dotBorderColor={{ from: 'color' }}
                            enableDotLabel={true}
                            dotLabel="value"
                            dotLabelYOffset={-12}
                            colors={{ scheme: 'category10' }}
                            fillOpacity={0.55}
                            blendMode="multiply"
                            animate={true}
                            motionStiffness={90}
                            motionDamping={15}
                            isInteractive={true}
                            legends={[
                                {
                                    anchor: 'bottom-left',
                                    direction: 'column',
                                    translateX: -50,
                                    translateY: -70,
                                    itemWidth: 80,
                                    itemHeight: 20,
                                    itemTextColor: '#999',
                                    symbolSize: 12,
                                    symbolShape: 'circle',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#000'
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default FoodStats

