import React, { useEffect, useState } from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import Rating from '../Rating/Rating'
import ProductDetails from '../ProductDetails/ProductDetails'
import { useDispatch, useSelector } from 'react-redux'
import { errorToast, successToast } from '../../utils/toastMessage'
import { AddToCartAsync, addToCart } from '../../redux/Slices/cartSlice'
import { AddToWishlistAsync, RemoveFromWishlistAsync } from '../../redux/Slices/wishlistSlice'
const ProductCard = ({ data }) => {
      const [cartOpen,setCartOpen] = useState(false);
      const dispatch = useDispatch();
      const [click, setClick] = useState(false);
      const {cart} = useSelector((state)=>state.cart);
      const {wishlist} = useSelector((state)=>state.wishlist);

      const [open,setOpen] = useState(false);
 
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
      const AddToCartHandler=(id)=>{
        const isItemExists = cart && cart.find((i) => i._id === id);
        if (isItemExists) {
          errorToast("Item already in cart!");
        } else {
          if (data.stock < 1) {
            errorToast("Product stock limited!");
          } else {
            const cartData = { ...data, qty: 1 };
            dispatch(AddToCartAsync(cartData));
            successToast("Item added to cart successfully!");
          }
        }
      }

  return (
    <>
      <div className='productcard mb-1'>
        <div className='flex justify-content-end'></div>
        <Link to={`/product/${data._id}`} className='product_img_container'>
          <img src={data.images[0].url} alt="" className='img-fluid' />
        </Link>
        <Link to={"/"}>
          <h5 className='shop_name'>{data.shop.name}</h5>
        </Link>
        <Link to={"/"} className='product_name'>
          <h4 className='pb-2'>{data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}</h4>

          <div className="d-flex">
            <div className="rating">
              <Rating rating={data?.rating} />
            </div>
          </div>

          <div className="price_discount_sold">
            <div className="d-flex">
              <h5 className="product_discount_price">
                {`₹ ${data?.discountPrice}`}
              </h5>
              <h4 className={`product_price`}>
                {`₹ ${data.originalPrice ? data.originalPrice : ''}`}
              </h4>
            </div>
            <span className="sold_item">
              {`${data?.sold_out} sold`}
            </span>
          </div>
        </Link>
        <div className='product_cart_icon'>
          {
             click ? <i class='bx bxs-heart wishlist_icon added_to_wishlist' onClick={()=>removeFromWishlistHandler(data)}></i>:<i className='bx bx-heart wishlist_icon' onClick={()=>addToWishlistHandler(data)}></i>
          }
          <i className='bx bx-show-alt eye_icon' onClick={()=>setOpen(true)}></i>
          <i className='bx bx-cart-alt cart_icon' onClick={()=>AddToCartHandler(data._id)} ></i>
          {open ? <ProductDetails setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </>
  )
}

export default ProductCard;