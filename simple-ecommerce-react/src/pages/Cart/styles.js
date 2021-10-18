import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% auto;
  align-items: start;
  height: 100%;
  margin-top: 4em;
  text-align: center;

  .header {
    display: flex;
    align-items: center;
    padding: 1em 0.5em;
    justify-self: center;
  }

  .back {
    text-decoration: none;
    margin-left: 2em;
    color: #333;
  }

  .total {
    text-align: left;
    font-size: 1.25em;
    margin-top: 2em;
  }

  @media (min-width: 750px) {
    .total {
      font-size: 1.75em;
      text-align: center;
    }

    .back {
      margin-left: 4em;
    }
  }

  @media (min-width: 1025px) {
    .back {
      margin-left: 8em;
    }
  }
`;

const CartList = styled.ul`
  list-style: none;
  padding: 1em;
`;

const CartItem = styled.li`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(2, auto);

  margin-bottom: 1.5em;
  max-width: 350px;

  border: 1px solid var(--secondary-color);
  border-radius: 10px;

  user-select: none;

  img {
    border-radius: 10px;
    width: 10em;
    height: 10em;
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
    justify-self: start;
  }

  .title {
    grid-row: 1 / span 1;
    grid-column: 1 / span 2;
    width: 90%;
    justify-self: center;
    margin-bottom: 1em;
    border-bottom: 1px solid var(--secondary-color);
  }

  .price-info {
    align-self: center;
    grid-column: 2 / span 1;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .counter {
    display: flex;
    align-items: center;
    gap: 0 0.25em;
    justify-content: center;
    margin: 1em 0;
  }

  input {
    border: none;
    background: none;
    text-align: center;
    width: 40%;
  }

  button {
    width: 100%;
    align-self: center;
    background: none;

    color: #333;
    font-size: 1em;
    font-weight: bold;
    border: none;
    padding: 0.5em;
  }

  @media (min-width: 750px) {
    max-width: 600px;

    font-size: 18px;
    margin: 0 auto 2em;
  }

  @media (min-width: 1025px) {
    max-width: 800px;

    font-size: 18px;
    margin: 0 auto 2em;

    svg {
      cursor: pointer;
    }
  }
`;

export { Container, CartList, CartItem };
