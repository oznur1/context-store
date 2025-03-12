
import api from "../api"
import { useEffect,useState,createContext } from "react";

const ProductContext =createContext();

const ProductProvider=({children})=>{
    const [products,setProducts]=useState([]);
    const [selectedCategory,setSelectedCategory]=useState("all");

    useEffect(() => {
        // İstek atılacak url'i belirle
        const url =
          selectedCategory === "all"
            ? "/products"
            : `/products/category/${selectedCategory}`;
    
        // Api'a istek at
        api.get(url).then((res) => setProducts(res.data));
      }, [selectedCategory]);
    
    
    
    return(
        <ProductContext.Provider value={{products,setProducts,setSelectedCategory,selectedCategory}}>
            {children}
        </ProductContext.Provider>
    )
}
export {ProductProvider, ProductContext}