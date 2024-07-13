import React, { memo } from "react";

function SelfModifiedInput({label, name, type,id,touched,error,labelClasses,extraClasses,...rest}){
    return(
        <>
                <label className={labelClasses} htmlFor={id}>{label}</label>
                <input  id={id}  type={type} name={name} className={extraClasses} placeholder={"Enter your "+ name } {...rest}/>
                <div>{touched && error && <div className="text-red-500">{error}</div>}</div>
        </>
    )
}
export default memo(SelfModifiedInput);