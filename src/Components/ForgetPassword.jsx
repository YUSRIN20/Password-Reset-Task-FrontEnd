import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    const [email,setEmail]  = useState('')
    const [responseMsg,setResponseMsg] = useState('');
    
    
    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log("Forget Email payloads",email);
        const payloads = {email}
        try {
            const res  = await axios.post('http://localhost:4005/api/user/forgotpassword', payloads);
            setResponseMsg(res.data.message);
        } catch (error) {
            console.log(error)
            setResponseMsg(error.response.data.message);
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
            <h1>{responseMsg}</h1>
        </div>
    );
};

export default ForgetPassword;