import React from "react";
import { Link } from "react-router-dom";
function Created(){
    return(
        <div className="flex  bg-gray-100 h-screen w-screen algin-center justify-center gap-4">
            <div className="border rounded-xl h-3/4 w-3/4 self-center flex flex-col justify-center gap-4 bg-white py-4 px-4">
                <h1 className="text-3xl self-center">Your Account is Created!</h1>
                <button className="self-center border rounded-md bg-blue-600 px-8 py-2"><Link className="text-white text-xl" to="/login">Log in</Link></button>
            </div>
        </div>
    )
}
export default Created