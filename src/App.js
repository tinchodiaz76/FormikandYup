import './App.css';
import React, {StrictMode , useState } from 'react';
import Login from "./components/Login/Login";

/*import LoginView from './pages/Login';*/

function App() {
  return (
    <>
    <StrictMode>
    <Login />
    </StrictMode>
    </>    
  );
};

export default App;
