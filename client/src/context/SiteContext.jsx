import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext()


export const SiteProvider = ({children}) => {


    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [theme, setTheme] = useState(false)
    const [cartBtn, setCartBtn] = useState(false)

    const data = {
        products,
        setProducts,
        cart,
        setCart,
        theme,
        setTheme,
        cartBtn,
        setCartBtn,

    }

    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useSite = () => useContext(Context)