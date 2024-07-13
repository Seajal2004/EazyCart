import React, { memo } from "react";
function Input({label, name, type,id,touched,error,...rest}){
    return(
        <>
                <label className="text-xl" htmlFor={id}>{label}</label>
                <input  id={id}  type={type} name={name} className="w-full py-1 border border-gray-600 rounded-md px-2" placeholder={"Enter your "+ name } {...rest}/>
                <div>{touched && error && <div className="text-red-500">{error}</div>}</div>
        </>
    )
}

export default memo(Input);