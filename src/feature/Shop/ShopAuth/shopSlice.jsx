import { createSlice } from "@reduxjs/toolkit";
import api from "../../../utils/axios";


//register user async
// export const createUserAsync = createAsyncThunk(
//     "auth/createUser",
//     async (userdata, { rejectWithValue }) => {
//         try {
//             console.log("called");
//             const response = await api.post("/user/create_user", userdata, {
//                 rejectWithValue,
//             });
//             return response.data;
//         } catch (error) {
//             if (error.response && error.response.data.message) {
//                 return rejectWithValue(error.response.data.message);
//             } else {
//                 return rejectWithValue(error.message);
//             }
//         }
//     }
// );

//login user
// export const loginUserAsync = createAsyncThunk(
//     "auth/loginUser",
//     async (userdata, { rejectWithValue }) => {
//         try {
//             const response = await api.post("/user/login_user", userdata);
//             return response.data;
//         } catch (error) {
//             if (error.response && error.response.data.message) {
//                 return rejectWithValue(error.response.data.message);
//             } else {
//                 return rejectWithValue(error.message);
//             }
//         }
//     }
// );

//loadUser......
// export const loadUserAsync = createAsyncThunk("auth/loadUser", async () => {
//     try {
//         const response = await api.get("/user/loadUser");
//         return response.data;
//     } catch (error) {
//         if (error.response && error.response.data.message) {
//             return rejectWithValue(error.response.data.message);
//         } else {
//             return rejectWithValue(error.message);
//         }
//     }
// });

//logout user......
// export const logoutUserAsync = createAsyncThunk("auth/logout", async () => {
//     try {
//         const response = await api.get("/user/logout");
//         return response.data;
//     } catch (error) {
//         if (error.response && error.response.data.message) {
//             return rejectWithValue(error.response.data.message);
//         } else {
//             return rejectWithValue(error.message);
//         }
//     }
// });

const initialState = {
    isLoading: true
}
const shopSlice = createSlice({
    initialState,
    name: "shop",
    reducers: {
        LoadSellerRequest: (state) => {
            state.isLoading = true;
        },
        LoadSellerSuccess: (state, action) => {
            state.isSeller = true;
            state.isLoading = false;
            state.seller = action.payload;
        },
        LoadSellerFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.isSeller = false;
        },

        // get all sellers ---admin
        getAllSellersRequest: (state) => {
            state.isLoading = true;
        },
        getAllSellersSuccess: (state, action) => {
            state.isLoading = false;
            state.sellers = action.payload;
        },
        getAllSellerFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        clearErrors: (state) => {
            state.error = null;
        }
    }
});



export default shopSlice.reducer;
export const {LoadSellerRequest,LoadSellerSuccess,LoadSellerFail,getAllSellersRequest,getAllSellersSuccess,getAllSellerFailed,clearErrors } =
    shopSlice.actions;


//thunk..........
export function loadSeller(){
    return async function loadUserThunk(dispatch,getState){
        try {
              dispatch(LoadSellerRequest());
              const response = await api.get('/shop/loadseller');
              const data = await response?.data?.seller;
              dispatch(LoadSellerSuccess(data));
        } catch (error) {
              dispatch(LoadSellerFail(error.response.data.message));
        }
    }
}
