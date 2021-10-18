import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    margin-bottom: 5em;
  }

  h1 {
    width: 100%;
    font-family: 'Bebas Neue', cursive;
    font-size: 1.5em;
    text-align: center;
    color: #333;
    margin-bottom: 3em;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em 0;
  }

  input {
    border: var(--primary-color) 1px solid;
    border-radius: 10px;
    font-size: 1em;
    padding: 0.25em 0.5em;
  }

  button {
    background: var(--primary-color-dark);

    color: white;
    font-size: 1em;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    padding: 0.5em;
  }

  @media (min-width: 750px) {
    font-size: 18px;

    img,
    h1,
    form {
      max-width: 500px;
    }

    form {
      gap: 2em 0;
    }
  }

  @media (min-width: 1025px) and (max-height: 790px) {
    font-size: 20px;
    padding: 0.5em 0;

    img {
      max-height: 325px;
      margin-bottom: 1.5em;
    }

    h1 {
      font-size: 1.25em;
      margin-bottom: 1.25em;
    }

    form {
      gap: 1em 0;
    }

    button {
      &:hover {
        border: var(--secondary-color) 1px solid;
        background: var(--primary-color);
      }
    }
  }

  @media (min-width: 1025px) and (min-height: 791px) {
    font-size: 24px;

    img,
    h1,
    form {
      max-width: 600px;
    }

    button {
      &:hover {
        border: var(--secondary-color) 1px solid;
        background: var(--primary-color);
      }
    }
  }
`;

export { Container };
