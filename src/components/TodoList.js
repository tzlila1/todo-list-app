import React, { useState , useContext} from 'react';
import Todo from "./Todo";
import MyContext from '../MyContext';



const TodoList = ({toDoList, handleToggle, removeItem, dispatch}) => {

    const { text, setText } = useContext(MyContext);

    return (
    <div style={{display:'flex', justifyContent:'center', padding:'20px'}}>
                              All {text} tasks: 

        <table style={{background:'#82aebc4f'}}>
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
        </div>
    );
};


export default TodoList;