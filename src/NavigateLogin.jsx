import React, { useContext } from "react";
import { AlertContext, CreateUser } from "./App";
import { Navigate } from "react-router-dom";
import  SignUp  from "./sign_up";
import Forgot from "./forgot";
import Home from "./Home";
import Detail from "./Detail";
import cart from "./cart";
function NavigateHOC(IncomingComponent){

    return(({...props})=>{
        const {user} = useContext(CreateUser);
        if(!user){
            return <Navigate to="/login"/>
        }
        return (
            <IncomingComponent {...props}/>
        )
    })
}
export default NavigateHOC(Home);
export const DetaiL = NavigateHOC(Detail);
export const CarT = NavigateHOC(cart);