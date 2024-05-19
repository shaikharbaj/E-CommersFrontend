import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const isItemExist = state.cart.find((i) => i._id === item._id);
            if (isItemExist) {
                return {
                    ...state,
                    cart: state.cart.map((i) => (i._id === isItemExist._id ? item : i)),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, item],
                };
            }
        },

        removeFromCart: (state, action) => {
            return {
                ...state,
                cart: state.cart.filter((i) => i._id !== action.payload),
            };
        },
    }
})

export default cartSlice.reducer;
export const {addToCart,removeFromCart} = cartSlice.actions;

function AddToCartAsync(data){
        return function addToCartThunk(dispatch,getState){
                 try {
                            dispatch(addToCart(data));
                            localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
                 } catch (error) {
                      console.log(error);
                 }
        }
}
function RemoveFromCartAsync(data){
    return function removefromcartThunk(dispatch,getState){
             try {
                        dispatch(removeFromCart(data._id));
                        localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
             } catch (error) {
                  console.log(error);
             }
    }
}
export {AddToCartAsync,RemoveFromCartAsync}