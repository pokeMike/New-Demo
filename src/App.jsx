// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Navbar from './Components/Navbar';
import Pricing from './Pricing';
import Sellerlist from './SellerList';

function App() {
  return (
    <Router>
      <Navbar /> {/* Include Header at the top */}
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Routes>
        <Route path='/Login' element= {<Login/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path='/demo/search' element={<Sellerlist/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
