import React, { useState } from 'react'
import DashBoardHeader from '../feature/Shop/Layout/DashboardHeader/DashBoardHeader'
import styles from '../feature/Shop/Layout/DashboardHeader/dashboardHeader.module.css'
import DashBoardSidebar from '../feature/Shop/Layout/DashBoardSidebar/DashBoardSidebar'
import DashboardHero from '../feature/Shop/DashBoardHero/DashboardHero'
const ShopDashboardPage = () => {
    return (
        <>
            <div>
                <DashBoardHeader />
                <div className={styles.container}>
                    <div className={styles.sidebarWrapper}>
                        <DashBoardSidebar active={1}/>
                    </div>
                    <DashboardHero/>
                </div>
            </div>
        </>
    )
}

export default ShopDashboardPage