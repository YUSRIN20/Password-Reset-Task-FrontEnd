import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useLocation, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token")
    const email = searchParams.get("email")
    const [responseMsg,setResponseMsg] = useState('');


    const validateToken = async () => {
        try {
            let res = await axios.get('http://localhost:4005/api/user/allusers');
            if (res.data && res.data.users) {
                const reqUser = res.data.find((user) => user.email === email);
                if (reqUser) {
                    const tokenCheck = reqUser.randomString === token;
                    if (!tokenCheck) {
                        navigate('/error');
                    }
                } else {
                    console.log("User not found for email:", email);
                }
            } else {
                console.log("Invalid response data:", res.data);
            }
        } catch (error) {
            console.log("Error fetching user data:", error);
        }
    };
    
    const initialValues = { password: '', confirmPassword: '' };

    const validationSchema = Yup.object({
        password: Yup.string().min(8).required("Password is required"),
        confirmPassword: Yup.string().min(8).required("Confirm password is required")
    });

    const onSubmit = async (values) => {
        try {
            const res = await axios.put('http://localhost:4005/api/user/resetpassword',{...values,email});
            setResponseMsg(res.data.message);
        } catch (error) {
            console.log(error);
            setResponseMsg(error.response.data.message);
        }
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    })
    useEffect(() => {
        validateToken()
    }, [])
    return (
        <div>
            <h1>Reset Password</h1>
            <form
                className="p-5 bg-light w-100 mx-auto rounded-3"
                onSubmit={formik.handleSubmit}
            >
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Enter New Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter New password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    <span className="text-danger">{formik.errors.password}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                    />
                    <span className="text-danger">{formik.errors.confirmPassword}</span>
                </div>
                <div className="d-grid mt-4">
                    <button type="submit" className="btn-success btn">
                        Set Password
                    </button>
                </div>
            </form>
            <h1>{responseMsg}</h1>
        </div>
    );
};

export default ResetPassword;
