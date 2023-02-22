import React, { useState, useEffect } from 'react'
import Sidebar from './common/Sidebar'
import Topnav from './common/Topnav';
import { Col, Row, Container, Card, Button } from '@themesberg/react-bootstrap';
import '../App.css'

const Storage = () => {
    const [dataStore, setDataStore] = useState([])
    // const [musicAPI, setMusicAPI] = useState([])

    const fetchingData = () => {
        fetch(`https://fakestoreapi.com/products`)
            .then((response) => response.json())
            .then((response: any) => {
                console.log('hele', response);
                setDataStore(response)
            })
    }

    // const logAPI=()=>{
    //     fetch('http://localhost:4400/episodes')
    //     .then((response)=>response.json())
    //     .then((response:any) => {
    //         console.log(response);
    //         setMusicAPI(response)
    //     })
    // }

    useEffect(() => {
        fetchingData()
    }, [])

    return (
        <>
            <Row>
                <Col md={2}><Sidebar /></Col>
                <Col md={10}>
                    <Row className='header-nav'>
                        <Topnav />
                    </Row>

                    <Container className='storage_content'>
                        {
                            dataStore.map((data: any, index) => {
                                return (
                                    <Row key={index} className="storage_content-container">
                                        <Card className="storage_content-card">
                                            <Card.Img className='storage_content-card-img' variant="top" src={data.image} />
                                            <Card.Body className="storage_content-card-body">
                                                <Card.Title className="storage_content-card-title">{data.title}</Card.Title>
                                                <Card.Text className="storage_content-card-category">
                                                    {data.category}
                                                </Card.Text>
                                                <div className="storage_content-card-rating">
                                                    <span>{data.rating.rate}</span>
                                                    &emsp;
                                                    <span>{data.rating.count}</span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Row>
                                )
                            })
                        }
                    </Container>

                </Col>
            </Row>
        </>
    )
}

export default Storage