// App.js
import React from 'react';
import Signin from './Signin';
import Signup from './Signup';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Import the CSS file for styling

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="nav-links">
                    <Link to='/Signin'>
                        <h4>Signin</h4>
                    </Link>
                    <Link to='/Signup'>
                        <h4>Signup</h4>
                    </Link>
                </div>
                <div className="content">
                    <Routes>
                        <Route path='/Signin' element={<Signin />} />
                        <Route path='/Signup' element={<Signup />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
