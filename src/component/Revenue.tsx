import React from 'react'
import Sidebar from './common/Sidebar';
import Topnav from './common/Topnav';
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import '../App.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        month: 'Tháng 1',
        Listened: 4000
    },
    {
        month: "Tháng 2",
        Listened: 1000,
    },
    {
        month: "Tháng 3",
        Listened: 4000,
    },
    {
        month: "Tháng 4",
        Listened: 800,
    },
    {
        month: "Tháng 5",
        Listened: 1500,
    },
    {
        month: 'Tháng 6',
        Listened: 4000
    },
    {
        month: "Tháng 7",
        Listened: 1000,
    },
    {
        month: "Tháng 8",
        Listened: 4000,
    },
    {
        month: "Tháng 9",
        Listened: 800,
    },
    {
        month: "Tháng 10",
        Listened: 1500,
    },
    {
        month: "Tháng 11",
        Listened: 800,
    },
    {
        month: "Tháng 12",
        Listened: 1500,
    },
];

const Revenue = () => {
    return (
        <>
            <Row>
                <Col md={2}><Sidebar /></Col>
                <Col md={10}>
                    <Row className='header-nav'>
                        <Topnav />
                    </Row>
                    <h2 className="r-title">Báo cáo doanh thu</h2>
                    <Container className='r-container-items'>
                        <Row>
                            <Col md={1} />
                            <Col md={2} className="r-container-item">
                                <div>
                                    <h5 className='r-container-item_title'>Tổng số bài hát</h5>
                                    <h4 className='r-container-item_subtitle'>100</h4>
                                </div>
                            </Col>
                            <Col md={2} className="r-container-item">
                                <div>
                                    <h5 className='r-container-item_title'>Tổng số lượt phát</h5>
                                    <h4 className='r-container-item_subtitle'>32.000.000</h4>
                                </div>
                            </Col>
                            <Col md={2} className="r-container-item">
                                <div>
                                    <h5 className='r-container-item_title'>Doanh thu trên lượt phát</h5>
                                    <h4 className='r-container-item_subtitle'>1.564.745.000đ</h4>
                                </div>
                            </Col>
                            <Col md={2} className="r-container-item">
                                <div>
                                    <h5 className='r-container-item_title'>Doanh thu chưa phân phối</h5>
                                    <h4 className='r-container-item_subtitle'>1.564.745.000đ</h4>
                                </div>
                            </Col>
                            <Col md={2} className="r-container-item">
                                <div>
                                    <h5 className='r-container-item_title'>Hành chính phí</h5>
                                    <h4 className='r-container-item_subtitle'>3.253.000đ</h4>
                                </div>
                            </Col>
                            <Col md={1} />
                        </Row>
                    </Container>
                    <Container className='r-container-chart'>
                        <ResponsiveContainer width="100%" aspect={3}>
                            <LineChart
                                width={900}
                                height={300}
                                data={data}
                                margin={{
                                    top: 15,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <XAxis dataKey="month" tick={{ fill: "#fff" }} />
                                <YAxis tick={{ fill: "#fff" }} />
                                <Tooltip contentStyle={{ backgroundColor: "#FF7506", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false} />
                                <Line type="monotone" dataKey="Listened" stroke="#FF7506" strokeWidth="5" dot={{ fill: "#2e4355", stroke: "#FF7506", strokeWidth: 2, r: 5 }} activeDot={{ fill: "#2e4355", stroke: "#FF7506", strokeWidth: 5, r: 10 }} />

                            </LineChart>
                        </ResponsiveContainer>
                    </Container>
                </Col>
            </Row>
        </>
    )
}

export default Revenue