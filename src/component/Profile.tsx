
import React, { useState, useEffect } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, logout } from '../firebase/config'
import { collection, getFirestore, getDocs } from "firebase/firestore";
import Sidebar from './common/Sidebar';
import Topnav from './common/Topnav';

// import moment from "moment-timezone";
// import Datetime from "react-datetime";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
// import {Logo} from '../assets/img'

import { Col, Row, Card, Form, Button } from '@themesberg/react-bootstrap';
import '../App.css'

const Profile = () => {
    const [user, loading] = useAuthState(auth)
    const [userData, setUserData] = useState({} as any)
    // const [name, setName] = useState("" as any);
    // const [birthday, setBirthday] = useState("");

    const navigate = useNavigate()

    const db = getFirestore()
    const colRef = collection(db, 'users')

    const fetchingUserData = async () => {
        const docSnap = await getDocs(colRef)
        docSnap.forEach(doc => {
            setUserData(doc.data().user)
            console.log('user data', doc.data().user);
        })
    }

    // const fetchUserName = async () => {
    //     try {
    //       const data = query(collection(db, "users"), where("uid", "==", user?.uid));
    //       console.log('data', data);
    //     } catch (err) {
    //       console.error(err);
    //       alert("An error occured while fetching user data");
    //     }
    //   };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate('/');
        fetchingUserData();
        // fetchUserName()
    }, [user, loading])

    return (
        <>
            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>

                <Col md={10}>
                    <Row className='header-nav'>
                        <Topnav/>
                    </Row>

                    <Row>
                        <Col md={3}>
                            <h5 className="profile-basic-info">Th??ng tin c?? b???n</h5>
                            <img src={userData.imgProfile} alt="" className='img-profile' />
                            <span className='user-profile-name'>{userData.firstName} {userData.lastName}</span>
                        </Col>

                        <Col md={7}>
                            <Card className="card-profile mb-4">
                                <Card.Body>
                                    <Form>
                                        <Row>
                                            <Col md={6} className="mb-3">
                                                <Form.Group id="firstName">
                                                    <Form.Label>H???</Form.Label>
                                                    <Form.Control required type="text" placeholder={userData.firstName} disabled />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6} className="mb-3">
                                                <Form.Group id="lastName">
                                                    <Form.Label>T??n</Form.Label>
                                                    <Form.Control required type="text" placeholder={userData.lastName} disabled />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6} className="mb-3">
                                                <Form.Group id="emal">
                                                    <Form.Label>Ng??y sinh</Form.Label>
                                                    <Form.Control required type="email" placeholder={userData.dateOfBirth} disabled />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6} className="mb-3">
                                                <Form.Group id="emal">
                                                    <Form.Label>S??? ??i???n tho???i</Form.Label>
                                                    <Form.Control required type="email" placeholder={userData.phone} disabled />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12} className="mb-3">
                                                <Form.Group id="emal">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control required type="email" placeholder={userData.email} disabled />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md={12} className="mb-3">
                                                <Form.Group id="emal">
                                                    <Form.Label>T??n ????ng nh???p</Form.Label>
                                                    <Form.Control required type="email" placeholder={userData.loginName} disabled />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md={6} className="mb-3">
                                                <Form.Group id="emal">
                                                    <Form.Label>Ph??n quy???n</Form.Label>
                                                    <Form.Control required type="email" placeholder={userData.role} disabled />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Form>
                                    <Button onClick={logout}>????ng xu???t</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </>
    )
}

export default Profile