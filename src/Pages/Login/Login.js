import React from 'react';
import './Login.css'
import logo from '../../Assets/images/logo2.png'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const signinSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate('/')
    }
    let loginerror;
    if (error) {
        loginerror = (error.code.split('/')[1])
    }
    return (
        <div className='d-flex justify-content-center'>
            <div className='form-container'>
                <div className="d-flex justify-content-center w-100 my-5">
                    <img height={60} src={logo} alt="" />
                </div>
                <form className='form' onSubmit={signinSubmit}>
                    <input type="email" name="email" placeholder='Email' />
                    <input type="password" name="password" placeholder='Password' />
                    <p className='text-center text-danger'>{loginerror}</p>
                    <Button className='w-100 mt-2 py-3 btn-danger' type='submit'>Sign In</Button>
                </form>
                <p className='text-center mt-4'><Link
                    className='text-decoration-none text-danger'
                    to={'/signup'}
                >Create an account?</Link></p>
            </div>
        </div>
    );
};

export default Login;