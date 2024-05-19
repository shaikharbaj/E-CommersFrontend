import React, { useState, useEffect } from 'react'
import './auth.css';
import api from '../../../utils/axios';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { errorToast, successToast } from '../../../utils/toastMessage';
import { clearErrors, signInFailure, signInStart, signInSuccess } from '../authSlice';
const Login = () => {
    const { loading, error, isAuthenticated } = useSelector((state) => state.auth);
    const [value, setValue] = useState({ email: "", password: "" })
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const redirectPath = location?.state?.from || '/';
    const InputchangeHandler = (e) => {
        setValue((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    const submitHandler = async (e) => {
        dispatch(clearErrors());
        dispatch(signInStart());
        try {
            e.preventDefault();
            const val = {
                email: value.email,
                password: value.password
            }
            const response = await api.post('/user/login_user', val);
            const data = await response.data;
            dispatch(signInSuccess(data.userData));
            successToast(data.message);
            dispatch(clearErrors());
            navigate(redirectPath);
        } catch (error) {
            errorToast(error.response.data.message || 'something went wrong')
            dispatch(signInFailure(error.response.data.message));
        }
    }
    console.log('here');
    return (
        isAuthenticated ? <Navigate to={redirectPath} /> : <>
            <div className="auth_container">
                <div className="heading_container">
                    <h2>
                        Login to your account
                    </h2>
                </div>
                <div className="form_container">
                    <div className="form_subcontainer">
                        <form onSubmit={submitHandler}>
                            <div className='mb-3'>
                                <label
                                    htmlFor="email"
                                    className='label'
                                >
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        name="email"
                                        className='input_type'
                                        autoComplete="email"
                                        placeholder='enter email'
                                        value={value.email}
                                        onChange={InputchangeHandler}
                                        required
                                    />
                                </div>
                            </div>

                            <div className='mb-3'>
                                <label
                                    htmlFor="password"
                                    className='label'
                                >
                                    Password
                                </label>
                                <div className="mt-1 position-relative password_container">
                                    <input
                                        type={visible ? "text" : "password"}
                                        name="password"
                                        className='input_type'
                                        autoComplete="current-password"
                                        placeholder='enter password'
                                        value={value.password}
                                        onChange={InputchangeHandler}
                                        required
                                    />
                                    {visible ? (
                                        <i className='bx bx-low-vision i_icon' onClick={() => setVisible(false)}></i>
                                    ) : (
                                        <i className='bx bx-show-alt i_icon' onClick={() => setVisible(true)}></i>
                                    )}
                                </div>
                            </div>
                            <div className='auth_submit_btn'>
                                <button
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                            <div className="alredy_have_acc">
                                <h4>Not have an account?</h4>
                                <Link to="/register">
                                    Sign Up
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login