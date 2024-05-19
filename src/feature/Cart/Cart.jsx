import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { productData } from '../../static/data';
import styles from './cart.module.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCartAsync, RemoveFromCartAsync } from '../../redux/Slices/cartSlice';
import { errorToast } from '../../utils/toastMessage';
const Cart = ({ setCartOpen }) => {
    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const removeFromCartHandler = (data) => {
        dispatch(RemoveFromCartAsync(data));
    };

    const totalPrice = cart.reduce(
        (acc, item) => acc + item.qty * item.discountPrice,
        0
    );
    const quantityChangeHandler = (data) => {
        dispatch(AddToCartAsync(data));
    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.cart_container}>
                    {
                        cart && cart.length > 0 ? <>
                            <div className={styles.cart}>
                                <div className={styles.cart_cross_close_icon}>
                                    <RxCross1
                                        size={25}
                                        className="cursor-pointer"
                                        onClick={() => setCartOpen(false)}
                                    />
                                </div>
                                <div className={`${styles.noramlFlex}`}>
                                    <IoBagHandleOutline size={25} />
                                    <h5 className={styles.cart_length}>

                                        {cart && cart.length} items
                                    </h5>
                                </div>

                                {/* cart Single Items */}
                                <br />
                                <div className={styles.cart_item_container}>
                                    {cart &&
                                        cart.map((i, index) => (
                                            <CartSingle
                                                key={index}
                                                data={i}
                                                quantityChangeHandler={quantityChangeHandler}
                                                removeFromCartHandler={removeFromCartHandler}
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
                                            Checkout Now ({`₹ ${totalPrice}`})
                                        </h1>
                                    </div>
                                </Link>
                            </div>
                        </> : <>
                            <div className={styles.empty_cart_wrapper}>
                                <div className={styles.cross_icon_container}>
                                    <RxCross1
                                        size={25}
                                        className="cursor-pointer"
                                        onClick={() => setCartOpen(false)}
                                    />
                                </div>
                                <h5>Cart Items is empty!</h5>
                            </div>
                        </>
                    }



                </div>
            </div>
        </>
    )
}

export default Cart


const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
    const [value, setValue] = useState(data.qty);
    const totalPrice = data.discountPrice * value;

    const increment = (data) => {
        if (data.stock < value) {
            errorToast("Product stock limited!");
        } else {
            setValue(value + 1);
            const updateCartData = { ...data, qty: value + 1 };
            quantityChangeHandler(updateCartData);
        }
    };

    const decrement = (data) => {
        setValue(value === 1 ? 1 : value - 1);
        const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
        quantityChangeHandler(updateCartData);
    };
    return <>
        <div className={styles.single_cart_wrapper}>
            <div className={styles.single_cart_item}>
                <div>
                    <div
                        className={styles.increment}
                        onClick={() => increment(data)}
                    >
                        <HiPlus size={18} color="#fff" />
                    </div>
                    <span className={styles.quantity}>{data.qty}</span>
                    <div
                        className={styles.decrement}
                        onClick={() => decrement(data)}
                    >
                        <HiOutlineMinus size={16} color="#7d879c" />
                    </div>
                </div>
                <img
                    src={`${data?.images[0]?.url}`}
                    alt=""
                    className={`${styles.image}`}
                />
                <div className={styles.info}>
                    <h1>{data.name}</h1>
                    <h4 className={styles.discount_price}>
                        {`₹ ${data.discountPrice}`}

                    </h4>
                    <h4 className={styles.totalPrice}>
                        {`₹ ${totalPrice}`}
                    </h4>
                </div>
                <RxCross1
                    className="cursor-pointer"
                    size={22}
                    onClick={() => removeFromCartHandler(data)}
                />
            </div>
        </div>
    </>
}
export { CartSingle }