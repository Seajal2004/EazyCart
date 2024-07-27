import React, { useContext } from "react";
import {  CreateUser } from "./UserDetail";
import { AlertContext } from "./App";
import { Navigate } from "react-router-dom";
import  Login  from "./login_page";
import  SignUp  from "./sign_up";
import Forgot from "./forgot";
function NavigateHOC(IncomingComponent){

    return(()=>{
        const {user,setUser} = useContext(CreateUser);
        const {alert,setAlert} = useContext(AlertContext);
        if(user){
            return <Navigate to="/"/>
        }
        return (
            <IncomingComponent setUser={setUser} setAlert={setAlert} />
        )
    })
}
export default NavigateHOC(Login);
export const SignUP = NavigateHOC(SignUp);
export const ForgoT = NavigateHOC(Forgot);