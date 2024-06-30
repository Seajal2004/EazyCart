import React, {useEffect, useState } from "react";
import { getProduct } from "./api";
function cart_product_detail({id, quantity}){
    const [product,set] = useState();
    useEffect(function(){
        getProduct(id).then(function(data){
            set(data)
            })
    },[])
    if(!product){
        return <></>
    }
 
    return(
       <>
        <div className="flex justify-evenly"> 
            <img className="border max-w-16" src={product.images[0]} />
            <h2 className="self-center bold text-xl text-orange-600">{product.title}</h2>
            <h2 className="self-center bold text-xl">{product.price}</h2>
            <p className="border px-6 max-h-10 self-center py-2">{quantity}</p>
            <h2 className="self-center">${product.price*quantity}</h2>
        </div>
        <hr />
        </>
    )
}
export default cart_product_detail;