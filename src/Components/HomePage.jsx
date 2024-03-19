// HomePage.js
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Style/HomePage.css'
const HomePage = ({username}) => {
    const location = useLocation();
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/login')
    }
    useEffect(() => {
        if (location.state && location.state.successMessage) {
            toast.success(location.state.successMessage);
        }
    }, [location]);

    return (
            <div className=' box-container d-flex justify-content-center'>
                <div class="card" style={{width:"50rem"}}>
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div class="card-body">
                        <h1 class="card-title text-center">Hello {username} !</h1>
                        <p class="card-text text-center">Welcome to Password Reset Application</p>
                        <div className='d-flex justify-content-center'>

                        <button className='btn btn-danger' onClick={handleSubmit}>Logout</button>
                        </div>

                    </div>
                </div>
            </div>
    );
};

export default HomePage;