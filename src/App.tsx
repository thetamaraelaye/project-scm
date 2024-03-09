import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/auth/login';
import './App.css';
import Signup from './pages/auth/signup';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Routes>
         <Route path="/" element={<LoginPage />} />
         <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
