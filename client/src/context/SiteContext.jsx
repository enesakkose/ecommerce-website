import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext()


export const SiteProvider = ({children}) => {


    const [products, setProducts] = useState([])

    const data = {
        products,
        setProducts
    }

    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useSite = () => useContext(Context)