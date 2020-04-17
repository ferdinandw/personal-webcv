import React, { Component } from 'react';
import {Container, Navbar,Nav, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './navbar.css'
export default class Navbar1 extends Component {
    render() {
        return (
            <Container fluid className="header sticky-top">
                <Row className="justify-content-md-center">
                    <Nav>
                        <Link className="nav-link" to="">Home</Link>
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        <Link className="nav-link" to="/article">Article</Link>
                        <Link className="nav-link" to="/hire">Hire</Link>
                    </Nav>
                </Row>
            </Container>
        )
    }
}
