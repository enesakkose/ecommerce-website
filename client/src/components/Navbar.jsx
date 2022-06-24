import React from 'react'
import { BsBasket3Fill } from 'react-icons/bs'
import Logo from '../assets/images/1024px-Poundit_e-commerce_website_Logo.svg (1).png'
import ThemeButton from './ThemeButton'
import {useSite} from '../context/SiteContext'
import './Navbar.scss'

function Navbar() {

    const { cart, cartBtn, setCartBtn } = useSite()

  return (
    <nav className='navbar'>
        <button className='navbar__logo'>
            <img src={Logo} alt="" />
            <h2>eCOMMERCE</h2>
        </button>
        
            <ThemeButton/>
        <button onClick={() => setCartBtn(!cartBtn)} className="navbar__basket">
            <BsBasket3Fill fontSize={30} />
            <div className="navbar__basketLength">
                {cart.length > 0 && cart.length}
            </div>
        </button>
    </nav>
  )
}

export default Navbar