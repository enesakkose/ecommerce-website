import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import { commerce } from './lib/Commerce'
import { useSite } from './context/SiteContext' 



function App() {

  const { products, setProducts, cart, setCart } = useSite()
  
  

  useEffect(() => {
      const fetchProducts = async () => {
      const { data } = await commerce.products.list()

      setProducts(data)
    }
    fetchProducts()
  }, [])
 

  return (
    <div className="App">
          <Navbar/>
      <div className="container">
         <Products/>
      </div>
        
    </div>
  )
}

export default App
