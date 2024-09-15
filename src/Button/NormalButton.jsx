import React, { memo } from "react";
function NormalButton({name,extraclasses,type}){
    const type = "bg-blue-700";
    if(type == "secondry"){
        type = "bg-orange-600";
    }
    return (
        <>
        <button className={"border rounded-md bg-red-500 px-6 text-xl text-white py-1 mx-2 "+ type + " "+ extraclasses}>{name}</button>
        </>
    )
}
export default memo(NormalButton);