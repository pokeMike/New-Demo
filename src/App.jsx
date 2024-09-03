// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Pricing from './Pages/Pricing';
import Sellerlist from './Pages/SellerList';
import Dashboard from './Pages/Dashboard';
import Layout from './Components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Pricing' element={<Pricing />} />
          <Route path='/demo/search' element={<Sellerlist />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
