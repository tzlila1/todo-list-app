import React, { useState , useContext} from 'react';
import Todo from "./Todo";
import UserNameContext from '../Context/userNameContext';
import TodoListContext from '../Context/userNameContext';


const TodoList = ({toDoList, handleToggle, removeItem, dispatch}) => {

    const { text } = useContext(UserNameContext);

    return (
    <div style={{display:'flex', justifyContent:'center', padding:'20px'}}>

        {text? 
        <div>
                               {text}'s tasks: 

        <table style={{background:'#r82aebc4f'}}>
            <tbody>
            {toDoList.map(todo => {
                return (
                    <div>
                        <Todo key={todo.id} todo={todo} handleToggle={handleToggle} dispatch={dispatch} removeItem={removeItem}  />
                    </div>
                )
            })}
            </tbody>
        </table>
       </div> : 
        null}
        </div>
    );
};


export default TodoList;