import React, { useState, useEffect } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { LoadSellerFail, LoadSellerSuccess, clearErrors } from '../shopSlice';
import api from '../../../../utils/axios.js';
import Loader from '../../../../components/Loader/Loader.jsx';
import { errorToast, successToast } from '../../../../utils/toastMessage.js';
const ShopLogin = () => {
    const [value, setValue] = useState({ email: "", password: "" })
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const {isSeller,seller,isLoading} = useSelector((state)=>state.shop);
    const redirectPath = location?.state?.from || `/dashboard`;
    console.log(redirectPath);
    const InputchangeHandler = (e) => {
        setValue((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    const submitHandler = async (e) => {
         dispatch(clearErrors());
        try {
            e.preventDefault();
            const val = {
                email: value.email,
                password: value.password
            }
            
            const response = await api.post('/shop/login_shop', val);
            const data = await response.data;
           
             dispatch(LoadSellerSuccess(data.sellerData));
             successToast(data.message);
             dispatch(clearErrors());
             navigate(`/dashboard`);
        } catch (error) {
            errorToast(error.response.data.message || 'something went wrong')
            dispatch(LoadSellerFail(error.response.data.message));
        }
    }
   console.log(redirectPath);
    return (
        isSeller ? <Navigate to={redirectPath} /> : <>
            <div className="auth_container">
                <div className="heading_container">
                    <h2>
                        Login to your Seller Account
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
                                <Link to="/shop-create">
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

export default ShopLogin