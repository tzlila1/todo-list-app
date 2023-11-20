import React from "react";
import { ADD_ITEM, DELETE_ITEM, DELETE_COMPLETION, TOGGLE_ITEM, RESET_LIST } from "../actionTypes/actionTypes";
import data from './../data.json';

const initialState= {
    todos: data,
     finishedNumOfItems: data.filter( task => task.complete ).length
    }
// happens twice in strict mode.
export function TodoListReducer(state, action) {
    console.log("ACTION ARRIVE", action)

    switch (action.type) {
        case ADD_ITEM:
            console.log("ADD_ITEM", [...state.todos, action.payload])
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case DELETE_ITEM:
            console.log("deleted", action.payload)
            return {
                ...state,
                finishedNumOfItems: action.payload.complete? state.finishedNumOfItems - 1 : state.finishedNumOfItems,
                todos: state.todos.filter( task => task.id != action.payload.id )
            };
        case DELETE_COMPLETION:
         console.log("deleted completion ", action.payload)
            return {
                ...state,
                finishedNumOfItems: 0,
                todos: state.todos.filter( task => !task.complete )

            };
        case TOGGLE_ITEM:
            const todosList = state.todos.map(task => {
                if(task.id == action.payload.id) {
                    return { ...task, complete: !task.complete }
                }
                return { ...task};
                // return task.id == id ? { ...task, complete: !task.complete } : { ...task};
            });

            console.log(action)
            return {
                ...state,
                finishedNumOfItems: action.payload.complete? state.finishedNumOfItems + 1 :state.finishedNumOfItems - 1,
                todos: todosList
            };
        case RESET_LIST:
            console.log(action)
            return  initialState   

        default:
            return state;
    }
}

