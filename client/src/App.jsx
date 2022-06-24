import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import { commerce } from './lib/Commerce'
import { useSite } from './context/SiteContext' 
import Cart from './components/Cart'



function App() {

  const { products, setProducts, cart, setCart, theme } = useSite()
  
  

  useEffect(() => {
      const fetchProducts = async () => {
      const { data } = await commerce.products.list()

      setProducts(data)
    }
    fetchProducts()
  }, [])
 

  return (
    <div className={`app ${theme ? 'dark' : ''}`}>
          <Navbar/>
      <div className="container">
         <Products/>
         <Cart/>
      </div>
        
    </div>
  )
}

export default App
