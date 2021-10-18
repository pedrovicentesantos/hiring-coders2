import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Container } from './styles';
import home from '../../../src/home.svg';

const Home = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    id: uuid()
  });

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/shopping');
  };

  return (
    <Container>
      <img src={home} alt="Person Shopping" />
      <h1>Please enter your name before starting</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name..."
          value={user.name}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          required
        />
        <button>Start!</button>
      </form>
    </Container>
  );
};

export default Home;
