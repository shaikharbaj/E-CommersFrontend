import React, { useEffect, useState } from 'react'
import styles from './createproduct.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { categoriesData } from '../../../static/data'
import { useDispatch, useSelector } from 'react-redux'
import { Createproduct, clearErrors, clearSuccess } from '../../Product/ProductSlice'
import { errorToast, successToast } from '../../../utils/toastMessage'
import { useNavigate } from 'react-router-dom'
const CreateProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {seller} = useSelector((state)=>state.shop);
    const {isLoading,error,success} = useSelector((state)=>state.product);
    const [images, setImages] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState("");
    const [originalPrice, setOriginalPrice] = useState(null);
    const [discountPrice, setDiscountPrice] = useState(null);
    const [stock, setStock] = useState(null);

    const handleImageChange = (e) => {
        setImages([]);
        const files = Array.from(e.target.files);
        setImages((prev) => [...prev, ...files]);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        images.forEach((image) => {
            formData.append('images', image);
        })
        formData.append('name', name);
        formData.append('description', description);
        formData.append('tags', tags);
        formData.append('originalPrice', originalPrice);
        formData.append('discountPrice', discountPrice);
        formData.append('stock', stock);
        formData.append('category', category);
        formData.append('shopId', seller._id);
        dispatch(Createproduct(formData));  
    }

    useEffect(()=>{
             if(error)
             {
                 errorToast(error);
                 dispatch(clearErrors());
             }
             if(success){
                   successToast('product created successfully');
                   dispatch(clearSuccess());
                   navigate('/dashboard',{replace:true});
             }
    },[dispatch,error,success])
    return (
        <>
            <div className={styles.container}>
                <h5 className={styles.heading}>Create Product</h5>
                {/* create product form */}
                <form onSubmit={handleSubmit}>
                    <br />
                    <div className={styles.formfield}>
                        <label className={styles.label}>
                            Name <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            className={styles.input}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your product name..."
                        />
                    </div>
                    <br />
                    <div>
                        <label className={styles.label}>
                            Description <span className={styles.required}>*</span>
                        </label>
                        <textarea
                            cols="30"
                            required
                            rows="8"
                            type="text"
                            name="description"
                            value={description}
                            className={styles.textarea}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter your product description..."
                        ></textarea>
                    </div>
                    <br />
                    <div>
                        <label className={styles.label}>
                            Category <span className={styles.required}>*</span>
                        </label>
                        <select
                            className={styles.dropdown}
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="Choose a category" hidden>Choose a category</option>
                            {categoriesData &&
                                categoriesData.map((i) => (
                                    <option value={i.title} key={i.title}>
                                        {i.title}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <br />
                    <div>
                        <label className={styles.label}>Tags</label>
                        <input
                            type="text"
                            name="tags"
                            value={tags}
                            className={styles.input}
                            onChange={(e) => setTags(e.target.value)}
                            placeholder="Enter your product tags..."
                        />
                    </div>
                    <br />
                    <div>
                        <label className={styles.label}>Original Price</label>
                        <input
                            type="number"
                            name="price"
                            value={originalPrice}
                            className={styles.input}
                            onChange={(e) => setOriginalPrice(e.target.value)}
                            placeholder="Enter your product price..."
                        />
                    </div>
                    <br />
                    <div>
                        <label className={styles.label}>
                            Price (With Discount) <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={discountPrice}
                            className={styles.input}
                            onChange={(e) => setDiscountPrice(e.target.value)}
                            placeholder="Enter your product price with discount..."
                        />
                    </div>
                    <br />
                    <div>
                        <label className={styles.label}>
                            Product Stock <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={stock}
                            className={styles.input}
                            onChange={(e) => setStock(e.target.value)}
                            placeholder="Enter your product stock..."
                        />
                    </div>
                    <br />
                    <div>
                        <label className={styles.label}>
                            Upload Images <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="file"
                            name="images"
                            id="upload"
                            style={{ display: 'none' }}
                            multiple
                            onChange={handleImageChange}
                        />
                        <div className={styles.images}>
                            <label htmlFor="upload">
                                <AiOutlinePlusCircle size={30} className={styles.mt - 3} color="#555" />
                            </label>
                            {images &&
                                images.map((i) => (
                                    <img
                                        src={URL.createObjectURL(i)}
                                        key={i}
                                        alt=""
                                        className={styles.img}
                                    />
                                ))}
                        </div>
                        <br />
                        <div>
                            <input
                                type="submit"
                                value={isLoading?"wait":"Create"}
                                className={styles.submitbtn}
                                disabled={isLoading?true:false}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateProduct