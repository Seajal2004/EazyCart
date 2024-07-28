import React, { useContext } from "react";
import { CreateUser } from "./UserDetail";
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