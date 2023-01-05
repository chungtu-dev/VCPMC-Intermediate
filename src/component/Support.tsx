import React from 'react'
import Sidebar from './common/Sidebar';
import Topnav from './common/Topnav';
import { Col, Row, Card, Form, Button } from '@themesberg/react-bootstrap';
import '../App.css'

const Support = () => {
    return (
        <>
            <Row>
                <Col md={2}><Sidebar /></Col>
                <Col md={10}>
                    <Row className='header-nav'>
                        <Topnav />
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Support