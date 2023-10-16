import React, { useState } from 'react';
//components
import Todo from "./Todo";


const TodoList = ({toDoList, handleToggle, removeItem, dispatch}) => {
    return (
    <div style={{display:'flex', justifyContent:'center', padding:'20px'}}>
        <table style={{background:'#82aebc4f'}}>
            <tbody>

            {toDoList.map(todo => {
                return (
                    
                    <Todo key={todo.id} todo={todo} handleToggle={handleToggle} dispatch={dispatch} removeItem={removeItem}  />
                )
            })}
            </tbody>
        </table>
        </div>
    );
};


export default TodoList;