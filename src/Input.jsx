import { useField } from "formik";
import React from "react";
function Input({label, name, type,id}){
   const allData = useField(name);
   const data = allData[0]
   const meta = allData[1];
    return(
        <>
                <label htmlFor={id}>{label}</label>
                <input onChange={data.onChange} onBlur={data.onBlur} id={id}  type={type} name={name} className="w-full py-1 border border-gray-600 rounded-md" placeholder={"Enter your "+ name }/>
                <div>{meta.touched && meta.error && <div className="text-red-500">{meta.error}</div>}</div>
        </>
    )
}
export default Input;