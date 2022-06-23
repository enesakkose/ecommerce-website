import React from 'react'
import { BsBasket3Fill } from 'react-icons/bs'
import Logo from '../assets/images/1024px-Poundit_e-commerce_website_Logo.svg (1).png'
import './Navbar.scss'

function Navbar() {
  return (
    <nav className='navbar'>
        <button className='navbar__logo'>
            <img src={Logo} alt="" />
            <h2>eCOMMERCE</h2>
        </button>

        <div className="navbar__basket">
            <BsBasket3Fill fontSize={30} />
        </div>
    </nav>
  )
}

export default Navbar