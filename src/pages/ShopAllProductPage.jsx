import React from 'react'
import DashBoardHeader from '../feature/Shop/Layout/DashboardHeader/DashBoardHeader'
import DashBoardSidebar from '../feature/Shop/Layout/DashBoardSidebar/DashBoardSidebar'
import AllProduct from '../feature/Shop/AllProduct/AllProduct'
import styles from '../feature/Shop/AllProduct/allproduct.module.css'
const ShopAllProductPage = () => {
  return (
    <>
      <div>
        <DashBoardHeader />
        <div className={styles.shopallproductpage}>
          <div className={styles.sidebarwrapper}>
            <DashBoardSidebar active={2} />
          </div>
          <div className={styles.component_wrapper}>
            < AllProduct />
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopAllProductPage