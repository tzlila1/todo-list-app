import React, { useState , Component} from 'react';
import { toggleItem, deleteItem } from '../actions/todoListAction';

//components
import Header from "../Header";
const Todo = ({todo, removeItem, dispatch}) => {

    return (

        <tr  id={todo.id}>
            <td className={todo.complete ? "strike todo-item" : "todo-item"}>
                {todo.task}
            </td>
                <td  id={todo.id}
                onClick={ (e)=> {
               
                dispatch(toggleItem({...todo, complete: !todo.complete})) 

                }}
                >
                    <button className="btn btn-success"> V </button>

                </td>

                 <td id={todo.id}
                         onClick={ (e)=> {
                             //removeItem(e.currentTarget.id)
                             dispatch(deleteItem(todo)) 

                         }}>
                     <button type={"button"} className="btn btn-danger"> X </button>
                 </td>
        </tr>
    );
};


export default Todo;