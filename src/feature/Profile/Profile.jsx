import React from 'react'
import styles from './profile.module.css'
import ProfileContent from './ProfileContent'
import Profilesidebar from './Profilesidebar'
import { useState } from 'react'
const Profile = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
        <>
             <div className={styles.section}>
                 <div className={styles.sidebar_section}>
                     <Profilesidebar active={active} setActive={setActive}/>
                 </div>
                 <ProfileContent active={active}/>
             </div>
            
        </>
    </div>
  )
}

export default Profile