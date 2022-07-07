import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'
import {FaBars, FaTimes} from 'react-icons/fa'
import {MdArrowDropDown} from 'react-icons/md'

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <img src={require('./images/tam-logo.png')} alt='TAM-Logo' className='navbar-logo-img'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/tamu-lore' className='nav-links' onClick={closeMobileMenu}>
                            TAMU Lore
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    {/* <li className='nav-item'>
                        <Link to='/cybersecurity-club' className='nav-links' onClick={closeMobileMenu}>
                            Cybersecurity Club
                        </Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link to='/cybersecurity-center' className='nav-links' onClick={closeMobileMenu}>
                            Cybersecurity Center
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar