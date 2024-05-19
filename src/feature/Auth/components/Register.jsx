import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { successToast, errorToast } from '../../../utils/toastMessage.js'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInFailure, signInSuccess, clearErrors, signUpSuccess } from '../authSlice.js';
import './auth.css'
import api from '../../../utils/axios.js';

const Register = () => {
    const [value, setValue] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [avatar, setAvatar] = useState(null);
    const [visible, setVisible] = useState(false);
    const { loading, error } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const InputchangeHandler = (e) => {
        setValue((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })

    }
    const handleFileInputChange = (e) => {
        const reader = new FileReader();
    
        reader.onload = () => {
          if (reader.readyState === 2) {
            setAvatar(reader.result);
          }
        };
    
        reader.readAsDataURL(e.target.files[0]);
      };

    const SubmitHandler = async (e) => {
        e.preventDefault();
        dispatch(clearErrors());
        dispatch(signInStart());
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append('file', avatar);
            formData.append('name', value.name);
            formData.append('email', value.email);
            formData.append('password', value.password);
            // await axios.post(`${server}/user/create_user`,formData);
            const response = await api.post(`/user/create_user`, formData);
            const data = response.data;
            successToast(data.message);
            dispatch(signUpSuccess(data.userData));
            dispatch(clearErrors());
            navigate('/login');
        } catch (error) {
            console.log(error);
            errorToast(error?.response?.data?.message || 'something went wrong')
            dispatch(signInFailure(error?.response?.data?.message));
        }
    }
    
    return (
        <>
            <div className="auth_container">
                <div className="heading_container">
                    <h2>
                        Register as a new user
                    </h2>
                </div>
                <div className="form_container">
                    <div className="form_subcontainer">
                        <form onSubmit={SubmitHandler}>
                            <div className='mb-3'>
                                <label
                                    htmlFor="email"
                                    className='label'
                                >
                                    Full Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="name"
                                        className='input_type'
                                        autoComplete="name"
                                        value={value.name}
                                        onChange={InputchangeHandler}
                                        required
                                    />
                                </div>
                            </div>

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
                                        value={value.password}
                                        onChange={InputchangeHandler}
                                        autoComplete="current-password"
                                        required
                                    />
                                    {visible ? (
                                        <i className='bx bx-low-vision i_icon' onClick={()=>setVisible(false)}></i>
                                    ) : (
                                        <i className='bx bx-show-alt i_icon' onClick={()=>setVisible(true)}></i>
                                    )}
                                </div>
                            </div>
                            <div className='avatar_container mb-3'>
                                <label
                                    htmlFor="avatar"
                                    className="avatar_container_label"
                                ></label>
                                <div className="avatar_container_div">
                                    <span className="avatar_container_span">
                                        {avatar ? (
                                            <img
                                                src={URL.createObjectURL(new Blob([avatar]))}
                                                alt="avatar"
                                                className="img_preview"
                                            />
                                        ) : (
                                            <i className='bx bx-user-circle'></i>
                                        )}
                                    </span>
                                    <label
                                        htmlFor="file-input"
                                        className="file_input_label"
                                    >
                                        <span>Upload a file</span>
                                        <input
                                            type="file"
                                            name='file' 
                                            onChange={(e)=>setAvatar(e.target.files[0])}
                                            id="file-input"
                                            accept=".jpg,.jpeg,.png"
                                            className="file_input_input"
                                        />
                                    </label>
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
                                <h4>Already have an account?</h4>
                                <Link to="/login">
                                    Sign In
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;