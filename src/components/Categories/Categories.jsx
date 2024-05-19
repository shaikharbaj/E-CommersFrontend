import React from 'react'
import './categories.css'
import { brandingData, categoriesData } from '../../static/data.jsx'
import { useNavigate } from 'react-router-dom'
const Categories = () => {
    const navigate =useNavigate();
    const handleSubmit = (i) => {
        navigate(`/products?category=${i.title}`);
    };
    return (
        <>
            <div className="branding">
                <div
                    className="branding_section"
                >
                    {brandingData &&
                        brandingData.map((i, index) => (
                            <div className="d-flex align-items-start" key={index}>
                                {i.icon}
                                <div className="px-3">
                                    <h3 className="branding_title">{i.title}</h3>
                                    <p className="branding_description">{i.Description}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div
                className="categories"
                id="categories"
            >
                <div className="catogory_section">
                    {categoriesData &&
                        categoriesData.map((i) => {
                            return (
                                <div
                                    className="category_wrapper"
                                    key={i.id}
                                    onClick={() => handleSubmit(i)}
                                >
                                    <h5 className="category_title">{i.title}</h5>
                                    <img
                                        src={i.image_Url}
                                        className="category_image"
                                        alt=""
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    )
}

export default Categories