import { createSlice } from "@reduxjs/toolkit";
import api from "../../utils/axios";
const initialState = {
    isLoading: false,
    key:0
}
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        //create product
        productCreateRequest: (state) => {
            state.isLoading = true;
        },
        productCreateSuccess: (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
            state.success = true;
        },
        productCreateFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.success = false;
        },
        //get all product of shop
        getAllShopProductRequest: (state, action) => {
            state.isLoading = true;
        },
        getAllShopProductSuccess: (state, action) => {
            state.isLoading = false,
                state.products = action.payload;
        },
        getAllShopProductFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        //get all product......
        getAllProductsRequest: (state) => {
            state.isLoading = true;
        },
        getAllProductsSuccess: (state, action) => {
            state.isLoading = false;
            state.allProducts = action.payload;
        },
        getAllProductsFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        // delete product of a shop
        deleteProductRequest: (state) => {
            state.isLoading = true;
        },
        deleteProductSuccess: (state, action) => {
            state.isLoading = false;
            state.message = action.payload;
        },
        deleteProductFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        upDateProductAfterDelete: (state, action) => {
            state.products = state.products.filter((p) => p._id !== action.payload);
        },
        updateCategory:(state,action)=>{
                     state.key+=1;
        },
        clearErrors: (state, action) => {
            delete state.error;
        },
        clearSuccess: (state, action) => {
            state.success = null
        },
        clearMessage: (state, action) => {
            delete state.message;
        }

    }
})
export default productSlice.reducer;
export const { productCreateSuccess, productCreateFail, productCreateRequest, getAllShopProductRequest, getAllShopProductSuccess, getAllShopProductFail, clearErrors, clearSuccess, clearMessage, deleteProductRequest, deleteProductSuccess, deleteProductFailed, upDateProductAfterDelete,getAllProductsRequest,getAllProductsSuccess,getAllProductsFailed,updateCategory} = productSlice.actions;

export function Createproduct(user_data) {
    return async function createproductThunk(dispatch, getState) {
        try {
            dispatch(productCreateRequest());
            const { data } = await api.post(
                `/product/create_product`,
                user_data
            );
            dispatch(productCreateSuccess(data.product));
        } catch (error) {
            dispatch(productCreateFail(error.response.data.message));
        }
    }
}

export function getAllShopProduct(id) {
    return async function getallshopproductThunk(dispatch, getState) {
        try {
            dispatch(getAllShopProductRequest());
            const response = await api.get(`/product/get-all-products-shop/${id}`);
            const data = await response.data.products;
            dispatch(getAllShopProductSuccess(data));
        } catch (error) {
            console.log(error);
            dispatch(getAllShopProductFail(error.response.data.message));
        }
    }
}

export function deleteShopProduct(id) {
    return async function deleteshopproductThunk(dispatch, getState) {
        try {
            dispatch(deleteProductRequest());
            const { data } = await api.delete(`/product/delete-shop-product/${id}`);
            dispatch(deleteProductSuccess(data.message));
            dispatch(upDateProductAfterDelete(id));
        } catch (error) {
            console.log(error);
            dispatch(deleteProductFailed(error?.response?.data?.message));

        }
    }
}

export function loadAllProducts() {
    return async function getallproductThunk(dispatch,getState) {
        try {
               dispatch(getAllProductsRequest());
               const {data} = await api.get('/product/get-all-products')
               dispatch(getAllProductsSuccess(data.products));
        } catch (error) {
              dispatch(getAllProductsFailed());
        }
    }
}