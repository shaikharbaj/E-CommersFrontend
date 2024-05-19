import React, { useEffect, useState } from 'react'
import styles from './shopinfo.module.css'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getAllShopProduct } from '../../Product/ProductSlice';
import api from '../../../utils/axios';
const ShopInfo = ({ isOwner }) => {
    const [data, setData] = useState({});
    const { products } = useSelector((state) => state.product);
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();

    const loadShopProduct = async () => {
        setIsLoading(true);
        await api.get(`/shop/get-shop-info/${id}`).then((res) => {
            setData(res.data.shop);
            setIsLoading(false);
        }).catch((error) => {
            console.log(error);
            setIsLoading(false);
        })
    }
    useEffect(() => {
        dispatch(getAllShopProduct(id));
        loadShopProduct();
    }, [])
    console.log(data)
    return (
        <>
            <div>
                <div className={styles.profile_wrapper}>
                    <div className={styles.img_wrapper}>
                        <img
                            src={`http://localhost:8000/${data.avatar}`}
                            alt=""
                            className={styles.img}
                        />
                    </div>
                    <h3 className={styles.shopname}>{data.name}</h3>
                    <p className={styles.shop_description}>
                        this is the decription of this shop
                    </p>
                </div>
                <div className={styles.address}>
                    <h5>Address</h5>
                    <h4>{data.address}</h4>
                </div>
                <div className={styles.address}>
                    <h5 >Phone Number</h5>
                    <h4 >{data.phoneNumber}</h4>
                </div>
                <div className={styles.address}>
                    <h5 >Total Products</h5>
                    <h4 >{products && products.length}</h4>
                </div>
                <div className={styles.address}>
                    <h5 >Shop Ratings</h5>
                    <h4 className="text-[#000000b0]">{3}/5</h4>
                </div>
                <div className={styles.address}>
                    <h5 >Joined On</h5>
                    <h4 className="text-[#000000b0]">{data?.createdAt?.slice(0, 10)}</h4>
                </div>
                {isOwner && (
                    <div className={styles.isOwner}>
                        <Link to="/settings">
                            <div className={`${styles.button}`}>
                                <span>Edit Shop</span>
                            </div>
                        </Link>
                        <div className={`${styles.button}`}
                        // onClick={logoutHandler}
                        >
                            <span>Log Out</span>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ShopInfo