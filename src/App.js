import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import TodoList from './TodoList.js';
import data from './data.json';
import React, { useState } from 'react';

function App() {
    const [ toDoList, setToDoList ] = useState(data);
    const [ userInput, setUserInput ] = useState('');

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id == id ? { ...task, complete: !task.complete } : { ...task};
        });
        setToDoList(mapped);
    }
    const removeItem = (id) => {
        console.log(toDoList)
        console.log(id)

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
      <div className="App">
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

export default App;
