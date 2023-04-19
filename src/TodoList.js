import React, { useState } from 'react';
//components
import Todo from "./Todo";


const TodoList = ({toDoList, handleToggle, removeItem }) => {
    return (
        <table>
            <tbody>
            {toDoList.map(todo => {
                return (
                    <Todo key={todo.id} todo={todo} handleToggle={handleToggle} removeItem={removeItem}  />
                )
            })}
            </tbody>
        </table>
    );
};


export default TodoList;