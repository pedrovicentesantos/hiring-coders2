import styled from 'styled-components';

const Container = styled.div`
  margin-top: 4em;
  padding: 1em;
  text-align: center;

  h1 {
    color: #333;
  }

  @media (min-width: 1025px) {
    margin-top: 6em;
  }
`;

const StyledUserForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin-bottom: 1em;
  }

  h2,
  h3 {
    color: #333;
  }

  input {
    width: 100%;
    border: var(--primary-color) 1px solid;
    border-radius: 10px;
    font-size: 1em;
    padding: 0.25em 0.5em;
    margin-bottom: 1em;
  }

  .error {
    color: red;
  }

  button {
    background: var(--primary-color-dark);
    width: 100%;
    color: white;
    font-size: 1em;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    padding: 0.5em;
  }

  @media (min-width: 750px) {
    form {
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 1em;
    }
  }

  @media (min-width: 1025px) {
    form {
      max-width: 600px;

      margin: 1em auto 0;
    }
    input,
    select {
      max-width: 300px;
      justify-self: center;
    }

    button {
      max-width: 300px;
      margin: 0 auto;

      &:hover {
        border: var(--secondary-color) 1px solid;
        background: var(--primary-color);
      }
    }
  }
`;

const StyledAddressForm = styled.div`
  margin-top: 2em;

  h2 {
    margin-bottom: 1em;
  }

  h2,
  h3 {
    color: #333;
  }

  input,
  select {
    width: 100%;
    border: var(--primary-color) 1px solid;
    border-radius: 10px;
    font-size: 1em;
    padding: 0.25em 0.5em;
    margin-bottom: 1em;
  }

  .region {
    display: flex;
    gap: 0 0.5em;
  }

  select {
    width: 50%;
    background: white;
  }

  select:focus {
    outline: none;
  }

  button {
    background: var(--primary-color-dark);

    color: white;
    font-size: 1em;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    padding: 0.5em;
    width: 100%;
  }

  @media (min-width: 750px) {
    h2 {
      margin-top: 5em;
    }

    form {
      display: grid;
      grid-template-columns: repeat(2, auto);
      grid-template-rows: repeat(4, auto);
      gap: 1em;
    }

    .region {
      grid-column: 1 / span 2;
    }

    input[name='cep'] {
      grid-row: 2 / span 1;
      grid-column: 2 / span 1;
    }

    button {
      grid-row: 4 / span 1;
    }
  }

  @media (min-width: 1025px) {
    form {
      max-width: 600px;

      margin: 1em auto 0;
    }
    input,
    select {
      max-width: 300px;
      justify-self: center;
    }

    button {
      max-width: 300px;
      margin: 0 auto;

      &:hover {
        border: var(--secondary-color) 1px solid;
        background: var(--primary-color);
      }
    }
  }
`;

export { Container, StyledAddressForm, StyledUserForm };
