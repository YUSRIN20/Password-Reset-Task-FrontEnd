import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const [responseMsg,setResponseMsg] = useState('');

    // formik
    const initialValues = {email:'',password:''}

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,'Invalid email address').required('Email is Required'),
        password: Yup.string().min(8).required('Password is Required')
    });


    const onSubmit = async(values)=>{
        console.log("register Api Payloads",values);
        // const payloads = {email, password};
        try {
            const res  = await axios.post('http://localhost:4005/api/user/login',values);
            // const res  = await axios.post('https://password-reset-task-backend.onrender.com/api/user/login', payloads);
            setResponseMsg(res.data.message);
            toast.success(res.data.message); // Display success message as toast
        } catch (error) {
            console.log(error);
            setResponseMsg(error.response.data.message);
            toast.error(error.response.data.message); // Display error message as toast
        }
    }
    const formik  = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email" value={formik.values.email} onChange={formik.handleChange}/>
                    <span className="text-danger">{formik.errors.email}</span>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={formik.values.password} onChange={formik.handleChange}/>
                    <span className="text-danger">{formik.errors.password}</span>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <h3>{responseMsg}</h3>
            <div className='d-flex justify-content-evenly' >
                <Link to="/">Register</Link>
                <Link to="/forgot">Forgot Password</Link>
            </div>
            <ToastContainer /> {/* Toast container */}
        </div>
    );
};

export default LoginPage;
