import React from 'react'
import styles from './dashboardsidebar.module.css'
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
const DashBoardSidebar = ({active}) => {
    return (
        <>
            <div className={styles.sidebarcontainer}>
                {/* single item */}
                <div className={styles.singleItem}>
                    <Link to="/dashboard">
                        <RxDashboard
                            size={30}
                            color={`${active === 1 ? "crimson" : "#555"}`}
                        />
                        <h5
                            className={`${styles.sidebarnav} ${active==1?styles.text_crimson:styles.text_white}`}
                           
                        >
                            Dashboard
                        </h5>
                    </Link>
                </div>
{/* 
                <div className={styles.singleItem}>
                    <Link to="/dashboard-orders" >
                        <FiShoppingBag
                            size={30}
                            color={`${active === 2 ? "crimson" : "#555"}`}
                        />
                        <h5
                            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? "text-[crimson]" : "text-[#555]"
                                }`}
                        >
                            All Orders
                        </h5>
                    </Link>
                </div> */}

                <div className={styles.singleItem}>
                    <Link to="/dashboard-products" >
                        <FiPackage size={30} color={`${active === 2 ? "crimson" : "#555"}`} />
                        <h5
                            className={`${styles.sidebarnav} ${active==2?styles.text_crimson:styles.text_white}`}
                        >
                            All Products
                        </h5>
                    </Link>
                </div>

                <div className={styles.singleItem}>
                    <Link
                        to="/dashboard-create-product"
                        
                    >
                        <AiOutlineFolderAdd
                            size={30}
                            color={`${active === 3 ? "crimson" : "#555"}`}
                        />
                        <h5
                            className={`${styles.sidebarnav} ${active==3?styles.text_crimson:styles.text_white}`}
                        >
                            Create Product
                        </h5>
                    </Link>
                </div>

                <div className={styles.singleItem}>
                    <Link to="/dashboard-events" >
                        <MdOutlineLocalOffer
                            size={30}
                            color={`${active === 4 ? "crimson" : "#555"}`}
                        />
                        <h5
                           className={`${styles.sidebarnav} ${active==4?styles.text_crimson:styles.text_white}`}
                        >
                            All Events
                        </h5>
                    </Link>
                </div>

                <div className={styles.singleItem}>
                    <Link to="/dashboard-create-event" >
                        <VscNewFile
                            size={30}
                            color={`${active === 5 ? "crimson" : "#555"}`}
                        />
                        <h5
                            className={`${styles.sidebarnav} ${active==5?styles.text_crimson:styles.text_white}`}
                        >
                            Create Event
                        </h5>
                    </Link>
                </div>

                {/* <div className={styles.singleItem}>
                    <Link
                        to="/dashboard-withdraw-money"
                        
                    >
                        <CiMoneyBill
                            size={30}
                            color={`${active === 7 ? "crimson" : "#555"}`}
                        />
                        <h5
                            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 7 ? "text-[crimson]" : "text-[#555]"
                                }`}
                        >
                            Withdraw Money
                        </h5>
                    </Link>
                </div> */}

                <div className={styles.singleItem}>
                    <Link to="/dashboard-coupouns" >
                        <AiOutlineGift
                            size={30}
                            color={`${active === 6 ? "crimson" : "#555"}`}
                        />
                        <h5
                            className={`${styles.sidebarnav} ${active==6?styles.text_crimson:styles.text_white}`}
                        >
                            Discount Codes
                        </h5>
                    </Link>
                </div>

                {/* <div className={styles.singleItem}>
                    <Link to="/dashboard-refunds" >
                        <HiOutlineReceiptRefund
                            size={30}
                            color={`${active === 10 ? "crimson" : "#555"}`}
                        />
                        <h5
                            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 10 ? "text-[crimson]" : "text-[#555]"
                                }`}
                        >
                            Refunds
                        </h5>
                    </Link>
                </div> */}

                <div className={styles.singleItem}>
                    <Link to="/settings" >
                        <CiSettings
                            size={30}
                            color={`${active === 7 ? "crimson" : "#555"}`}
                        />
                        <h5
                           className={`${styles.sidebarnav} ${active==7?styles.text_crimson:styles.text_white}`}
                        >
                            Settings
                        </h5>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default DashBoardSidebar