import React, { useContext, useState} from 'react';
import {Routes, Route} from "react-router-dom";
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Error from './Error.jsx';
import Home from "./Home.jsx";
import Detail from "./Detail.jsx"
import Cart from "./cart.jsx"
import Login from "./login_page.jsx";
import SignUp from "./sign_up.jsx";
import Forgot from "./forgot.jsx";
import Alert from './alert.jsx';
import UserDetail from './UserDetail.jsx';
import CartProvider from './CartProvider.jsx';
export const AlertContext = React.createContext();
function App() {
  const [alert,setAlert] = useState();
  return (
    <div className="flex flex-col h-screen justify-between">
      <UserDetail>
      <CartProvider>
      <AlertContext.Provider value={{alert,setAlert}} >
      <Header/>
       <Alert />
      <Routes>
      <Route index element= {<Home />}></Route>
      <Route path="/product/:id" element={<Detail />}></Route>
      <Route path="*" element={<Error name="Page"/>}></Route>
      <Route path="/my_cart" element={<Cart />}></Route>
      <Route path="/login" element={<Login setAlert={setAlert}/>}></Route>
      <Route path="/sign_up" element={<SignUp setAlert={setAlert}/>}></Route>
      <Route path="/forgot" element={<Forgot />}></Route>
      </Routes>
      <Footer />
      </AlertContext.Provider>
      </CartProvider>
      </UserDetail>
    </div>
  );
}

export default App;