import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const ForgetPassword = () => {
    const [email,setEmail]  = useState('')
    const [responseMsg,setResponseMsg] = useState('');
    
    
    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log("Forget Email payloads",email);
        const payloads = {email}
        try {
            const res  = await axios.post('http://localhost:4005/api/user/forgotpassword', payloads);
            // const res  = await axios.post('https://password-reset-task-backend.onrender.com/forgotpassword', payloads);
            setResponseMsg(res.data.message);
            toast.success(res.data.message)
            
        } catch (error) {
            console.log(error)
            setResponseMsg(error.response.data.message);
            toast.error(error.response.data.message)
        }
    }

    return (
        <div>
            <h1>Forget Password</h1>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <div id="emailHelp" class="form-text">Enter your email to reset the password</div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>

                <div className='d-flex justify-content-evenly'>
                    <Link to='/'>Register</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/resetpassword'>reset</Link>

                </div>
            </form>
            <ToastContainer /> {/* Toast container */}
        </div>
    );
};

export default ForgetPassword;