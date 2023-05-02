import React, { useState , Component} from 'react';
//components
import Header from "../Header";
//
// class Todo extends Component {
//     render() {
//
//         return (
//             <div className="todo">
//                  ({this.props.todo.task})
//             </div>
//         );
//     }
// }

const Todo = ({todo, handleToggle, removeItem}) => {
    return (

        <tr  id={todo.id}>
            <td className={todo.complete ? "strike todo-item" : "todo-item"}>
                {todo.task}
            </td>
                <td  id={todo.id}
                onClick={ (e)=> {
                    console.warn(e.currentTarget.id)
                    handleToggle(e.currentTarget.id)
                }}
                >
                    <button className="btn btn-success"> V </button>

                </td>

                 <td id={todo.id}
                         onClick={ (e)=> {
                             console.warn(e.currentTarget.id)
                             removeItem(e.currentTarget.id)
                         }}>
                     <button type={"button"} className="btn btn-danger"> X </button>
                 </td>
        </tr>
    );
};


export default Todo;