import React, { useContext } from "react";
import { withFormik } from "formik";
import { Link, Navigate } from "react-router-dom";
import { MdOutlineArrowBackIos} from "react-icons/md";
import * as Yup from "yup";
import Input from "./Input";
import NormalButton from "./NormalButton";
import FormButton from "./FormButton";
import { CreateUser } from "./App";
function sendData(values){
    console.log(values.email)
}
const schema = Yup.object().shape({
    email : Yup.string().required("Please fill your email"),
})
function forgot({handleSubmit,handleChange,handleBlur,touched,errors,values}){
    return (
        <div className="flex  bg-gray-100 h-screen w-screen">
        <div className="flex flex-col px-4 py-2 gap-4 self-center mx-auto w-2/4 bg-white border rounded-xl">
            <h1 className="self-center text-gray-600 text-3xl">EazyCarter</h1>
            <h2 className="text-2xl bold">Forgot Password</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-1">
                <Input name="email" id="email" onChange={handleChange} onBlur={handleBlur} type="email" label="Email" error={errors.email} touched={touched.email} />
                <FormButton name="Send Password"/>
                <Link className="self-center" to="/login"><NormalButton name="Cancel" /></Link>
            </form>
           

        </div>
        </div>
    )
}
const myHOC = withFormik({
    initialValues: {
        email: "",
    },
    handleSubmit: sendData,
    validationSchema: schema,
})
export default myHOC(forgot);
export const Forgot =  forgot;