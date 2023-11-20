import React, { useState , useContext} from 'react';
import Todo from "./Todo";
import TodoListContext from '../Context/todoListContext';
import { useText } from '../Context/userNameContext';


const TodoList = ({ handleToggle}) => {
    const { text , setText} = useText();
    const { todos , completed ,dispatch } = useContext(TodoListContext);

    return (
    <div style={{display:'flex', justifyContent:'center', padding:'20px'}}>
        {text? 
            <div>
                {text}'s tasks :       
                &nbsp;
                    <b>
                    {completed} / {todos.length}
                    </b>                            
                    &nbsp; completed 
                <table style={{background:'#r82aebc4f'}}>
                    <tbody>
                    {todos.map(todo => {
                        return (
                            <div>
                                <Todo key={todo.id} todo={todo} />
                            </div>
                        )
                    })}
                    </tbody>
                </table>
        </div>
         : null}
        </div>
    );
};


export default TodoList;