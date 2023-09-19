import { configureStore } from '@reduxjs/toolkit'
import { createStore } from "redux";
import {finished, totalItems} from '../reducers/todoListReducer'

// const store = createStore(todoListReducer);
//
// export default store;



export default configureStore({
    reducer: {
        totalItems,
        finished},
})