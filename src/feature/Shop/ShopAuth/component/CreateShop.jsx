import React,{useState} from 'react'
import style from './shopauth.module.css'
import { useNavigate } from 'react-router-dom'
import api from '../../../../utils/axios'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { errorToast, successToast } from '../../../../utils/toastMessage'
const CreateShop = () => {
    const [value, setValue] = useState({
        name: "",
        email: "",
        password: "",
        phoneNumber:"",
        address:"",
        zipCode:"",
    })
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [visible, setVisible] = useState(false);
    // const { loading, error } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const InputchangeHandler = (e) => {
        setValue((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })

    }
    // const handleFileInputChange = (e) => {
    //     const reader = new FileReader();
    
    //     reader.onload = () => {
    //       if (reader.readyState === 2) {
    //         setAvatar(reader.result);
    //       }
    //     };
    
    //     reader.readAsDataURL(e.target.files[0]);
    //   };

    const SubmitHandler = async (e) => {
        e.preventDefault();
        // dispatch(clearErrors());
        // dispatch(signInStart());
        setLoading(true);
        setError(null);
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append('file', avatar);
            formData.append('name', value.name);
            formData.append('email', value.email);
            formData.append('password', value.password);
            formData.append('phonenumber', value.phoneNumber);
            formData.append('zipcode', value.zipCode);
            formData.append('address', value.address);
            // await axios.post(`${server}/user/create_user`,formData);
            const response = await api.post(`/shop/create_shop`, formData);
            const data = response.data;
            successToast(data.message);
            setLoading(false);
            setError(null);
            navigate('/shop-login');
        } catch (error) {
            console.log(error);
            errorToast(error?.response?.data?.message || 'something went wrong')
        }
    }
  return (
    <>
        <div className="auth_container">
                <div className="heading_container">
                    <h2>
                        Register as a Seller
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
                                    Shop Name
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
                                    htmlFor="number"
                                    className='label'
                                >
                                    Phone Number
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="number"
                                        name="phoneNumber"
                                        className='input_type'
                                        autoComplete="email"
                                        placeholder='enter phone number'
                                        value={value.phoneNumber}
                                        onChange={InputchangeHandler}
                                        required
                                    />
                                </div>
                            </div>

                            <div className='mb-3'>
                                <label
                                    htmlFor="address"
                                    className='label'
                                >
                                    Address
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="address"
                                        className='input_type'
                                        placeholder='enter address'
                                        value={value.address}
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
                                    Zip Code
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="number"
                                        name="zipCode"
                                        className='input_type'
                                        placeholder='enter zipcode'
                                        value={value.zipCode}
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
                                <Link to="/shop-login">
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

export default CreateShop