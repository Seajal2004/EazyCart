import React, { memo } from "react";
function NormalButton({name,extraclasses,type}){
    let type1 = "bg-blue-700";
    if(type == "secondary"){
        type1 = "bg-orange-600";
    }
    if(type=="danger"){
        type1 = "bg-red-500";
    }
    return (
        <>
        <button className={"border rounded-md px-6 text-xl text-white py-1 mx-2 "+ type1 + " "+ extraclasses}>{name}</button>
        </>
    )
}
export default memo(NormalButton);