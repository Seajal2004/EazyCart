import React, { useState, useEffect } from "react";
import { Link} from 'react-router-dom';
import Cart from "./cart_product_detail";
import { getProduct } from "./api";
function cart({cart}){
    const keys_array = Object.keys(cart);
    const totalCount =  Object.keys(cart).reduce(function(previous,current){
        const [product_cost,set] = useState(0);
    useEffect(function(){
        getProduct(current).then(function(data){
            set(data.price)
            })
    },[])
        return previous + cart[current]*product_cost;
      },0)
       
    if(keys_array.length==0){
        return (
            <div className="flex flex-col gap-6 mx-auto">
            <h1 className="bold text-3xl">Your Cart Is Empty</h1>
            <div className="flex justify-center">
            <Link className="border rounded-md bg-orange-500 text-white px-4 py-1" to="/">Home</Link>
            </div>
            </div>
        )
    }

    return(
        <div className="flex flex-col gap-4">
        <Link className="self-center border rounded-md bg-orange-500 text-white px-4 py-1" to="/">Home</Link>
        <div className="mx-8 border border-gray-200 flex sm:flex-col">
            <div className="flex flex-col gap-4 sm:flex-row py-2 px-16 sm:justify-evenly bg-gray-100">
                <h3 className="bold text-2xl">Product</h3>
                <h3 className="bold text-2xl">Name</h3>
                <h3 className="bold text-2xl">Price</h3>
                <h3 className="bold text-2xl">Quantity</h3>
                <h3 className="bold text-2xl">Subtotal</h3>
            </div>
           
               { keys_array.map(function(item){
                    return(
                        <>
                        <Cart id={item} quantity={cart[item]} />
                        </>
                    )
                })}
               
            <div className="flex py-2 justify-between px-2">
                <div className="flex gap-2">
                    <input className="border border-gray-200 py-1 px-2" type="text" placeholder="Coupon Code"></input>
                    <button className="border rounded-md bg-red-500 px-6 text-white">Apply Coupon</button>
                </div>
                <button className="border rounded-md bg-red-500 px-6 text-white">Update Cart</button>
            </div>
        </div>
        <div className="border self-end sm:mx-8 flex flex-col gap-4 min-w-80 max-w-96 px-4 py-2">
            <h1 className="px-2 py-2 bold text-xl bg-gray-100">Cart totals</h1>
            <div className="flex flex-col gap-2">
            <div className="px-2 flex gap-16">
                <h2>Subtotal</h2>
                <h2>${totalCount}</h2>
            </div>
            <hr />
            <div className="px-2 flex gap-16">
                <h2>Total</h2>
                <h2>${totalCount}</h2>
            </div>
            <hr />
            </div>
            <button className="border rounded-md bg-red-500 text-white px-4 py-2">Proceed To Checkout</button>
        </div>
        </div>
    )
}
export default cart;