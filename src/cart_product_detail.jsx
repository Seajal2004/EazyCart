import React, {useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { getProduct } from "./api";
function cart_product_detail({cart,quantity}){
    return(
       <>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-evenly mr-4 sm:mr-0 sm:py-2"> 
            <img className="border max-w-16 max-h-16" src={cart.images[0]} />
            <h2 className="self-center bold text-xl text-orange-600">{cart.title}</h2>
            <h2 className="self-center bold text-xl">{cart.price}</h2>
            <p className="border px-6 max-h-10 self-center py-2">{quantity}</p>
            <h2 className="self-center">${cart.price*quantity}</h2>
        </div>
        <hr className=""/>
        </>
    )
}
export default cart_product_detail;