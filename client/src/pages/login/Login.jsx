import React from 'react';
import LoginLogo from '../../components/login/LoginLogo';
import LoginForm from '../../components/login/LoginForm';
import { useState } from 'react';
import { login as loginService } from '../../api/login';

import './login.scss';
import { setToken } from '../../api/product';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
  const [email, setEmail] = useState('david@gmail.com');
  const [password, setPassword] = useState('123123123');
  const navigate = useNavigate();

  // if already loggedIn, then go to dashboard
  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loginToken');
    if (loggedUser) {
      navigate('/dashboard');
      return;
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await loginService({ email, password });

    window.localStorage.setItem('loginToken', JSON.stringify(user));
    setToken(user.token);
    setEmail('');
    setPassword('');
    navigate('/dashboard', { replace: true });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='login-container'>
      <LoginLogo />
      <LoginForm
        onSubmit={handleSubmit}
        email={email}
        password={password}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
      />
    </div>
  );
};

export default Login;
