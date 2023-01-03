import React from 'react'
import Sidebar from './common/Sidebar'
import Topnav from './common/Topnav';
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import TablePlaylist from './common/TablePlaylist';
import '../App.css'

const Playlist = () => {
    return (
        <>
            <Row>
                <Col md={2}><Sidebar /></Col>
                <Col md={10}>
                    <Row className='header-nav'>
                        <Topnav />
                    </Row>
                    <Container className="tab-playlist">
                        <TablePlaylist />
                    </Container>
                </Col>
            </Row>
        </>
    )
}

export default Playlist