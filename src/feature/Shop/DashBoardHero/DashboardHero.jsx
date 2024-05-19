import React, { useEffect } from 'react'
import styles from './dashboard.module.css'
import {AiOutlineMoneyCollect} from 'react-icons/ai'
import {MdBorderClear} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllShopProduct } from '../../Product/ProductSlice'
const DashboardHero = () => {
    const dispatch = useDispatch();
    const {products} = useSelector((state)=>state.product);
    const {seller} = useSelector((state)=>state.shop);
    useEffect(()=>{
            dispatch(getAllShopProduct(seller._id));
    },[dispatch]);
    return (
        <>
            <div className={styles.container}>
                <h3 className={styles.overview}>Overview</h3>
                <div className={styles.wrapper}>
                    <div className={styles.herocard}>
                        <div className={styles.normalFlex}>
                            <AiOutlineMoneyCollect
                                size={30}
                                className={styles.icon}
                                fill="#00000085"
                            />
                            <h3
                                className={`${styles.productTitle}`}
                            >
                                Account Balance{" "}
                                <span style={{fontSize:"18px"}}>(with 10% service charge)</span>
                            </h3>
                        </div>
                        <h5 className={styles.count}>${5000}</h5>
                        <Link to="/dashboard-withdraw-money">
                            <h5 className={styles.cardname}>Withdraw Money</h5>
                        </Link>
                    </div>

                    <div className={styles.herocard}>
                        <div className={styles.normalFlex}>
                            <MdBorderClear size={30} className={styles.icon} fill="#00000085" />
                            <h3
                                className={`${styles.productTitle}`}
                            >
                                All Orders
                            </h3>
                        </div>
                        <h5 className={styles.count}>{10}</h5>
                        <Link to="/dashboard-orders">
                            <h5 className={styles.cardname}>View Orders</h5>
                        </Link>
                    </div>

                    <div className={styles.herocard}>
                        <div className={styles.normalFlex}>
                            <AiOutlineMoneyCollect
                                size={30}
                                className={styles.icon}
                                fill="#00000085"
                            />
                            <h3
                                className={`${styles.productTitle}`}
                            >
                                All Products
                            </h3>
                        </div>
                        <h5 className={styles.count}>{products&&products.length}</h5>
                        <Link to="/dashboard-products">
                            <h5 className={styles.cardname}>View Products</h5>
                        </Link>
                    </div>
                </div>
                <br />
                {/* <h3 className="text-[22px] font-Poppins pb-2">Latest Orders</h3>
                <div className="w-full min-h-[45vh] bg-white rounded">
                    <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
                </div> */}
            </div>
        </>
    )
}

export default DashboardHero