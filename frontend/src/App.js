import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm';
import Stores from './Stores'


function App() {
  return (
    <div className="App">
      {/* <LoginForm/> */}
      {/* <SignupForm/> */}
      <Stores/>
    </div>
  );
}

export default App;
