import React, { useReducer, useState, useContext } from 'react';
import {addItem, deleteItem, deleteCompletion, toggleItem} from "../actions/todoListAction";
import { ADD_ITEM, DELETE_ITEM, DELETE_COMPLETION, TOGGLE_ITEM } from "../actionTypes/actionTypes";
import '../App.css';
import Header from '../Header.js';
import TodoList from '../components/TodoList.js';
import data from './../data.json';
import MyContext from '../Context/userNameContext';
import TodoListContext from '../Context/todoListContext';


// happens twice in strict mode.
function reducer(state, action) {
    switch (action.type) {

        case ADD_ITEM:
            console.log([...state.todos, action.payload])
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
         console.log("deleted", action.payload)
            return {
                ...state,
                finishedNumOfItems: 0,
                todos: state.todos.filter( task => !task.complete )

            };
            case TOGGLE_ITEM:
                // SHOULD I DO ALL THE LOGIC HERE ?? 
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

        default:
            return state;
    }
}

function MainPage() {

    const initialState= {
        todos: data,
         finishedNumOfItems: data.filter( task => task.complete ).length
        }

    const [state, dispatch] = useReducer(reducer,initialState )
    const [ userInput, setUserInput ] = useState('');
    const { text, setText } = useContext(MyContext)  
    
    
    const handleFilter = () => {
                // SHOULD I DO ALL THE LOGIC HERE OR IN THE REDUCER ??
        let filtered  =  state.todos.filter( task => !task.complete )
        const deleted = (state.todos.length - filtered.length  )
        dispatch(deleteCompletion(deleted));
    }
    
    const addTask = (e) => {
    setUserInput('')
        dispatch(addItem({
            "id": Date.now(),
            "task": userInput,
            "complete": false
        },));

    }
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)

    }

    return (
        <div>
          <TodoListContext.Provider value={{ todos: state.todos , completed: state.finishedNumOfItems}}> 

                <Header/>
                {text? 
                <div> 
                    <div>
                            <button onClick={handleFilter}> Delete completion </button>
                            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter new task..."/>
                            <button type={"submit"} onClick={addTask}> Add Task </button>
                    </div> 

                    <TodoList 
                    toDoList={state.todos} 
                    dispatch={dispatch}  
                    handleFilter={handleFilter} 
                    />

                </div>
                : null}

</TodoListContext.Provider>
        </div>


);
}

export default MainPage;
