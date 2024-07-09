import React from "react";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIos} from "react-icons/md";
import * as Yup from "yup";
import Input from "./Input";
function forgot(){
    function sendData(){
        console.log(email.value)
    }
    const schema = Yup.object().shape({
        email : Yup.string().required("Please fill your email"),
    })
    
    return (
        <div className="flex  bg-gray-100 h-screen w-screen">
        <div className="flex flex-col px-4 py-2 gap-4 self-center mx-auto w-2/4 bg-white border rounded-xl">
            <Link className='flex  self-start h-7' to="/">
            <MdOutlineArrowBackIos className='text-2xl font-bold'/> Back
            </Link>
            <h1 className="self-center text-gray-600 text-3xl">EazyCarter</h1>
            <h2 className="text-2xl bold">Forgot Password</h2>
            <Formik 
            initialValues={{
                email: "",
            }}
            validationSchema={schema}
            onSubmit={sendData}
            >
            <Form className="flex flex-col gap-1">
                <Input name="email" id="email" type="email" label="Email" />
                <button type="submit" className="my-6 border rounded-md bg-blue-600 text-white text-xl py-2 disabled:bg-blue-300">Send Password</button>
                <Link className="self-center" to="/login"><button className="border rounded-md bg-blue-600 text-white px-4 py-1 text-xl">Cancel</button></Link>
            </Form>
            </Formik>

        </div>
        </div>
    )
}
export default forgot;