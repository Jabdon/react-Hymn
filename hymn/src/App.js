import React, { Component } from 'react';
import './App.css';
import SigninForm from "./components/SigninForm" ;
import Main from "./components/Main";
import {
  BrowserRouter, 
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Main/>

      </div>
    );
  }
}

export default App;
