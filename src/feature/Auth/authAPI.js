import api from "../../utils/axios.js";
import { successToast,errorToast } from "../../utils/toastMessage.js";

export const createUser = async (userdata) => {
  try {
    const response = await api.post("/user/create_user", userdata);
    const data = response.data;
    if (data.success) {
         successToast(data.message);
    }
    return data;
  } catch (err) {
       errorToast(err.response.data.message)
       throw err;
  }
};

export const loginUser =async(userdata)=>{
    try {
        const response = await api.post("/user/login_user", userdata);
        const data = response.data;
        if (data.success) {
             successToast('user logged in successfully');
        }
        return data;
    } catch (error) {
        errorToast(err.response.data.message)
        throw err;
    }
}
