import React, { useState,useMemo, useCallback, useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Error from './Error.jsx';
import Logo from "./images/Q.png"
import Home, {DetaiL,CarT} from "./NavigateLogin.jsx";
import Login, {SignUP,ForgoT} from "./NavigateHome.jsx";
import axios from 'axios';
import Alert from './alert.jsx';
export const CreateContext = React.createContext();
export const CreateUser = React.createContext();
export const AlertContext = React.createContext();
function App() {
  const savedData = localStorage.getItem("added-item") || "{}";
  const convertData = JSON.parse(savedData);
  const [cart,setCart] = useState(convertData);
  const [user,setUser] = useState();
  const [loading,setLoading] = useState(true);
  const [alert,setAlert] = useState();
  const token = localStorage.getItem("token");
  useEffect(()=> {
    if(token){
    axios.get("https://myeasykart.codeyogi.io/me",{
      headers: {
        Authorization: token,
      }
    }).then((response)=>{
      setUser(response.data);
      setLoading(false);
    }
    )
  }
    else{
      setLoading(false);
    }
},[])
  function logout(){
    localStorage.setItem("token","");
    setUser();
  }
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
  if(loading){
    return(
      <div className="flex flex-col items-center justify-center h-screen w-screnn">
        <h1 className="text-5xl">Loading...</h1>
      </div>
    )
  }
  return (
    <div className="flex flex-col h-screen justify-between">
      <CreateContext.Provider value={addToCart}>
      <CreateUser.Provider value={{user,setUser}}>
      <AlertContext.Provider value={{alert,setAlert}} >
      <Header count={totalCount} src={Logo} logout={logout}/>
       <Alert />
      <Routes>
      <Route index element= {<Home />}></Route>
      <Route path="/product/:id" element={<DetaiL />}></Route>
      <Route path="*" element={<Error name="Page"/>}></Route>
      <Route path="/my_cart" element={<CarT cart = {cart} recent_cart={updateCart}/>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/sign_up" element={<SignUP/>}></Route>
      <Route path="/forgot" element={<ForgoT />}></Route>
      </Routes>
      <Footer />
      </AlertContext.Provider>
      </CreateUser.Provider>
      </CreateContext.Provider>
    </div>
  );
}

export default App;