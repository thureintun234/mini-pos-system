import React from 'react';
import LoginLogo from '../../components/login/LoginLogo';

import './login.scss';
import LoginForm from '../../components/login/LoginForm';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='login-container'>
      <LoginLogo />
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
