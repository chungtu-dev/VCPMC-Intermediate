
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faCog, faHandHoldingUsd, faSignOutAlt, faTimes, faCalendarAlt, faMapPin, faInbox, faRocket } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../routes";
import {Logo} from '../../assets/img'
import '../../App.css'

export default (props = {}) => {
    const location = useLocation();
    const { pathname } = location;
    const [show, setShow] = useState(false);
    const showClass = show ? "show" : "";

    const onCollapse = () => setShow(!show);

    // const CollapsableNavItem = (props: any) => {
    //     const { eventKey, title, icon, children = null } = props;
    //     const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    //     return (
    //         <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
    //             <Accordion.Item eventKey={eventKey}>
    //                 <Accordion.Button as={Nav.Link} className="d-flex justify-content-between align-items-center">
    //                     <span>
    //                         <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span>
    //                         <span className="sidebar-text">{title}</span>
    //                     </span>
    //                 </Accordion.Button>
    //                 <Accordion.Body className="multi-level">
    //                     <Nav className="flex-column">
    //                         {children}
    //                     </Nav>
    //                 </Accordion.Body>
    //             </Accordion.Item>
    //         </Accordion>
    //     );
    // };

    const NavItem = (props: any) => {
        const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
        const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
        const navItemClassName = link === pathname ? "active" : "";
        // const linkProps = external ? { href: link } : { as: Link, to: link };

        return (
            <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
                <Nav.Link target={target} className={classNames}>
                    <span>
                        {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
                        {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

                        <span className="sidebar-text">{title}</span>
                    </span>
                    {badgeText ? (
                        <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
                    ) : null}
                </Nav.Link>
            </Nav.Item>
        );
    };

    return (
        <>
            <Navbar expand={false} collapseOnSelect className="navbar-theme-primary px-4 d-md-none">
                <Navbar.Brand className="me-lg-5" as={Link} to={Routes.DashboardOverview.path}>
                </Navbar.Brand>
                <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
                    <span className="navbar-toggler-icon" />
                </Navbar.Toggle>
            </Navbar>
            <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
                <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
                    <div className="sidebar-inner px-4 pt-3">
                        <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
                            <div className="d-flex align-items-center">
                                <div className="user-avatar lg-avatar me-4">
                                </div>
                                <div className="d-block">
                                    <h6>Hi, Jane</h6>
                                    <Button as={Link} variant="secondary" to={Routes.Signin.path} className="text-dark">
                                        <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                                    </Button>
                                </div>
                            </div>
                            <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                                <FontAwesomeIcon icon={faTimes} />
                            </Nav.Link>
                        </div>
                        <Nav className="flex-column pt-3 pt-md-0">

                            <Image src={Logo} className="logo-sidebar rounded-circle border-white" />

                            <NavItem title="Kho bản ghi" link={Routes.DashboardOverview.path} icon={faChartPie} />
                            <NavItem external title="Playlist" link="https://demo.themesberg.com/volt-pro-react/#/messages" target="_blank" icon={faInbox} />
                            <NavItem title="Lập lịch phát" icon={faHandHoldingUsd} link={Routes.Transactions.path} />
                            <NavItem title="Quản lý" icon={faCog} link={Routes.Settings.path} />
                            <NavItem external title="Doanh thu" link="https://demo.themesberg.com/volt-pro-react/#/calendar" target="_blank" icon={faCalendarAlt} />
                            <NavItem external title="Cài đặt" link="https://demo.themesberg.com/volt-pro-react/#/map" target="_blank" icon={faMapPin} />

                            <NavItem external title="Hỗ trợ" link="https://demo.themesberg.com/volt-pro-react/#/plugins/datatable" target="_blank" icon={faChartPie} />
                            {/* 
              <CollapsableNavItem eventKey="tables/" title="Tables" icon={faTable}>
                <NavItem title="Bootstrap Table" link={Routes.BootstrapTables.path} />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="examples/" title="Page Examples" icon={faFileAlt}>
                <NavItem title="Sign In" link={Routes.Signin.path} />
                <NavItem title="Sign Up" link={Routes.Signup.path} />
                <NavItem title="Forgot password" link={Routes.ForgotPassword.path} />
                <NavItem title="Reset password" link={Routes.ResetPassword.path} />
                <NavItem title="Lock" link={Routes.Lock.path} />
                <NavItem title="404 Not Found" link={Routes.NotFound.path} />
                <NavItem title="500 Server Error" link={Routes.ServerError.path} />
              </CollapsableNavItem> */}
                        </Nav>
                    </div>
                </SimpleBar>
            </CSSTransition>
        </>
    );
};
