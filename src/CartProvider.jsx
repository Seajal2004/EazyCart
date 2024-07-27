import React, {useState,useCallback,useMemo} from "react";
export const CreateContext = React.createContext();
function CartProvider({children}){
    const savedData = localStorage.getItem("added-item") || "{}";
    const convertData = JSON.parse(savedData);
    const [cart,setCart] = useState(convertData);
    function addToCart(productId,count){
        const old = cart[productId] || 0;
        setCart({...cart,[productId]:old+count})
        localStorage.setItem("added-item",JSON.stringify({...cart,[productId]:old+count}))
      }
      const updateCart = useCallback(function (update_cart){
        const a = {...update_cart}
        setCart({...a});
        localStorage.setItem("added-item",JSON.stringify({...a}))
      },[cart])
      const totalCount =  useMemo(function(){
        return (Object.keys(cart).reduce(function(previous,current){
        return previous + cart[current];
      },0))
    },[cart])
    return (
        <CreateContext.Provider value={{addToCart,cart,updateCart,totalCount}}>
          {children}
        </CreateContext.Provider>
    )
}
export default CartProvider;