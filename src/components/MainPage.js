import React, { useReducer, useState, useContext } from 'react';
import {addItem, deleteCompletion} from "../actions/todoListAction";
import '../App.css';
import Header from './Header.js';
import TodoList from '../components/TodoList.js';
import data from './../data.json';
import TodoListContext from '../Context/todoListContext';
import { useTheme } from '../Context/themeContext'
import { useText } from '../Context/userNameContext'
import { TodoListReducer } from '../reducers/todoListReducer';

function MainPage() {

    const initialState= {
        todos: data,
         finishedNumOfItems: data.filter( task => task.complete ).length
        }
    const [state, dispatch] = useReducer(TodoListReducer,initialState )
    const [ userInput, setUserInput ] = useState('');
    const {text}  = useText()  
    const darkTheme = useTheme()
    const themeStyle={
        'color': darkTheme ? '#ccc' : '#333',
        'backgroundColor' :  darkTheme ? '#333' : '#ccc'
    }
    
    const handleFilter = () => {
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
        <div  style={themeStyle}>
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
