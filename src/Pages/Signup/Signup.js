import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/images/logo2.png'
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const [validationError, setValidationError] = useState('');
    const createUser = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confrimPassword = e.target.confrimPassword.value;

        if (password !== confrimPassword) {
            setValidationError("password didnt match!!")
            return;
        }
        const emailregex = /\S+@\S+\.\S+/;
        if (!emailregex.test(email)) {
            setValidationError("invalid email")
            return;
        }
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
    }

    if (user) {
        navigate('/')
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='form-container'>
                <div className="d-flex justify-content-center w-100 my-5">
                    <img height={60} src={logo} alt="" />
                </div>
                <form className='form' onSubmit={createUser}>
                    <input type="text" name="name" placeholder='Name' required />
                    <input type="email" name="email" placeholder='Email' required />
                    <input type="password" name="password" placeholder='Password' required />
                    <input type="password" name="confrimPassword" placeholder='Confrim-password' required />
                    <p className='text-center text-danger'>{validationError}</p>
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