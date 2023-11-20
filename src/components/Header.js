import React, { useState, useContext, useEffect} from 'react';
import { useThemeUpdate } from '../Context/themeContext';
import { useText } from '../Context/userNameContext';
import TodoListContext from '../Context/todoListContext';
import { resetList } from '../actions/todoListAction';



const Header = () => {
    const [name, setName] = useState("")
    const {text, setText} = useText()
    const toggleTheme = useThemeUpdate()
    const { dispatch } = useContext(TodoListContext);

    useEffect(()=>{
        console.warn('useEffect fired')
        dispatch(resetList())
    }, [text])

    const changeName = () =>{
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