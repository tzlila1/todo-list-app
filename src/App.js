import './App.css';
import MainPage from './components/MainPage.js';
import React, { useState } from 'react';
import MyContext from './MyContext';

function App() {

    const [text, setText] = useState("");

    return (
        <div>
        <MyContext.Provider value={{ text, setText }}>
            <div className = "App">

            <MainPage/>

            </div>
         </MyContext.Provider>
        </div>
        
  );
}



export default App;
