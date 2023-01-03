import React, { useState, useEffect } from 'react'
import { Col, Row } from '@themesberg/react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom'
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { auth } from '../../firebase/config'
import { Routes } from '../util/routes';
import '../../App.css'

const Topnav = () => {

    const [user, loading] = useAuthState(auth)
    const [userData, setUserData] = useState({} as any)
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

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate('/');
        fetchingUserData();
    }, [user, loading])

    return (
        <>
            <Row className='header-nav'>
                <Col md={12} className='header-nav_inside'><span className='header-nav_text'>
                    <div className='header-nav_inside-info'>
                        <a href={Routes.Profile.path}><img src={userData.imgProfile} alt="info image" /></a>
                        <span>
                            <Link to={Routes.Profile.path}>
                                <span>{userData.firstName} {userData.lastName}</span>
                                <span>{userData.role}</span>
                            </Link>
                        </span>
                    </div>
                </span></Col>
            </Row>
        </>
    )
}

export default Topnav