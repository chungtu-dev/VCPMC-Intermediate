import React from 'react'
import Sidebar from './common/Sidebar'
import Topnav from './common/Topnav';
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import TableStorage from './common/TableStorage'
import '../App.css'

const SetCalendar = () => {
    return (
        <>
            <Row>
                <Col md={2}><Sidebar /></Col>
                <Col md={10}>
                    <Row className='header-nav'>
                        <Topnav />
                    </Row>
                    <Container>
                        <TableStorage />
                    </Container>
                </Col>
            </Row>
        </>
    )
}

export default SetCalendar