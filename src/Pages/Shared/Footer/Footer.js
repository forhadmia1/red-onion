import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/images/logo.png'

const Footer = () => {
    return (
        <footer className='bg-dark'>
            <div className="container mt-5 py-5">
                <div className='row'>
                    <div className="col-md-6">
                        <img height={50} src={logo} alt="" />
                    </div>
                    <div className="col-md-3">
                        <ul className='list-unstyled'>
                            <li><a className='text-white text-decoration-none' href="#home">About Online food</a></li>
                            <li><a className='text-white text-decoration-none' href="#home">Read our blog</a></li>
                            <li><a className='text-white text-decoration-none' href="#home">Signup to deliver</a></li>
                            <li><a className='text-white text-decoration-none' href="#home">Add your resturant</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className='list-unstyled'>
                            <li><a className='text-white text-decoration-none' href="#home">About Online food</a></li>
                            <li><a className='text-white text-decoration-none' href="#home">Read our blog</a></li>
                            <li><a className='text-white text-decoration-none' href="#home">Signup to deliver</a></li>
                            <li><a className='text-white text-decoration-none' href="#home">Add your resturant</a></li>
                        </ul>
                    </div>

                </div>
                <div className="row row-cols-2 mt-5">
                    <div className="col">
                        <p className='text-secondary'>Copyright &copy; forhad</p>
                    </div>
                    <div className="col">
                        <ul className='d-flex gap-4 justify-content-center'>
                            <Link className=' text-decoration-none text-white' to={''} >Privacy Policy.</Link>
                            <Link className=' text-decoration-none text-white' to={''}>Terms of use</Link>
                            <Link className=' text-decoration-none text-white' to={''}>Pricing</Link>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;