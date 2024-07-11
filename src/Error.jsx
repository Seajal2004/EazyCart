import React, {memo} from "react";
import { Link } from "react-router-dom";
import Errors from "./images/error.jpg"
import NormalButton from "./NormalButton";

function Error({name}){
    return (
        <div className="flex flex-col gap-4 mx-auto items-center">
            <img src={Errors} alt="Not found"/>
            <h1 className="text-4xl">{name + " Not Found"}</h1>
            <Link to="/">{<NormalButton name="Go To Home" extraclasses="bg-blue-700" />}</Link>
        </div>
    )
}
export default memo(Error);