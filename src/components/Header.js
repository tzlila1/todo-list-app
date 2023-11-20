import React, { useState, useContext} from 'react';
import { useThemeUpdate } from '../Context/themeContext';
import { useText } from '../Context/userNameContext';
import TodoListContext from '../Context/todoListContext';
import { resetList } from '../actions/todoListAction';



const Header = () => {
    const [name, setName] = useState("")
    const {text, setText} = useText()
    const toggleTheme = useThemeUpdate()
    const { todos , completed ,dispatch } = useContext(TodoListContext);

    const changeName = () =>{
        console.log("change name")
        console.log(todos)

        dispatch(resetList())
        setText(name)

    }

    return (
        <header>
            <h1> To Do List</h1>
            <button onClick={toggleTheme}> Toggle Theme </button>
            <p>
                Insert your name :
            <input type= 'text' value={name} onChange={(e)=>setName(e.currentTarget.value) }></input>

            <button onClick={changeName}>Save </button>
            </p>
        </header>
    );
};

export default Header;