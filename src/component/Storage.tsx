import React from 'react'
import Sidebar from './common/Sidebar'
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import TableStorage from './common/TableStorage'
import '../App.css'

const Storage = () => {
    return (
        <>
            <Row>
                <Col md={2}><Sidebar /></Col>
                <Col md={10}>
                    <Container className="storage-data-table">
                        <TableStorage />
                    </Container>
                </Col>
            </Row>
        </>
    )
}

export default Storage