import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { productData } from '../../static/data';
import styles from '../Cart/cart.module.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromWishlistAsync } from '../../redux/Slices/wishlistSlice';
import { AddToCartAsync } from '../../redux/Slices/cartSlice';
const Wishlist = ({ setOpenWishlist }) => {
    const { wishlist } = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();
    const removeFromWishlistHandler = (data) => {
        dispatch(RemoveFromWishlistAsync(data));
    };

    const addToCartHandler = (data) => {
        const newData = { ...data, qty: 1 };
        dispatch(AddToCartAsync(newData));
        setOpenWishlist(false);
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.cart_container}>

                    {
                        wishlist && wishlist.length == 0 ? <>
                            <div className={styles.empty_cart_wrapper}>
                                <div className={styles.cross_icon_container}>
                                    <RxCross1
                                        size={25}
                                        className="cursor-pointer"
                                        onClick={() => setOpenWishlist(false)}
                                    />
                                </div>
                                <h5>Wishlist is empty!</h5>
                            </div>
                        </> : <>
                            <div className={styles.cart}>
                                <div className={styles.cart_cross_close_icon}>
                                    <RxCross1
                                        size={25}
                                        className="cursor-pointer"
                                        onClick={() => setOpenWishlist(false)}
                                    />
                                </div>
                                <div className={`${styles.noramlFlex}`}>
                                    <AiOutlineHeart size={25} />
                                    <h5 className={styles.cart_length}>
                                        {wishlist && wishlist.length} items
                                    </h5>
                                </div>

                                {/* cart Single Items */}
                                <br />
                                <div className={styles.cart_item_container}>
                                    {/* <WishlistSingle /> */}
                                    {wishlist &&
                                        wishlist.map((i, index) => (
                                            <WishlistSingle
                                                key={index}
                                                data={i}
                                                removeFromWishlistHandler={removeFromWishlistHandler} addToCartHandler={addToCartHandler}
                                            />
                                        ))}
                                </div>
                            </div>

                            <div className={styles.checkoutbtn}>
                                {/* checkout buttons */}
                                <Link to="/checkout">
                                    <div

                                    >
                                        <h1>
                                            Checkout Now (USD${100})
                                        </h1>
                                    </div>
                                </Link>
                            </div>
                        </>
                    }



                </div>
            </div>
        </>
    )
}

export default Wishlist


const WishlistSingle = ({ data, removeFromWishlistHandler, addToCartHandler }) => {
    console.log(data);
    // const data = productData[0];
    return <>
        <div className={styles.single_cart_wrapper}>
            <div className={styles.single_cart_item}>
                <RxCross1
                    className="cursor-pointer"
                    size={22}
                    onClick={() => removeFromWishlistHandler(data)}
                />
                <img
                    src={`${data?.images[0]?.url}`}
                    alt=""
                    className={`${styles.image}`}
                />
                <div className={styles.info}>
                    <h1>{data.name}</h1>
                    <h4 className={styles.totalPrice}>
                        {`₹ ${data?.originalPrice}`}
                    </h4>
                </div>
                <BsCartPlus size={25} title='add_to_cart' onClick={() => addToCartHandler(data)}></BsCartPlus>
            </div>
        </div>
    </>
}