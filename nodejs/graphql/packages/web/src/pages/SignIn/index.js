import React, { useState } from 'react';

import './index.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          id="email"
          inputMode="email"
          autoComplete="username"
          onChange={(e) => setEmail(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </fieldset>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
