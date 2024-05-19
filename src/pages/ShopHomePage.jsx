import React from 'react'
import ShopInfo from '../feature/Shop/ShopInfo/ShopInfo'
import styles from '../feature/Shop/ShopInfo/shopinfo.module.css'
import ShopProfileData from '../feature/Shop/ShopProfileData/ShopProfileData'
const ShopHomePage = () => {
  return (
    <>
      <div className={`${styles.Sp_container}`}>
        <div className={styles.Sp_wrapper}>
          <div className={styles.Sp_shopinfowrapper}>
            <ShopInfo isOwner={true} />
          </div>
          <div className={styles.Sp_profiledatawrapper}>
            <ShopProfileData isOwner={true} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopHomePage