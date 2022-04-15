import React from 'react';
import logo from '../../../Assets/images/logo.png'

const Footer = () => {
    return (
        <footer className='bg-dark'>
            <div className="container mt-5 py-4">
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
                <div className="row row-cols-2">
                    <div className="col">
                        <p>Copyright &copy; forhad</p>
                    </div>
                    <div className="col">

                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;