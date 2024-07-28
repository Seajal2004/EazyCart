import React, { useState} from 'react';
import {Routes, Route} from "react-router-dom";
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Error from './Error.jsx';
import Home, {DetaiL,CarT} from "./NavigateLogin.jsx";
import Login, {SignUP,ForgoT} from "./NavigateHome.jsx";
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
      <Route path="/product/:id" element={<DetaiL />}></Route>
      <Route path="*" element={<Error name="Page"/>}></Route>
      <Route path="/my_cart" element={<CarT />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/sign_up" element={<SignUP/>}></Route>
      <Route path="/forgot" element={<ForgoT />}></Route>
      </Routes>
      <Footer />
      </AlertContext.Provider>
      </CartProvider>
      </UserDetail>
    </div>
  );
}

export default App;