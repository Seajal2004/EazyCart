import React, { memo, useContext } from "react";
import { CreateContext } from "./App";

function addToCart({id,count}){
    const {addToCart} = useContext(CreateContext);
    function changeCart(){
       addToCart(id,count);
      }
    return <>
    <button onClick={changeCart} className="rounded-md border bg-red-500 py-2 px-12 text-white">Add To Cart</button>
    </>
}
export default memo(addToCart);