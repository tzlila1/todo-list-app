import { ADD_ITEM, DELETE_ITEM, DELETE_COMPLETION, FINISH_ITEM,UNFINISH_ITEM } from "../actionTypes/actionTypes";
import data from '../data.json';

const initialState = {
    numOfItems: data.length,
    finishedNumOfItems: data.filter( task => task.complete ).length,
};

export const totalItems = (state = {numOfItems: data.length}, action) => {
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
export const finished = (state = {finishedNumOfItems: data.filter( task => task.complete ).length}, action) => {
    switch (action.type) {

        case FINISH_ITEM:
            return {
                ...state,
                finishedNumOfItems: state.finishedNumOfItems + 1,
            };

        case UNFINISH_ITEM:
            return {
                ...state,
                finishedNumOfItems: state.finishedNumOfItems - 1,
            };

        case DELETE_COMPLETION:
         console.log("deleted", action.payload)

            return {
                ...state,
                finishedNumOfItems: 0,
            };
        case DELETE_ITEM:
            if (action.payload.complete) {
                return {
                    ...state,
                    finishedNumOfItems: state.finishedNumOfItems - 1,
                };
            }

        default:
            return state;
    }
};

