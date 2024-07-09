import React, { useState } from "react";
import {  Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIos} from "react-icons/md";
import * as Yup from "yup";
import Input from "./Input";

import Created from "./Created";
function sign_up(){
    const [pass,setpass] = useState(false)
    const [account_created,setAccount] = useState(false)
    function createAccount(){
        if(password.value!=confirm_password.value){
            setpass(true);
        } 
        else{      
        console.log(username.value,dateOfBirth.value,email.value,password.value,confirm_password.value)
        setpass(false);
        setAccount(true);

        }
        
    }
    const schema = Yup.object().shape({
        username: Yup.string().required("Please enter your name"),
        dateOfBirth: Yup.string().required("Please enter your date-of-birth"),
        email : Yup.string().required("Please fill your email"),
        password: Yup.string().required("Please Enter password").min(8,"password must be 8 chracters"),
        confirm_password : Yup.string().required("Please confirm your pssword")


    })
    if(account_created){
        return (
            <>
                <Created />
            </>
        )
    }
    return (
        <div className="flex  bg-gray-100 h-screen w-screen">
        <div className="my-4 flex flex-col px-4 py-2 gap-4 self-center mx-auto w-2/4 bg-white border rounded-xl">
            <Link className='flex  self-start h-7' to="/">
            <MdOutlineArrowBackIos className='text-2xl font-bold'/> Back
            </Link>
            <h1 className="self-center text-gray-600 text-3xl">EazyCarter</h1>
            <h2 className="text-2xl bold">Sign up</h2>

            <Formik 
            initialValues={{
                username: "",
                dateOfBirth: "",
                email: "",
                password: "",
                confirm_password: "",
            }}
            validationSchema={schema}
            onSubmit={createAccount}
            >
            <Form className="flex flex-col gap-1">
                <Input name="username" id="username" type="text" label="Name" />
                <Input name="dateOfBirth" id="dateOfBirth" type="date" label="Date Of Birth" />
                <Input name="email" id="email" type="email" label="Email" />
                <Input name="password" id="password" type="password" label="password" />
                <Input name="confirm_password" id="confirm_password" type="password" label="Confirm Password" />
                {pass && <p className="text-red-500">Password and Confirm password are not same</p>}
                <button type="submit" className="my-6 border rounded-md bg-blue-600 text-white text-xl py-2 disabled:bg-blue-300">Create Acccount</button>
                <p className="self-center">Already Account? <Link className="text-blue-600" to="/login">Sign in</Link></p>
            </Form>
            </Formik>

        </div>
        </div>
    )
}
export default sign_up