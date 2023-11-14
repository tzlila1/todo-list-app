import './App.css';
import MainPage from './components/MainPage.js';
import React, { useState } from 'react';
import UserNameContext from './Context/userNameContext';

function App() {

    const [text, setText] = useState("");

    return (
        <div>
        <UserNameContext.Provider value={{ text, setText }}>
            <div className = "App">

            <MainPage/>

            </div>
         </UserNameContext.Provider>
        </div>
        
  );
}



export default App;
