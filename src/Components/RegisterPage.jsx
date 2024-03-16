import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responseMsg, setResponseMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Register Api Payloads", username, password, email);
        const payloads = { username, password, email };
        try {
            const res = await axios.post('http://localhost:4005/api/user/register', payloads);
            setResponseMsg(res.data.message);
            toast.success(res.data.message)
        } catch (err) {
            if (err.response) {
                // Request was made and server responded with a status code
                // Handle server errors here
                setResponseMsg(err.response.data.message);
                toast.error(err.response.data.message)
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

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputUsername" className="form-label">Enter Your Username</label>
                    <input type="text" className="form-control" id="exampleInputUsername" aria-describedby="emailHelp" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}  required/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
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
