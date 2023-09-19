import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import MainPage from './components/MainPage.js';
import data from './data.json';
import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";

const Obj ={
    location:{x:1,y:2},
    string:" some test strimg"}
function App() {

    return (
      <div className="App">
          <MainPage/>
      </div>

  );
}

export default App;
