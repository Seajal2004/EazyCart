import React, { memo } from "react";
import FormikHOC from "./FormikHOC";
function Input({label, name, type,id,touched,error,...rest}){
    return(
        <>
                <label className="text-xl" htmlFor={id}>{label}</label>
                <input  id={id}  type={type} name={name} className={"w-full py-1 border border-gray-600 rounded-md px-2"} placeholder={"Enter your "+ name } {...rest}/>
                <div>{touched && error && <div className="text-red-500">{error}</div>}</div>
        </>
    )
}
export const FormikInput = FormikHOC(Input);
export default memo(Input);