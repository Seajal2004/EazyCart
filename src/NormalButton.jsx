import React, { memo } from "react";
function NormalButton({name,extraclasses}){
    return (
        <>
        <button className={"border rounded-md bg-red-500 px-6 text-xl text-white "+extraclasses}>{name}</button>
        </>
    )
}
export default memo(NormalButton);