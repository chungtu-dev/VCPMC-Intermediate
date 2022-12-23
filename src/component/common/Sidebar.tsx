
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactCard, faFile, faSignOutAlt, faDollarSign, faTimes, faCalendarAlt, faInbox, faBoxesStacked, faCog } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Navbar, Container } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../util/routes";
import { Logo } from '../../assets/img'
import '../../App.css'

export default (props = {}) => {
    const location = useLocation();
    const { pathname } = location;
    const [show, setShow] = useState(false);
    const showClass = show ? "show" : "";

    const onCollapse = () => setShow(!show);

    return (
        <>
            <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
                <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
                    <div className="sidebar-inner px-4 pt-3">
                        <Nav className="flex-column pt-3 pt-md-0">

                            <Image src={Logo} className="logo-sidebar rounded-circle border-white" />

                            <Container className="sidebar-item-container">

                                <Link to={Routes.Storage.path} className="navbar-item">
                                    <FontAwesomeIcon className="navbar-item_icon" icon={faBoxesStacked} /><span>Kho bản ghi</span>
                                </Link>
                                <Link to={Routes.Playlist.path} className="navbar-item">
                                    <FontAwesomeIcon className="navbar-item_icon" icon={faInbox} /><span>Playlist</span>
                                </Link>
                                <Link to={Routes.SetCalendar.path} className="navbar-item">
                                    <FontAwesomeIcon className="navbar-item_icon" icon={faCalendarAlt} /><span>Lập lịch phát</span>
                                </Link>
                                <Link to={Routes.Manage.path} className="navbar-item">
                                    <FontAwesomeIcon className="navbar-item_icon" icon={faFile} /><span>Quản lý</span>
                                </Link>
                                <Link to={Routes.Revenue.path} className="navbar-item">
                                    <FontAwesomeIcon className="navbar-item_icon" icon={faDollarSign} /><span>Doanh thu</span>
                                </Link>
                                <Link to={Routes.Setting.path} className="navbar-item">
                                    <FontAwesomeIcon className="navbar-item_icon" icon={faCog} /><span>Cài đặt</span>
                                </Link>
                                <Link to={Routes.Support.path} className="navbar-item">
                                    <FontAwesomeIcon className="navbar-item_icon" icon={faContactCard} /><span>Hỗ trợ</span>
                                </Link>

                            </Container>

                        </Nav>
                    </div>
                </SimpleBar>
            </CSSTransition>
        </>
    );
};
