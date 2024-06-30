import React, { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Detail from './Detail.jsx';
import {Error1} from './Error.jsx';

function App() {
  const savedData = localStorage.getItem("added-items") || "{}";
  const convertData = JSON.parse(savedData);
  const [cart,setCart] = useState(convertData);
  function addToCart(productId,count){
    const old = cart[productId] || 0;
    setCart({...cart,[productId]:old+count})
    localStorage.setItem("added-items",JSON.stringify({...cart,[productId]:old+count}))

  }

  const totalCount =  Object.keys(cart).reduce(function(previous,current){
    return previous + cart[current];
  },0)
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header count={totalCount}/>
      <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/product/:id" element={<Detail handleCart={addToCart}/>}></Route>
      <Route path="*" element={<Error1 />}></Route>
      <Route path="/my_cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;