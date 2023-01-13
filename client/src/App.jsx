import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { setToken } from './api/product';

const App = () => {
  const navigate = useNavigate();

  // check if user is loggedIn
  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loginToken');
    if (!loggedUser) {
      navigate('/auth');
    } else {
      const data = JSON.parse(loggedUser);
      setToken(data?.token);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard' />} />
        <Route path='/dashboard' element={<Home />} />
        <Route path='/auth' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
