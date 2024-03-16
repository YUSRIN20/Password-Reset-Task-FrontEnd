import React from 'react';
import RegisterPage from './Components/RegisterPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import ForgetPassword from './Components/ForgetPassword';
import ResetPassword from './Components/ResetPassword';

const App = () => {
  return (
    <div>
      <h1>App Component</h1>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />}/>
        <Route path ='/forgot' element={<ForgetPassword />}/>
        <Route path ='/resetpassword' element={<ResetPassword />}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
};

export default App;