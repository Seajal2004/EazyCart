import React, { useEffect, useState, useMemo,useCallback} from 'react';
import Products from './Products.jsx';
import NoMatch from './NoMatch.jsx';
import getData from './api.js';
import { ImSpinner6 } from "react-icons/im";
import SelfModifiedInput from './selfModifiedInput.jsx';

function Home(){
    const [ProductList,setLists] = useState({meta: {},data: []});
    const [srt ,setsrt] = useState("Default");
  const [flt ,setflt] = useState();
  const [page,setPage] = useState(1);
  useEffect(function(){
    let sortBy;
    let search;
    let sortType;
    if(flt){
      search = flt;
    }
      if(srt=="Low To Heigh Price"){
        sortBy = "price";
      }
      if(srt=="Heigh To Low Price"){
        sortBy = "price";
        sortType = "desc";
      }
      else if(srt=="Category"){
        sortBy = "category";
      }
      else if(srt=="Rating"){
        sortBy = "rating";
        sortType = "desc"
      }
      let prlist = getData(sortBy,search,sortType,page);
      prlist.then(function(products){
          setLists(products);
      });

  },[srt,flt,page]);
let data = [...ProductList.data];
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
            <option>Low To Heigh Price</option>
            <option>Heigh To Low Price</option>
            <option>Category</option>
            <option>Rating</option>
          </select>
          </div>
          <div>
            {data.length>0 && <Products items={data} />}
            {data.length==0 && <NoMatch />}
          </div>
          
          <div className="flex gap-2">
          {
          [...Array(ProductList.meta.last_page).keys()].map((item)=><button onClick={()=>{setPage(item+1)}} key={item} className='border px-3 py-1 border-orange-500 text-orange-500'>{item+1}</button>)}
            </div>
        </div>
      </div>
    );
}
export default Home;