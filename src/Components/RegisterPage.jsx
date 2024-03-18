import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const RegisterPage = () => {
    const [responseMsg, setResponseMsg] = useState('');
    
    // formik
    const initialValues = {username:'',email:'',password:''}

    const validationSchema = Yup.object({
        username:Yup.string().matches(/^[A-Za-z][A-Za-z0-9_]{3,29}$/g,'Invalid Username').required('Username is Required'),
        email: Yup.string().email('Invalid email address').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,'Invalid email address').required('Email is Required'),
        password: Yup.string().min(8).required('Password is Required')
    });


    const onSubmit = async (values) => {
        console.log("Register Api Payloads", values);
        try {
            // If user doesn't exist, proceed with registration
            const registerRes = await axios.post('http://localhost:4005/api/user/register', values);
            setResponseMsg(registerRes.data.message);
            toast.success(registerRes.data.message);
        } catch (err) {
            if (err.response) {
                // Request was made and server responded with a status code
                // Handle server errors here
                setResponseMsg(err.response.data.message);
                toast.error(err.response.data.message);
            } else if (err.request) {
                // The request was made but no response was received
                // Handle request errors here
                console.log(err.request);
            } else {
                // Something happened in setting up the request that triggered an error
                console.log('Error', err.message);
            }
        }
        
    };
    
    const formik  = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputUsername" className="form-label">Enter Your Username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="emailHelp" value={formik.values.username} onChange={formik.handleChange} />
                    <span className="text-danger">{formik.errors.username}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={formik.values.email} onChange={formik.handleChange} />
                    <span className="text-danger">{formik.errors.email}</span>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={formik.values.password} onChange={formik.handleChange}  />
                    <span className="text-danger">{formik.errors.password}</span>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <h1>{responseMsg}</h1>
            <Link to ="/login">Login</Link>
            <ToastContainer />
        </div>
    );
};

export default RegisterPage;
