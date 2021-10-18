import React from 'react';
import MaskedInput from 'react-text-mask';

const UserForm = ({
  user,
  setUser,
  handleSubmit,
  invalidCpf,
  invalidPhoneNumber
}) => {
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name..."
          name="name"
          value={user.name}
          onChange={handleInput}
          required
        />
        <input
          type="email"
          placeholder="email@mail.com"
          name="email"
          value={user.email}
          onChange={handleInput}
          required
        />
        <span className="cpf">
          <MaskedInput
            type="text"
            size="14"
            minLength="14"
            mask={[
              /\d/,
              /\d/,
              /\d/,
              '.',
              /\d/,
              /\d/,
              /\d/,
              '.',
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/
            ]}
            placeholder="111.222.333-44"
            name="cpf"
            value={user.cpf}
            onChange={handleInput}
            required
          />
          {invalidCpf && <p className="error">Invalid CPF</p>}
        </span>
        <span className="phone">
          <MaskedInput
            type="text"
            mask={[
              '(',
              /\d/,
              /\d/,
              ')',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
              /\d/,
              /\d/
            ]}
            placeholder="(99)99999-1111"
            name="phone"
            value={user.phone}
            onChange={handleInput}
            required
          />
          {invalidPhoneNumber && <p className="error">Invalid Phone Number</p>}
        </span>
        <button>Save!</button>
      </form>
    </>
  );
};

export default UserForm;
