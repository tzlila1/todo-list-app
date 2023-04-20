import React, { useState } from 'react';
import '../App.css';
import Header from '../Header.js';
import TodoList from '../components/TodoList.js';
import data from './../data.json';

function MainPage() {
    const [ toDoList, setToDoList ] = useState(data);
    const [ userInput, setUserInput ] = useState('');

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id == id ? { ...task, complete: !task.complete } : { ...task};
        });
        setToDoList(mapped);
    }
    const removeItem = (id) => {
        let filtered  =  toDoList.filter( task => task.id != id )
        setToDoList(filtered);
    }

    const handleFilter = () => {

        let filtered  =  toDoList.filter( task => !task.complete )
        setToDoList(filtered);
    }
    const addTask = (e) => {
        let newList = [...toDoList];
        newList.push( {
            "id": Date.now(),
            "task": userInput,
            "complete": false
        },)

        setUserInput('')

        setToDoList(newList);
    }
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)

    }


    return (
        <div>
            <Header/>

            Hello World! A To Do List Will Go here!
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
