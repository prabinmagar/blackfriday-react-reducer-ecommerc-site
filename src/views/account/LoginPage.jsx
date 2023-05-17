import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';
import "../../styles/LoginPage.scss";
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const { makeAuthRequest, dispatch, authErrorMsg, authData } = useContext(AuthContext);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const formDataHandler = (event, property) => {
    setLoginData({
      ...loginData,
      [property]: event.target.value
    });
  }
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    makeAuthRequest(dispatch, loginData);
  }

  useEffect(() => {
    if(authData.isLoggedIn) navigate("/");
    // eslint-disable-next-line
  }, [authData.isLoggedIn]);

  const notify = () => toast("You are logged in!");

  const checkLoginStatus = () => {
    if(authData.isLoggedIn) notify();
  }
  
  return (
    <main className='bg-secondary'>
      <div className='container'>
        <div className='sc-login'>
          <div className = "login-content px-5 py-4">
            <div className = "login-title fs-20">Login / Sign In</div>
            <form onSubmit={handleSubmit}>
              <div className='form-element'>
                <label htmlFor='username' className = "form-label">Username: </label>
                <input className = "form-control" type = "text" id = "username" onChange={(event) => formDataHandler(event, "username")} value = {loginData.username} />
              </div>
              <div className='form-element'>
                <label className='form-label' htmlFor='password'>Password:</label>
                <input className = "form-control" type = "password" id = "password" onChange={(event) => formDataHandler(event, "password")} value = {loginData.password} />
              </div>
              <button type = "submit" className = "btn-login fs-16" onClick={ () => checkLoginStatus }>Login</button>
              <div className='login-error-msg text-center my-3'>
                <p className='text-danger'>
                  { authErrorMsg }
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer/>
    </main>
  )
}

export default LoginPage