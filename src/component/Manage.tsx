import React from 'react'
import Sidebar from './common/Sidebar'
import Topnav from './common/Topnav';
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import Table from './common/TableManage'
import TableManage2 from './common/TableManage2'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../App.css'

const Manage = () => {
    return (
        <>
            <Row>
                <Col md={2}><Sidebar /></Col>
                <Col md={10}>
                    <Row className='header-nav'>
                        <Topnav />
                    </Row>
                    <Container className="tab-setting">
                        <Tabs
                            defaultActiveKey="home"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Hợp đồng uỷ quyền">
                                <Container className="manage-data-table">
                                    <Table />
                                </Container>
                            </Tab>
                            <Tab eventKey="profile" title="Hợp đồng khai thác">
                                <Container className="manage-tab-table2">
                                    <TableManage2 />
                                </Container>
                            </Tab>
                        </Tabs>
                    </Container>
                </Col>
            </Row>
        </>
    )
}

export default Manage