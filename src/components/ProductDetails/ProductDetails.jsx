import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMessage, AiFillHeart, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating.jsx'
import './productdetails.css'
import { useDispatch, useSelector } from 'react-redux';
import { errorToast, successToast } from '../../utils/toastMessage.js';
import { AddToCartAsync } from '../../redux/Slices/cartSlice.jsx';
import { AddToWishlistAsync, RemoveFromWishlistAsync } from '../../redux/Slices/wishlistSlice.jsx';
const ProductDetails = ({ data, setOpen }) => {
    const [click, setClick] = useState(false);
    const [count, setCount] = useState(1);
    const {cart} = useSelector((state)=>state.cart);
    const {wishlist} = useSelector((state)=>state.wishlist);
    const dispatch = useDispatch();
    
    const decrementCount = () => {
        if (count > 1) {
          setCount((prev)=>prev-1);
        }
      };
    
      const incrementCount = () => {
        setCount((prev)=>prev+1);
      };
      const addToCartHandler = (id) => {
        const isItemExists = cart && cart.find((i) => i._id === id);
        if (isItemExists) {
          errorToast("Item already in cart!");
        } else {
          if (data.stock < count) {
            errorToast("Product stock limited!");
          } else {
            const cartData = { ...data, qty: count };
            dispatch(AddToCartAsync(cartData));
            successToast("Item added to cart successfully!");
          }
        }
      };

      useEffect(() => {
        if (wishlist && wishlist.find((i) => i._id === data._id)) {
          setClick(true);
        } else {
          setClick(false);
        }
      }, [wishlist]);
    
      const removeFromWishlistHandler = (data) => {
        setClick(!click);
        dispatch(RemoveFromWishlistAsync(data));
      };
    
      const addToWishlistHandler = (data) => {
        setClick(!click);
        dispatch(AddToWishlistAsync(data));
      };
    return (
        <>
            <div className="product_details_section">
                {data ? (
                    <div className="product_details_subsection">
                        <div className="product_detail_wrapper">
                            <RxCross1
                                size={30}
                                className="cross_icon"
                                onClick={() => setOpen(false)}
                            />

                            <div className="detail_wrapper">
                                <div className="detail_wrapper_section1">
                                    <img src={`${data.images && data.images[0]?.url}`} className='product_img' alt="" />
                                    <div className="flex">
                                        <Link to={`/shop/preview/${data?.shop?._id}`} className="d-flex">
                                            <img
                                                src={`http://localhost:8000/${data.shop.avatar && data.shop?.avatar}`}
                                                alt=""
                                                className="shop_preview"
                                            />
                                            <div>
                                                <h3 className='shop_name'>
                                                    {data.shop.name}
                                                </h3>
                                                <h5 className="rating"><Rating rating={data?.rating}/></h5>
                                            </div>
                                        </Link>
                                    </div>
                                    
                                    <h5 className="sold_out">{data?.sold_out} Sold out</h5>
                                </div>

                                <div className="detail_wrapper_section2">
                                    <h1 className="product_title">
                                        {data?.name}
                                    </h1>
                                    <p>{data?.description}</p>

                                    <div className="d-flex pt-3">
                                        <h4 className="discount_price">
                                            {"₹ "+data.discountPrice}
                                        </h4>
                                        <h3 className="price">
                                            {data.originalPrice ? "₹ "+data.originalPrice  : null}
                                        </h3>
                                    </div>
                                    <div className="increment_decrement_btn">
                                        <div>
                                            <button
                                                className="decrement_btn"
                                                onClick={decrementCount}
                                            >
                                                -
                                            </button>
                                            <span className="count">
                                                {count}
                                            </span>
                                            <button
                                                className="increment_btn"
                                                onClick={incrementCount}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className='add_remove_wishlist'>
                                            {click ? (
                                                <AiFillHeart
                                                    size={30}
                                                    className="cursor-pointer"
                                                    onClick={() => removeFromWishlistHandler(data)}
                                                    color={click ? "red" : "#333"}
                                                    title="Remove from wishlist"
                                                />
                                            ) : (
                                                <AiOutlineHeart
                                                    size={30}
                                                    className="cursor-pointer"
                                                    onClick={() => addToWishlistHandler(data)}
                                                    title="Add to wishlist"
                                                />
                                            )}
                                        </div>
                                    </div>

                                    <div
                                        className='add_to_cart_btn'
                                        onClick={() => addToCartHandler(data._id)}
                                    >
                                        <span>
                                            Add to cart <AiOutlineShoppingCart className="ms-1" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    )
}

export default ProductDetails