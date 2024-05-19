import React ,{useState} from 'react'
import styles from './profilesidebar.module.css'
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import api from '../../utils/axios';
import { errorToast,successToast } from '../../utils/toastMessage';
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { TbAddressBook } from "react-icons/tb";
import {
  MdOutlineAdminPanelSettings,
  MdOutlinePassword,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {logout} from '../Auth/authSlice'
const Profilesidebar = ({ active, setActive }) => {
   
  const {isAuthenticated} = useSelector((state)=>state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const logoutHandler=async()=>{
    setLoading(true);
    setError(false);
    try {
         const response = await api.get("/user/logout");
         const data = response.data;
         setLoading(false);
         if (data.success) {
              successToast(data.message);
              dispatch(logout());
              navigate("/");
         }
    } catch (error) {
         setError(error.response.data.message);
         errorToast(error?.response?.data?.message || 'something went wrong');
         setLoading(false);
    }
  }
  return (
    <>
      <div className={styles.profile_sidebar}>
        <div
          className={styles.profile}
          onClick={() => setActive(1)}
        >
          <RxPerson size={20} color={active === 1 ? "red" : ""} />
          <span
            className={`${active === 1 ? "red_color" : ""
              }`}
          >
            Profile
          </span>
        </div>


        <div
          className={styles.profile}
          onClick={() => setActive(2)}
        >
          <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : ""}/>
          <span
            className={`${active === 2 ? "red_color" : ""
              }`}
          >
            Orders
          </span>
        </div>
        <div
          className={styles.profile}
          onClick={() => setActive(3)}
        >
          <HiOutlineReceiptRefund size={20} color={active === 3 ? "red" : ""} />
          <span
            className={`${active === 3 ? "red_color" : ""
              }`}
          >
            Refunds
          </span>
        </div>

        <div
          className={styles.profile}
          onClick={() => setActive(4) || navigate("/inbox")}
        >
          <AiOutlineMessage size={20} color={active === 4 ? "red" : ""} />
          <span
            className={` ${active === 4 ? "red_color" : ""
              }`}
          >
            Inbox
          </span>
        </div>

        <div
          className={styles.profile}
          onClick={() => setActive(5)}
        >
          <MdOutlineTrackChanges size={20} color={active === 5 ? "red" : ""} />
          <span
            className={`${active === 5 ? "red_color" : ""
              }`}
          >
            Track Order
          </span>
        </div>

        <div
          className={styles.profile}
          onClick={() => setActive(6)}
        >
          <RiLockPasswordLine size={20} color={active === 6 ? "red" : ""} />
          <span
            className={`${active === 6 ? "red_color" : ""
              }`}
          >
            Change Password
          </span>
        </div>

        <div
          className={styles.profile}
          onClick={() => setActive(7)}
        >
          <TbAddressBook size={20} color={active === 7 ? "red" : ""} />
          <span
            className={`${active === 7 ? "red_color" : ""
              }`}
          >
            Address
          </span>
        </div>

        {/* {user && user?.role === "Admin" && (
          <Link to="/admin/dashboard">
            <div
              className="flex items-center cursor-pointer w-full mb-8"
              onClick={() => setActive(8)}
            >
              <MdOutlineAdminPanelSettings
                size={20}
                color={active === 7 ? "red" : ""}
              />
              <span
                className={`pl-3 ${active === 8 ? "text-[red]" : ""
                  } 800px:block hidden`}
              >
                Admin Dashboard
              </span>
            </div>
          </Link>
        )} */}
         {
            isAuthenticated && <div
            className={styles.profile}
            onClick={logoutHandler}
            
          >
            <AiOutlineLogin size={20} color={active === 8 ? "red" : ""} />
            <span
              className={`${active === 8 ? "text-[red]" : ""
                }`}
            >
              Log out
            </span>
          </div>
         }
      </div>
    </>
  )
}

export default Profilesidebar