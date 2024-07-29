import React, {useContext} from "react";
import { withFormik } from "formik";
import { Link} from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import * as Yup from "yup";
import  SelfFormikInput  from "./selfModifiedInput";
import Button from "./FormButton";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { CreateUser } from "./UserDetail";
let setUsers;
function createAccount(values,props){     
    axios.post("https://myeasykart.codeyogi.io/signup",
        {
            fullName: values.username,
            email: values.email,
            password: values.password,
        }
    ).then((response)=>{
        const {user,token} = response.data;
        localStorage.setItem("token",token);
        setUsers(user);
        props.props.setAlert({type:"success",message:"Welcome "+ user.full_name +"!"})
    }).catch(()=>{
        props.props.setAlert({type:"error",message:"Email is already exist!"})
    })
}
const schema = Yup.object().shape({
    username: Yup.string().required("Please enter your name"),
    email : Yup.string().required("Please fill your email"),
    password: Yup.string().required("Please Enter password").min(8,"password must be 8 chracters").test("numberPresnt","Password Contain some Number and Special Characters",(value)=>{
        let nm1 = 0;
        let nm2 = 0;
        for(let i=0;i<value.length;i++){
            if(value.charAt(i)>='0' && value.charAt(i)<='9'){
                nm1 += 1;
            }
            if(value.charAt(i)=='@' || value.charAt(i)=='#' || value.charAt(i)=="$"){
                nm2 += 1;
            }

        }
        if(nm1==0 || nm2==0){
            return false;
        }
        return true;
}),
    confirm_password : Yup.string().required("Password and Confirm Password are not same").test("samPassword","Confirm Password are not same",(value)=>{
        if(value==password.value){
            return true;
        }
        return false;
    })


})
function sign_up({handleSubmit,handleBlur,handleChange,touched,errors}){
    const {user,setUser} = useContext(CreateUser);
    setUsers = setUser
    if(user){
        return <Navigate to="/" />
    }
    return (
        <div className="flex  bg-gray-100 h-screen w-screen">
        <div className="my-4 flex flex-col px-4 py-2 gap-4 self-center mx-auto w-2/4 bg-white border rounded-xl">
        <Link to="/" className="flex"><MdArrowBackIos className="text-xl self-center"/>Back</Link>
            <h1 className="self-center text-gray-600 text-3xl">EazyCarter</h1>
            <h2 className="text-2xl bold">Sign up</h2>

            
            <form onSubmit={handleSubmit} className="flex flex-col gap-1">
                <SelfFormikInput name="username" id="username" type="text" label="Name" onChange={handleChange} onBlur={handleBlur} touched={touched.username} error={errors.username} extraClasses="border rounded-md border-yellow-400 border-2 py-1 px-1" labelClasses="text-gray-900 text-lg" />
                <SelfFormikInput name="email" id="email" type="email" label="Email" onChange={handleChange} onBlur={handleBlur} touched={touched.email} error={errors.email} extraClasses="border rounded-md border-yellow-400 border-2 py-1 px-1" labelClasses="text-gray-900 text-lg" />
                <SelfFormikInput name="password" id="password" type="password" label="Password" onChange={handleChange} onBlur={handleBlur} touched={touched.password} error={errors.password} extraClasses="border rounded-md border-yellow-400 border-2 py-1 px-1" labelClasses="text-gray-900 text-lg"/>
                <SelfFormikInput name="confirm_password" id="confirm_password" type="password" label="Confirm Password" onChange={handleChange} onBlur={handleBlur} touched={touched.confirm_password} error={errors.confirm_password} extraClasses="border rounded-md border-yellow-400 border-2 py-1 px-1" labelClasses="text-gray-900 text-lg" />
                <Button name="Create Account" />
                <p className="self-center">Already Account? <Link className="text-blue-600" to="/login">Sign in</Link></p>
            </form>

        </div>
        </div>
    )
}
const myHOC = withFormik({
    initialValues: {
        username: "",

        email: "",
        password: "",
        confirm_password: "",
    },
    handleSubmit: createAccount,
    validationSchema: schema,
})
export default myHOC(sign_up);
export const SignUp = sign_up