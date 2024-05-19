import React from 'react'
import styles from '../feature/Shop/AllProduct/allproduct.module.css'
import DashBoardHeader from '../feature/Shop/Layout/DashboardHeader/DashBoardHeader'
import DashBoardSidebar from '../feature/Shop/Layout/DashBoardSidebar/DashBoardSidebar'
import CreateProduct from '../feature/Shop/CreateProduct/CreateProduct'
const ShopCreateProductPage = () => {
  return (
    <div>
    <DashBoardHeader />
    <div className={styles.shopallproductpage}>
      <div className={styles.sidebarwrapper}>
        <DashBoardSidebar active={3} />
      </div>
      <div className={styles.component_wrapper}>
        < CreateProduct />
      </div>
    </div>
  </div>
  )
}

export default ShopCreateProductPage