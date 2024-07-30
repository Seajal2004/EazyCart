import React, {memo, useState} from "react";
import { RxCrossCircled } from "react-icons/rx";
import productsImage from "./images/products.jpg"
function cart_product_detail({cart,quantity,dummy_quan}){
    const [quan,setQuan] = useState(quantity);
    function changeQuantity(event){
        if(+event.target.value<0){
            dummy_quan(cart.id,0);
            setQuan(0);
        }
        else{
            dummy_quan(cart.id,+event.target.value);
            setQuan(+event.target.value);
        }

    }
    function setdata(){
        dummy_quan(cart.id,0);
        setQuan(0);
        }
    return(
       <>
        <div className="flex gap-12 items-center mx-12"> 
            <button onClick={setdata}><RxCrossCircled className="w-10"/></button>
            <img className="border w-16 h-16" src={productsImage} />
            <h2 className="grow bold text-xl text-orange-600">{cart.title}</h2>
            <h2 className="w-20 bold text-xl">${cart.price.toFixed(2)}</h2>
            <input className="w-20 py-1 px-1 border rounded-md bg-gray-50" onChange={changeQuantity} value={quan} type="number" />
            <h2 className=" bold text-xl w-20">${(cart.price*quan).toFixed(2)}</h2>
        </div>
        <hr className=""/>
        </>
    )
}
export default memo(cart_product_detail);