import { ADD_ITEM, DELETE_ITEM, DELETE_COMPLETION, FINISH_ITEM, UNFINISH_ITEM } from "../actionTypes/actionTypes";


const addItem = () => {
    return {
        type: ADD_ITEM,
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

const finishedItem = payload => ({
        type: FINISH_ITEM,
        payload: payload

});
const unfinishedItem = payload => ({
        type: UNFINISH_ITEM,
        payload: payload

});

export { addItem, deleteItem, deleteCompletion, finishedItem, unfinishedItem };