import React from 'react'
import Sidebar from './common/Sidebar'
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import Table from './common/Table'
import '../App.css'

const Manage = () => {
    return (
        <>
            <Row>
                <Col md={2}><Sidebar /></Col>
                <Col md={10}>
                    <Container className="manage-data-table">
                        <Table />
                    </Container>
                </Col>
            </Row>
        </>
    )
}

export default Manage