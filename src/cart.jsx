import React, { useState, useEffect } from "react";
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
    useEffect(function(){
        const allPromise = keys_array.map(function(id){
            return getProduct(id);
        })
        const allPromises = Promise.all(allPromise);
        allPromises.then(function(product){
            setCart(product)
    
    })
   },[cart_product])
   
   function handle_count(id,dummy_count){
    const d = {...dummy_cart};
    d[id] = dummy_count;
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
   if(keys_array.length==0){
    return (
        <div className="flex flex-col gap-6 items-center">
        <h1 className="bold text-3xl">Your Cart Is Empty</h1>
        <Link to="/">{<NormalButton name="Home" />}</Link>
        </div>
    )
}
    return(
        <div className="flex flex-col gap-8 bg-gray-100 py-8 justify-center grow">
            <Link to="/" className="self-center">{<NormalButton name="Home" extraclasses="bg-orange-600" />}</Link>
        <div className="w-[90%] self-center border rounded-md flex flex-col gap-4 bg-white py-12 px-12 h-[90%]">
        
        <div className="border border-gray-200 rounded-md flex flex-col bg-white">
            <div className="flex pl-[248px] py-2  pr-12 gap-12 bg-gray-200">
                <h3 className="bold text-xl grow">Name</h3>
                <h3 className="bold text-xl w-20">Price</h3>
                <h3 className="bold text-xl w-20">Quantity</h3>
                <h3 className="bold text-xl w-20">Subtotal</h3>
            </div>
                <hr />
                {cart_product.length==0 && <ImSpinner6 className="text-5xl mx-auto animate-spin"/>}
               {cart_product.length>0 && cart_product.map(function(item){
                    return(
                        <>
                        <Cart cart={item} quantity={dummy_cart[item.id]} dummy_quan={handle_count}/>
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
        <div className="border self-end  flex flex-col gap-3 min-w-80 max-w-96  pb-2 bg-white">
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
        </div>
        
    )
}
export default cart;