import { ADD_ITEM, DELETE_ITEM, DELETE_COMPLETION, TOGGLE_ITEM } from "../actionTypes/actionTypes";


const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item

    };
};

const deleteItem = (item) => {
    return {
        type: DELETE_ITEM,
        payload: item

    };
};

const deleteCompletion = payload => ({
        type: DELETE_COMPLETION,
        payload: payload

});

const  toggleItem= payload => ({
        type: TOGGLE_ITEM,
        payload: payload

});


export { addItem, deleteItem, deleteCompletion, toggleItem };