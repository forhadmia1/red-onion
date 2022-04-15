import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo2.png'

const Signup = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='form-container'>
                <div className="d-flex justify-content-center w-100 my-5">
                    <img height={60} src={logo} alt="" />
                </div>
                <form className='form'>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input type="password" placeholder='Confrim-password' />
                    <Button className='w-100 mt-2 py-3 btn-danger' type='submit'>Sign Up</Button>
                </form>
                <p className='text-center mt-4'><Link
                    className='text-decoration-none text-danger'
                    to={'/login'}
                >Already Have An Account?</Link></p>
            </div>
        </div>
    );
};

export default Signup;