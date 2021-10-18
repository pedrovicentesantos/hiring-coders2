import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin: 2em 0 1em;

  @media (min-width: 1025px) {
    margin: 3em 0 1em;
  }
`;

const ItemsList = styled.ul`
  list-style: none;
  padding: 1em;

  @media (min-width: 750px) {
    font-size: 18px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 0.25em 0;
  }

  @media (min-width: 1025px) {
    font-size: 20px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 1em 0;

    svg {
      cursor: pointer;
    }
  }
`;

export { Title, ItemsList };
