import React from "react";
import { withFormik } from "formik";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIos} from "react-icons/md";
import * as Yup from "yup";
import Input from "./Input";
import Button from "./FormButton";
function sendData(){
    console.log(email.value,password.value)
}
const schema = Yup.object().shape({
    email : Yup.string().required("Please fill your email"),
    password : Yup.string().required("Please enter your password"),
})
function login_page({touched,errors,handleChange,handleBlur,handleSubmit}){
    return (
        <div className="flex  bg-gray-100 h-screen w-screen">
        <div className="flex flex-col px-4 py-2 gap-4 self-center mx-auto w-2/4 bg-white border rounded-xl">
            <Link className='flex  self-start h-7' to="/">
            <MdOutlineArrowBackIos className='text-2xl font-bold'/> Back
            </Link>
            <h1 className="self-center text-gray-600 text-3xl">EazyCarter</h1>
            <h2 className="text-2xl bold">Sign in</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-1">
                <Input name="email" id="email" type="email" label="Email" onChange={handleChange} onBlur={handleBlur} touched={touched.email} error={errors.email} />
                <Link className="text-blue-600 self-end" to="/forgot">Forget Password</Link>
                <Input name="password" id="password" type="password" label="Passwrod" onChange={handleChange} onBlur={handleBlur} touched={touched.password} error ={errors.password} />
                <Button name="Log In" />
                <p className="self-center">New User?Create Acccount <Link className="text-blue-600" to="/sign_up">Sign up</Link></p>
            </form>

        </div>
        </div>
    )
}
const myHOC = withFormik({
    initialValues: {
        email: "",
        password: "",
    },
    handleSubmit: sendData,
    validationSchema: schema,
})
export default myHOC(login_page);
export  const Login = login_page;