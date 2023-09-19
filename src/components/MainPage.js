import React, { useState } from 'react';
import { useSelector , useDispatch} from "react-redux";
import {addItem, deleteItem, deleteCompletion, finishedItem, unfinishedItem} from "../actions/todoListAction";
import '../App.css';
import Header from '../Header.js';
import TodoList from '../components/TodoList.js';
import data from './../data.json';
import {finished} from "../reducers/todoListReducer";

function MainPage() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const [ toDoList, setToDoList ] = useState(data);
    const [ userInput, setUserInput ] = useState('');

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            if(task.id == id) {
                !task.complete ? dispatch(finishedItem()) : dispatch(unfinishedItem());
                return { ...task, complete: !task.complete }
            }
            else return { ...task};
            // return task.id == id ? { ...task, complete: !task.complete } : { ...task};
        });

        setToDoList(mapped);
    }
    const removeItem = (id) => {
        let filtered  =  toDoList.filter( task => task.id != id )
        const deletedTask = toDoList.filter( task => task.id == id )
        setToDoList(filtered);
        dispatch(deleteItem(deletedTask[0]));

    }

    const handleFilter = () => {

        let filtered  =  toDoList.filter( task => !task.complete )
        setToDoList(filtered);
        const deleted = (toDoList.length - filtered.length  )
        {  console.log("deleted", deleted)}

        dispatch(deleteCompletion(deleted));
    }
    const addTask = (e) => {
        let newList = [...toDoList];
        newList.push( {
            "id": Date.now(),
            "task": userInput,
            "complete": false
        },)

        setUserInput('')
        dispatch(addItem());
        setToDoList(newList);

    }
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)

    }


    return (
        <div>
            <Header/>


            <div>
                    You have
               &nbsp;
                <b>
                     {state.totalItems.numOfItems}
                </b>
                &nbsp;
                    task {state.totalItems.numOfItems > 1? 'tasks' : 'task'} in your list
            </div>
            <div>

                &nbsp;
                <b>
                    {state.finished.finishedNumOfItems}
                </b>
                &nbsp; completed {state.finished.finishedNumOfItems > 1? 'tasks' : 'task'}
            </div>

            <TodoList toDoList={toDoList} handleToggle={handleToggle} removeItem={removeItem} handleFilter={handleFilter} />
            <div>
                <button onClick={handleFilter}> Delete completion </button>
                <input value={userInput} type="text" onChange={handleChange} placeholder="Enter new task..."/>
                <button type={"submit"} onClick={addTask}> Add Task </button>
            </div>

        </div>


);
}

export default MainPage;
