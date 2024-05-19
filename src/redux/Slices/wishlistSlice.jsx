import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlist: localStorage.getItem("wishlistItems")
        ? JSON.parse(localStorage.getItem("wishlistItems"))
        : [],
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const item = action.payload;
            const isItemExist = state.wishlist.find((i) => i._id === item._id);
            if (isItemExist) {
                return {
                    ...state,
                    wishlist: state.wishlist.map((i) =>
                        i._id === isItemExist._id ? item : i
                    ),
                };
            } else {
                return {
                    ...state,
                    wishlist: [...state.wishlist, item],
                };
            }
        },

        removeFromWishlist: (state, action) => {
            return {
                ...state,
                wishlist: state.wishlist.filter((i) => i._id !== action.payload),
            };
        },
    }
})
export default wishlistSlice.reducer;
export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions;

function AddToWishlistAsync(data){
    return function addToWishlistThunk(dispatch,getState){
             try {
                        dispatch(addToWishlist(data));
                        localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlist));
             } catch (error) {
                  console.log(error);
             }
    }
}

function RemoveFromWishlistAsync(data){
return function removefromwishlistThunk(dispatch,getState){
         try {
                    dispatch(removeFromWishlist(data._id));
                    localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlist));
         } catch (error) {
              console.log(error);
         }
}
}
export {AddToWishlistAsync,RemoveFromWishlistAsync}