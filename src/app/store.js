import { configureStore } from '@reduxjs/toolkit'
import { createStore } from "redux";
import cartReducer from '../reducers/cartReducer'

// const store = createStore(cartReducer);
//
// export default store;



export default configureStore({
    reducer: {cartReducer},
})