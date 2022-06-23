import React from 'react'
import Product from '../components/Product'
import { useSite } from '../context/SiteContext'
import './Products.scss'



function Products() {

    const { products } = useSite()


  return (
    <main className='products'>
        {products.map((product) => (
            <Product key={product.id} product={product} />
        ))}
    </main>
  )
}

export default Products