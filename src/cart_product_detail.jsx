import React, {memo} from "react";
import { RxCrossCircled } from "react-icons/rx";
import SelfModifiedInput from "./selfModifiedInput";
function cart_product_detail({cart,quantity, dummy_change,dummy_quan}){
    function changeQuantity(event){
        if(+event.target.value<0){
            dummy_quan(cart.id,0);
        }
        else{
            dummy_quan(cart.id,+event.target.value)
        }

    }
    function setdata(){
        dummy_change(cart.id);
    }
    return(
       <>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-evenly mr-4 sm:mr-0 sm:py-2"> 
            <button onClick={setdata}><RxCrossCircled className="self-center"/></button>
            <img className="border max-w-16 max-h-16" src={cart.images[0]} />
            <h2 className="self-center bold text-xl text-orange-600">{cart.title}</h2>
            <h2 className="self-center bold text-xl">{cart.price.toFixed(2)}</h2>
            <SelfModifiedInput extraClasses="self-center max-w-12 py-1 px-1 border rounded-md bg-gray-50" onChange={changeQuantity} value={quantity} type="number" label="Quantity" labelClasses="sr-only" />
            <h2 className="self-center">${(cart.price*quantity).toFixed(2)}</h2>
        </div>
        <hr className=""/>
        </>
    )
}
export default memo(cart_product_detail);