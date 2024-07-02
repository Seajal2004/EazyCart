import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos} from "react-icons/md";
import { getProduct } from './api';
import { ImSpinner6 } from "react-icons/im"; 
import Error from './Error';

function Detail({handleCart}) {
    const param = useParams();
    const id = param.id;
    
    const [product,setp] = useState();
    const [loading,setload] = useState(true);
    const [count,setCount] = useState(1);
    function setCart(event){
      setCount(+event.target.value);
    }
    function changeCart(){
      handleCart(id,count);
    }
    useEffect(function(){
      const p = getProduct(id);
      p.then(function(data){
        setp(data);
        setload(false);
        setCount(1);
      }).catch(function(){
        setload(false);
      })

    },[id]);
    if(loading){
      return (
        <div className='self-center flex flex-col gap-3'>
          <ImSpinner6 className='text-6xl animate-spin'/>
          <h1 className="text-2xl relative right-8">Please Wait...</h1>
        </div>
      );
    }
    if(!product){
      return (
          <Error />
      )
    }
    return(
    <div className="bg-gray-200 shrink flex flex-col gap-28 h-screen py-4">
    <Link className=' mx-2 flex  self-start px-2 h-7' to="/">
    <MdOutlineArrowBackIos className='text-2xl font-bold'/> Back
    </Link>
    <div className='flex gap-4'>
    <img className="w-6/12 max-h-96" src={product.images[0]} alt={"product "+ id}/>
    <div className="self-center mx-4 flex flex-col gap-3">
      <h1 className="text-4xl font-bold text-gray-500">{product.title}</h1>
      <h3 className="text-3xl font-bold text-gray-500 my-5">${product.price}</h3>
      <p className="text-gray-400 mb-5">{product.description}</p>
      <div className="flex flex-wrap gap-3">
      <input onChange={setCart} type="number" value={count} className="border rounded-md border-gray-400 max-h-12 w-12 px-2 py-1" />
      <button onClick={changeCart} className="rounded-md border bg-red-500 py-2 px-12 text-white">Add To Cart</button>
      </div>
      </div>
      </div>
      <div className='flex justify-between mb-10 mx-2'>
        <div>
       {id>1 && <Link className='flex border px-2 h-7 bg-orange-500 text-white rounded-md' to={"/product/"+(product.id-1)}>
    <MdOutlineArrowBackIos className='text-2xl font-bold'/> Previous
    </Link>}
    </div>
     <Link className=' flex border px-2 h-7 bg-orange-500 text-white rounded-md' to={"/product/"+(product.id+1)}>Forward 
    <MdOutlineArrowForwardIos className='text-2xl font-bold'/>
    </Link>
    </div>

    
  </div>
);
}
export default Detail;