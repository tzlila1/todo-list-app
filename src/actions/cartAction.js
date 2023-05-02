import { ADD_ITEM, DELETE_ITEM, DELETE_COMPLETION } from "../actionTypes/actionTypes";

const addItem = () => {
    return {
        type: ADD_ITEM,
    };
};

const deleteItem = () => {
    return {
        type: DELETE_ITEM,
    };
};

const deleteCompletion = payload => ({
        type: DELETE_COMPLETION,
        payload: payload

});

export { addItem, deleteItem, deleteCompletion };