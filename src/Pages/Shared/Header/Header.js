import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../Assets/images/logo2.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="lihgt">
            <Container>
                <Navbar.Brand href="#home">
                    <img style={{ height: '30px' }} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#features" className='text-secondary me-4'>
                            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                        </Nav.Link>
                        <Nav.Link href="#features" className='text-secondary fw-bold me-4'>LogIn</Nav.Link>
                        <Button className='bg-danger rounded-pill border-0 px-4'>SignUp</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;