import React from 'react'
import { BiBasket } from 'react-icons/bi'
import { useSite } from '../context/SiteContext'
import './Product.scss'


function Product({product}) {
  
  const { cart, setCart } = useSite()

  const addToBasket = () => {

    const checkBasket = cart.find((item) => item.product.id === product.id)

    if(checkBasket){
      checkBasket.quantity += 1
      setCart([...cart.filter(item => item.product.id !== product.id), checkBasket])
    } else{
        setCart([...cart, {
         product,
        quantity: 1
        
      }])
    }
    
  }
  console.log(cart)
  
  
  return (
    <div className='productCard'>
        <img src={product.image.url} alt="image" className="productCard__img" />
        <div className="productCard__info">
          <div className="productCard__infoTop">
            <h3>{product.name}</h3>
            <h4>$ {product.price.raw}</h4>
          </div>
          <div className="productCard__infoBottom">
            <h5>{product.description.slice(10,-11)}</h5>
            <BiBasket onClick={addToBasket} className='basket' fontSize={24}/>
          </div>
          
        </div>
    </div>
  )
}

export default Product