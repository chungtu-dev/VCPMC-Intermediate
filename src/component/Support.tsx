import React, { useRef } from 'react'
import Sidebar from './common/Sidebar';
import Topnav from './common/Topnav';
import { Col, Row, Card, Form, Button, Container } from '@themesberg/react-bootstrap';
import '../App.css'
import bg from '../assets/support-bg.png'
import cloud from '../assets/cloud.png'
import window from '../assets/window.png'
import android from '../assets/android.png'

const Support = () => {
    return (
        <>
            <Row>
                <Col md={2}><Sidebar /></Col>
                <Col md={10}>
                    <img src={bg} alt="" className='setting-img-bg' style={{ position: 'absolute', height: '400px' }} />
                    <Row className='header-nav'>
                        <Topnav />
                    </Row>
                    <Container className='setting-container'>
                        <h1 className='setting-title-text'>ứng dụng <span style={{ color: '#FF7506' }}>VCPMC</span></h1>
                        <span className='line'>---------------------------</span>
                        <p className='setting-choose-title'>Bạn vui lòng chọn <span>nền tảng</span> phù hợp để trải nghiệm</p>
                        <Row className='setting-suppport-tool'>
                            <Col lg='3' className='setting-support-item'>
                                <img src={cloud} alt="" className='setting-support-item_img' />
                                <button className='setting-support-item_btn'>Tool Upload</button>
                            </Col>
                            <Col lg='3' className='setting-support-item'>
                                <img src={window} alt="" className='setting-support-item_img' />
                                <button className='setting-support-item_btn'>Tải app window</button>
                            </Col>
                            <Col lg='3' className='setting-support-item'>
                                <img src={android} alt="" className='setting-support-item_img' />
                                <button className='setting-support-item_btn'>Tải app android</button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </>
    )
}

export default Support