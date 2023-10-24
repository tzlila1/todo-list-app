import React, { useState, useContext} from 'react';
import MyContext from './MyContext';

const Header = () => {
    const [name, setName] = useState("")
    const {text, setText} = useContext(MyContext)

    return (
        <header>
            <h1> To Do List</h1>

Insert your name :
            <input type= 'text' value={name} onChange={(e)=>setName(e.currentTarget.value) }></input>
            <button onClick={()=>setText(name)}>Save </button>
        </header>
    );
};

export default Header;