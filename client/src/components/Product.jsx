import React from 'react'
import { BiBasket } from 'react-icons/bi'
import './Product.scss'


function Product({product}) {
  return (
    <div className='productCard'>
        <img src={product.image.url} alt="image" className="productCard__img" />
        <div className="productCard__info">
          <div className="productCard__infoTop">
            <h3>{product.name}</h3>
            <h4>{product.price.raw}</h4>
          </div>
          <div className="productCard__infoBottom">
            <h5>{product.description.slice(10,-11)}</h5>
            <BiBasket className='basket' fontSize={24}/>
          </div>
          
        </div>
    </div>
  )
}

export default Product