import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';
import Editor from './Views/Editor';
import Login from './Views/Login';
import Register from './Views/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/about" exact element={<About/>}></Route>
        <Route path="/contact" exact element={<Contact/>}></Route>
        <Route path="/editor" exact element={<Editor/>}></Route>
        <Route path="/login" exact element={<Login/>}></Route>
        <Route path="/register" exact element={<Register/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
