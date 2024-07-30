import React, {useState,useCallback,useMemo, useContext, useEffect} from "react";
import { CreateUser } from "./UserDetail";
import { getCart, getProducts, setCarter } from "./api";
export const CreateContext = React.createContext();
function CartProvider({children}){
    const {user} = useContext(CreateUser);
    const [convertProducts,setConvertProducts] = useState([]);
    const [cart,setCart] = useState({});
    function addToCart(productId,count){
        const old = cart[productId] || 0;
        setCart({...cart,[productId]:old+count})
        if(!user){
            localStorage.setItem("added-item",JSON.stringify({...cart,[productId]:old+count}));
        }
        else{
            setCarter({...cart,[productId]:old+count});
        }
      }
      function updateCart(update_cart){
        const a = {...update_cart}
        setCart({...a});
        if(!user){
            localStorage.setItem("added-item",JSON.stringify({...a}))
        }
        else{
            setCarter({...a});
        }
      }
      const totalCount =  useMemo(function(){
        return (Object.keys(cart).reduce(function(previous,current){
        return previous + cart[current];
      },0))
    },[cart,user])
    useEffect(()=>{
        if(!user){
            const savedData = localStorage.getItem("added-item") || "{}";
            const convertData = JSON.parse(savedData);
            const keys = Object.keys(convertData);

            const join = keys.join();
            // console.log(join)
            getProducts(join).then((product)=>{
                const carts = [];
                for(let i = 0;i<product.length;i++){
                    carts.push({product: product[i],quantity: convertData[product[i].id]})
                }
                setConvertProducts(carts);
                setCart(convertData);
            })
        }
        if(user){
            getCart().then((response)=>{
                const d= {};
            for(let i = 0;i<response.length;i++){
                d[response[i].product.id] = response[i].quantity
            }
            setConvertProducts(response);
            setCart(d);
            })
            
        }
    },[user])
    return (
        <CreateContext.Provider value={{addToCart,cart,updateCart,totalCount,convertProducts}}>
          {children}
        </CreateContext.Provider>
    )
}
export default CartProvider;