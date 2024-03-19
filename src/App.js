import React from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import './App.css';
import Signup from './Pages/Signup'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Router>
       <Routes>
        <Route exact path='/' element={<Home />}>
        </Route>
        <Route path='/signup' element={<Signup />}>
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;