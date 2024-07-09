import React from "react";
import { Form, Formik, useFormik } from "formik";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIos} from "react-icons/md";
import * as Yup from "yup";
import Input from "./Input";
function login_page(){
    function sendData(){
        console.log(email.value,password.value)
    }
    const schema = Yup.object().shape({
        email : Yup.string().required("Please fill your email"),
        password : Yup.string().required("Please enter your password"),
    })
    return (
        <div className="flex  bg-gray-100 h-screen w-screen">
        <div className="flex flex-col px-4 py-2 gap-4 self-center mx-auto w-2/4 bg-white border rounded-xl">
            <Link className='flex  self-start h-7' to="/">
            <MdOutlineArrowBackIos className='text-2xl font-bold'/> Back
            </Link>
            <h1 className="self-center text-gray-600 text-3xl">EazyCarter</h1>
            <h2 className="text-2xl bold">Sign in</h2>
            <Formik 
            initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={schema}
            onSubmit={sendData}
            >
            <Form className="flex flex-col gap-1">
                <Input name="email" id="email" type="email" label="Email" />
                <Link className="text-blue-600 self-end" to="/forgot">Forget Password</Link>
                <Input name="password" id="password" type="password" label="Passwrod" />
                <button type="submit" className="my-6 border rounded-md bg-blue-600 text-white text-xl py-2 disabled:bg-blue-300">Log in</button>
                <p className="self-center">New User?Create Acccount <Link className="text-blue-600" to="/sign_up">Sign up</Link></p>
            </Form>
            </Formik>

        </div>
        </div>
    )
}
export default login_page;