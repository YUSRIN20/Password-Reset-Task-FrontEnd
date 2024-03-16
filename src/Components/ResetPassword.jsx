import React from 'react';

const ResetPassword = () => {
    return (
        <div>
            <h1>Reset Password</h1>
            <form>
               <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"  required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"  required/>
                </div>
                <button type="submit" className="btn btn-primary">Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPassword;