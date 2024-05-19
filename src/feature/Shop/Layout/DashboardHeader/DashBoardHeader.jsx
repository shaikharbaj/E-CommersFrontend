import React from "react";
import styles from './dashboardHeader.module.css'
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";

const DashBoardHeader = () => {
    const { seller } = useSelector((state) => state.shop);
    return (
        <div className={styles.dashboardHeader}>
            <div>
                <Link to="/dashboard">
                    <h1 className={styles.navLogo}>E-Commerce</h1>
                </Link>
            </div>
            <div className='d-flex align-item-center'>
                <div className={styles.dashboardNav}>
                    <Link to="/dashboard/cupouns" className={styles.navlink}>
                        <AiOutlineGift
                            color="#555"
                            size={30}
                            className="mx-5 cursor-pointer"
                        />
                    </Link>
                    <Link to="/dashboard-events" className={styles.navlink}>
                        <MdOutlineLocalOffer
                            color="#555"
                            size={30}
                            className={styles.navIcon}
                        />
                    </Link>
                    <Link to="/dashboard-products" className={styles.navlink}>
                        <FiShoppingBag
                            color="#555"
                            size={30}
                            className={styles.navIcon}
                        />
                    </Link>
                    <Link to="/dashboard-orders" className={styles.navlink}>
                        <FiPackage color="#555" size={30} className={styles.navIcon} />
                    </Link>
                    <Link to="/dashboard-messages" className={styles.navlink}>
                        <BiMessageSquareDetail
                            color="#555"
                            size={30}
                            className={styles.navIcon}
                        />
                    </Link>
                    <Link to={`/shop/${seller?._id}`}>
                        <img
                            src={`http://localhost:8000/${seller?.avatar}`}
                            alt=""
                            className={styles.dashboardprofile}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DashBoardHeader