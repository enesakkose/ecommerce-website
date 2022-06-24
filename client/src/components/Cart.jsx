import React from 'react'
import { useSite } from '../context/SiteContext'
import {AiOutlineClose} from 'react-icons/ai'
import EmptyCart from './EmptyCart'
import './Cart.scss'


function Cart() {

    const { cartBtn, setCartBtn, cart } = useSite()
    console.log(cart)
  return (
    <>
        {cartBtn && (
            <div className={`cart ${cartBtn ?  'active' : ''}`}>
                <button onClick={() => setCartBtn(false)} className="cart__closeBtn">
                    <AiOutlineClose fontSize={30}/>
                </button>

                  <h1>Your Shopping List</h1>

                  {cart.length === 0 ? (
                    <EmptyCart/>
                  ): <>
                    <div className="cart__list">
                        {cart.map((item) => (
                        <div key={item.product.key} className="cart__list__item">
                            <h3>{item.product.name}</h3>
                            <img src={item.product.image.url} alt="" />
                            <div className="cart__list__item__quantity">
                                <h3>$ {item.product.price.raw}</h3> 
                                <div className="cart__list__item__quantity__btn">
                                    <button>-</button>
                                    <span>{item.quantity}</span>
                                    <button>+</button>
                                </div>
                                <button className='cart__list__item__quantity__removeBtn'>Remove</button>
                            </div>
                           

                        </div>
                        ))}
                </div>
                  </>}
                
            </div>
        )}
    </>
    
  )
}

export default Cart