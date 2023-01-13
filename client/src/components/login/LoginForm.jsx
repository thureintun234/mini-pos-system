import React from 'react';

import './loginForm.scss';

const LoginForm = ({
  onSubmit,
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
}) => {
  return (
    <div className='login login__form'>
      <div className='form'>
        <h2>Log in</h2>
        <p>Welcome back! Please enter your details</p>

        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              value={email}
              onChange={handleEmailChange}
              type='email'
              id='email'
              placeholder='Enter your email'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              value={password}
              onChange={handlePasswordChange}
              type='password'
              id='password'
            />
          </div>

          <button type='submit'>Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
