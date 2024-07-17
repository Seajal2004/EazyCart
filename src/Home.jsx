import React, { useEffect, useState, useMemo,useCallback, useContext} from 'react';
import Products from './Products.jsx';
import NoMatch from './NoMatch.jsx';
import getData from './api.js';
import { ImSpinner6 } from "react-icons/im";
import SelfModifiedInput from './selfModifiedInput.jsx';
import { Navigate } from 'react-router-dom';
import { CreateUser } from './App.jsx';
function Home(){
  const user = useContext(CreateUser);
    if(!user){
        return <Navigate to="/login" />
    }
    const [ProductList,setLists] = useState([]);
    useEffect(function(){

        let prlist = getData();
        prlist.then(function(products){
            setLists(products);
        });

    },[]);
    const [srt ,setsrt] = useState("Default");
  const [flt ,setflt] = useState("");
let data = [...ProductList];
useMemo(function(){
  if(flt!=""){
  data  = data.filter(function(item) {
  const categ = item.category.toLowerCase();
  const nme = item.title.toLowerCase();
  const filt = flt.toLowerCase();
  return categ.indexOf(filt) != -1 || nme.indexOf(filt) != -1;
})
}},[flt,data])
  useMemo(function(){
   if(srt == "Low to heigh Price"){
     data.sort(function(x,y) {
       return x.price -y.price;
     })
   }
   if(srt == 'Heigh to low Price'){
     data.sort(function(x,y) {
       return y.price -x.price;
     })
   }
   if(srt == 'Rating'){
    data.sort(function(x,y) {
      return y.rating -x.rating;
    })
  }
   if(srt == 'Category'){
    data.sort(function(x,y) {
      return y.category>x.category?-1:1;
    })
  }
},[srt,data]);
const sortMethod = useCallback(function(event){
  setsrt(event.target.value);
},[srt])
const Filtered = useCallback(function(event){
  setflt(event.target.value);
},[flt]);
if(ProductList.length==0){
    return (
      <div className='self-center flex flex-col gap-3'>
      <ImSpinner6 className='text-6xl animate-spin'/>
      <h1 className="text-2xl relative right-8">Please Wait...</h1>
    </div>
    )
}
    return(
        <div id="main" className="bg-gray-200">
        <div className="flex flex-col gap-5 my-10 sm:mx-16 bg-white sm:px-16 py-16">
          <div className="flex justify-between">
            <SelfModifiedInput type="text" label="Filter" labelClasses="sr-only" id="filter"  extraClasses="border py-1 rounded-md border-gray-500 px-2 max-w-60" placeholder="Filter By category or title" onChange={Filtered}/>
          <select onChange={sortMethod} value={srt}>
            <option>Default</option>
            <option>Low to heigh Price</option>
            <option>Heigh to low Price</option>
            <option>Category</option>
            <option>Rating</option>
          </select>
          </div>
          <div>
            {data.length>0 && <Products items={data} />}
            {data.length==0 && <NoMatch />}
          </div>
          <div className="flex gap-2">
            <a className="px-2  border text-red-500 border-red-500 rounded-sm" href="">1</a>
            <a className="px-2  border text-red-500 border-red-500 rounded-sm" href="">2</a>
            <a className="px-2  border text-red-500 border-red-500 rounded-sm" href="">3</a>
            </div>
        </div>
      </div>
    );
}
export default Home;