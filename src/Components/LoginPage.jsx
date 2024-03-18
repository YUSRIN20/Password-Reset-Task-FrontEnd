import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [responseMsg,setResponseMsg] = useState('');

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log("register Api Payloads", password, email);
        const payloads = {email, password};
        try {
            // const res  = await axios.post('http://localhost:4005/api/user/login', payloads);
            const res  = await axios.post('https://password-reset-task-backend.onrender.com/api/user/login', payloads);
            setResponseMsg(res.data.message);
            toast.success(res.data.message); // Display success message as toast
        } catch (error) {
            console.log(error);
            setResponseMsg(error.response.data.message);
            toast.error(error.response.data.message); // Display error message as toast
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
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
