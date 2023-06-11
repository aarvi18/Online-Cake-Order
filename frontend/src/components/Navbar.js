import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../img/logo.jpg'
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav>
                <div>
                <img src={Logo} />
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="/" className='list'>Home</Link>
                            <Link to="Our_Products" className='list'>Our Products</Link>
                            <Link to="About_Us" className='list'>About Us</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Navbar