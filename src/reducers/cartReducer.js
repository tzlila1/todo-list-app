import { ADD_ITEM, DELETE_ITEM, DELETE_COMPLETION } from "../actionTypes/actionTypes";
import data from '../data.json';

const initialState = {
    numOfItems: data.length,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                numOfItems: state.numOfItems + 1,
            };

        case DELETE_ITEM:
            return {
                ...state,
                numOfItems: state.numOfItems - 1,
            };

        case DELETE_COMPLETION:
         console.log("deleted", action.payload)

            return {
                ...state,
                numOfItems: state.numOfItems - action.payload,
            };
        default:
            return state;
    }
};

export default cartReducer
