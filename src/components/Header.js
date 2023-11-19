import React, { useState, useContext} from 'react';
import { useThemeUpdate } from '../Context/themeContext';
import { useText } from '../Context/userNameContext';


const Header = () => {
    const [name, setName] = useState("")
    const {text, setText} = useText()
    const toggleTheme = useThemeUpdate()

    return (
        <header>
            <h1> To Do List</h1>
            <button onClick={toggleTheme}> Toggle Theme </button>
            <p>
                Insert your name :
            <input type= 'text' value={name} onChange={(e)=>setName(e.currentTarget.value) }></input>

            <button onClick={()=>setText(name)}>Save </button>
            </p>
        </header>
    );
};

export default Header;