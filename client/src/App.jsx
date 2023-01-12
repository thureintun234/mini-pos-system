import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/auth' element={<Login />} />
        <Route path='/dashboard' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
