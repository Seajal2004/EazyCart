import React, { useState, useEffect, useCallback } from "react";
import { Link} from 'react-router-dom';
import Cart from "./cart_product_detail";
import { getProduct } from "./api";
import { ImSpinner6 } from "react-icons/im";
import SelfModifiedInput from "./selfModifiedInput";
import NormalButton from "./NormalButton";
function cart({cart, recent_cart}){
    const [cart_product,setCart] = useState([]);
    const [dummy_cart,set_dummy] = useState(cart);
    const keys_array = Object.keys(dummy_cart);
    const totalCount =  cart_product.reduce(function(previous,current){
        return previous + current.price*dummy_cart[current.id];
    },0)
       
    if(keys_array.length==0){
        return (
            <div className="flex flex-col gap-6 mx-auto">
            <h1 className="bold text-3xl">Your Cart Is Empty</h1>
            <div className="flex justify-center">
            <Link to="/">{<NormalButton name="Home" />}</Link>
            </div>
            </div>
        )
    }
    const allPromise = keys_array.map(function(id){
        return getProduct(id);
    })
    const allPromises = Promise.all(allPromise);
    useEffect(function(){
        allPromises.then(function(product){
            setCart(product)
    
    })
   },[keys_array])
   if(cart_product.length==0){
    return (
        <div className='self-center flex flex-col gap-3'>
          <ImSpinner6 className='text-6xl animate-spin'/>
          <h1 className="text-2xl relative right-8">Please Wait...</h1>
        </div>
    )
   }
   function handle_count(id,dummy_count){
    const d = {...dummy_cart};
    d[id] = dummy_count;
    set_dummy(d);
   }
   function dummy(id){
    const d = {...dummy_cart};
    d[id] = 0;
    set_dummy(d);
   }
   function handle_cart(){
   
    const m = {...dummy_cart};
    for(let i=0;i<keys_array.length;i++){
        if(m[keys_array[i]]==0){
            delete m[keys_array[i]];
        }
    }
    recent_cart(m);
   }
    return(
        <div className="flex flex-col gap-4 bg-gray-100 h-screen justify-center">
        <Link to="/" className="self-center">{<NormalButton name="Home" extraclasses="bg-orange-600" />}</Link>
        <div className="mx-8 border border-gray-200 flex sm:flex-col bg-white">
            <div className="flex flex-col gap-4 sm:flex-row py-2 px-16  sm:justify-between">
                <h3 className="bold text-2xl">Name</h3>
                <h3 className="bold text-2xl">Price</h3>
                <h3 className="bold text-2xl">Quantity</h3>
                <h3 className="bold text-2xl">Subtotal</h3>
            </div>
                <hr />
               {cart_product.map(function(item){
                    return(
                        <>
                        <Cart cart={item} quantity={dummy_cart[item.id]} dummy_change={dummy} dummy_quan={handle_count}/>
                        </>
                    )
                })}
               
            <div className="flex py-2 justify-between px-2">
                <div className="flex gap-2">
                    <SelfModifiedInput extraClasses="py-1 px-2 border rounded-md" labelClasses="sr-only" label="Coupon" id="Coupon" type="text" placeholder="Coupon Code" />
                    <NormalButton name="Apply Coupon" />
                </div>
                <button onClick={handle_cart} className="border rounded-md bg-red-500 px-6 text-white">Update Cart</button>
            </div>
        </div>
        <div className="border self-end sm:mx-8 flex flex-col gap-3 min-w-80 max-w-96  pb-2 bg-white">
            <h1 className="px-2 pt-2 bold text-xl">Cart totals</h1>
            <hr />
            <div className="flex flex-col gap-2">
            <div className="px-2 flex gap-16">
                <h2>Subtotal</h2>
                <h2>${totalCount.toFixed(2)}</h2>
            </div>
            <hr />
            <div className="px-2 flex gap-16">
                <h2>Total</h2>
                <h2>${totalCount.toFixed(2)}</h2>
            </div>
            <hr />
            </div>
            <NormalButton name="Proceed To Checkout"/>
        </div>
        </div>
    )
}
export default cart;