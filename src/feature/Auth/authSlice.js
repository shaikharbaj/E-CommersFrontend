import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/axios";
import { createUser, loginUser } from "./authAPI";
const initialState = {
  loading: null,
  userInfo: null,
  isAuthenticated: false,
  error: null,
};

//register user async
export const createUserAsync = createAsyncThunk(
  "auth/createUser",
  async (userdata, { rejectWithValue }) => {
    try {
      console.log("called");
      const response = await api.post("/user/create_user", userdata, {
        rejectWithValue,
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//login user
export const loginUserAsync = createAsyncThunk(
  "auth/loginUser",
  async (userdata, { rejectWithValue }) => {
    try {
      const response = await api.post("/user/login_user", userdata);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//loadUser......
export const loadUserAsync = createAsyncThunk("auth/loadUser", async () => {
  try {
    const response = await api.get("/user/loadUser");
    return response.data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

//logout user......
export const logoutUserAsync = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await api.get("/user/logout");
    return response.data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setCredential: (state, action) => {},
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.userInfo = action.payload;
      state.isAuthenticated=true;
      state.loading = false;
      state.error = false;
      // localStorage.setItem('user_Info',JSON.stringify(action.payload));
    },
    signUpSuccess: (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
      state.error = false;
      // localStorage.setItem('user_Info',JSON.stringify(action.payload));
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout:(state,action)=>{
         state.loading=false;
         state.error=false;
         state.isAuthenticated=false;
         state.userInfo=null
    },
    clearErrors: (state, action) => {
      state.loading = false;
      state.error = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUserAsync.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(loadUserAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.userInfo = action.payload.user;
        state.loading = false;
        state.error = false;
      })
      .addCase(loadUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        state.userInfo = null;
      });
  },
});

export default authSlice.reducer;
export const { clearErrors, signInStart, signInFailure, signInSuccess,logout ,signUpSuccess} =
  authSlice.actions;
