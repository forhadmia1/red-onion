import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../Assets/images/logo2.png'
import auth from '../../../firebase.init';

const Header = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="lihgt">
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <img style={{ height: '30px' }} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#features" className='text-secondary me-4'>
                            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/login" className='text-secondary fw-bold me-4'>LogIn</Nav.Link>
                        {!user ?
                            <Button
                                onClick={() => navigate('/signup')}
                                className='bg-danger rounded-pill border-0 px-4'
                            > SignUp</Button>
                            :
                            <Button
                                onClick={() => signOut(auth)}
                                className='bg-danger rounded-pill border-0 px-4'
                            > SignOut</Button>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;