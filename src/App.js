import './App.css';
import MainPage from './components/MainPage.js';
import React, { useState } from 'react';
import { UserNameProvider } from './Context/userNameContext';
import { ThemeContextProvider } from './Context/themeContext';

function App() {

    const [text, setText] = useState("");

    return (
        <div>
            <ThemeContextProvider>
                <UserNameProvider>
                    <div className = "App">
                    <MainPage/>
                    </div>
                </UserNameProvider>
         </ThemeContextProvider>

        </div>
        
  );
}



export default App;
