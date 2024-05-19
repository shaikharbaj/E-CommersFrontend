import React, { useState } from 'react'
import styles from './profileContent.module.css'
import { useSelector } from 'react-redux'
import { AiOutlineCamera } from 'react-icons/ai'
const ProfileContent = ({ active }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [name, setName] = useState(userInfo && userInfo.name);
  const [email, setEmail] = useState(userInfo && userInfo.email);
  const [phoneNumber, setPhoneNumber] = useState(userInfo && userInfo.phoneNumber);
  const [avatar, setAvatar] = useState(null);
  return (
    <div className='w-100'>

      {
        active===1 && <>
          {/* for profile   */}
          <div className={styles.image_upload_section}>
            <div className="position-relative">
              <img
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR77iOanUEwD6cR1bth7E0y0jnAJCnDH6Zp1Q&usqp=CAU`}
                className={styles.profile_img}
                alt="profile_img"
              />
              <div className={styles.camera_icon}>
                <input
                  type="file"
                  id="image"
                  className="d-none"
                // onChange={handleImage}
                />
                <label htmlFor="image">
                  <AiOutlineCamera />
                </label>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className={styles.profile_container}>
            <form aria-required={true}>
              <div className={styles.profile_info_section}>
                <div className={styles.fullName}>
                  <label className={styles.fullname_label}>Full Name</label>
                  <input
                    type="text"
                    className={`${styles.fullname_input}`}
                    required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={styles.fullName}>
                  <label className="block pb-2">Email Address</label>
                  <input
                    type="text"
                    className={`${styles.email}`}
                    required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.profile_info_section}>
                <div className={styles.fullName}>
                  <label className='d-block pb-2'>Phone Number</label>
                  <input
                    type="number"
                    className={`${styles.fullname_input}`}
                    required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className={styles.fullName}>
                  <label className="block pb-2">Zip Code</label>
                  <input
                    type="text"
                    className={`${styles.email}`}
                    required
                  // value={}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.profile_info_section}>
                <div className={styles.fullName}>
                  <label className='d-block pb-2'>Address 1</label>
                  <input
                    type="text"
                    className={`${styles.fullname_input}`}
                    required
                  // value={phoneNumber}
                  // onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className={styles.fullName}>
                  <label className="block pb-2">Address 2</label>
                  <input
                    type="text"
                    className={`${styles.email}`}
                    required
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <input
                className={`${styles.profile_update_btn}`}
                required
                value="Update"
                type="submit"
              />
            </form>
          </div>
        </>
      }
    </div>
  )
}

export default ProfileContent