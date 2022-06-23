import React from 'react'
import { BsBasket3Fill } from 'react-icons/bs'
import Logo from '../assets/images/1024px-Poundit_e-commerce_website_Logo.svg (1).png'
import {useSite} from '../context/SiteContext'
import './Navbar.scss'

function Navbar() {

    const { cart } = useSite()

  return (
    <nav className='navbar'>
        <button className='navbar__logo'>
            <img src={Logo} alt="" />
            <h2>eCOMMERCE</h2>
        </button>

        <div className="navbar__basket">
            <BsBasket3Fill fontSize={30} />
            <div className="navbar__basketLength">
                {cart.length > 0 && cart.length}
            </div>
        </div>
    </nav>
  )
}

export default Navbar