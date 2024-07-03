import React, { useState,useMemo, useCallback} from 'react';
import {Routes, Route} from "react-router-dom";
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Detail from './Detail.jsx';
import {Error2} from './Error.jsx';
import Cart from './cart.jsx';
import Logo from "./images/Q.png"
function App() {
  const savedData = localStorage.getItem("added-item") || "{}";
  const convertData = JSON.parse(savedData);
  const [cart,setCart] = useState(convertData);
  function addToCart(productId,count){
    const old = cart[productId] || 0;
    setCart({...cart,[productId]:old+count})
    localStorage.setItem("added-item",JSON.stringify({...cart,[productId]:old+count}))
  }
  const updateCart = useCallback(function (update_cart){
    const a = {...update_cart}
    setCart({...a});
    localStorage.setItem("added-item",JSON.stringify({...a}))
  },[cart])
  const totalCount =  useMemo(function(){
    return (Object.keys(cart).reduce(function(previous,current){
    return previous + cart[current];
  },0))
},[cart])
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header count={totalCount} src={Logo}/>
      <Routes>
      <Route index element= {<Home />}></Route>
      <Route path="/product/:id" element={<Detail handleCart={addToCart}/>}></Route>
      <Route path="*" element={<Error2 />}></Route>
      <Route path="/my_cart" element={<Cart cart = {cart} recent_cart={updateCart}/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;