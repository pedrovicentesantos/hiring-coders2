import styled from 'styled-components';
const Item = styled.li`
  display: grid;
  grid-template-rows: 375px 150px;
  margin-bottom: 0.5em;
  width: 100%;

  user-select: none;
  position: relative;

  .description {
    background: var(--primary-color-light);
    height: 100%;
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.75em;
    padding: 1em;
    opacity: 1;
    z-index: 999;

    p {
      width: 80%;
      word-wrap: break-word;
    }

    svg {
      position: absolute;
      top: 1em;
      right: 1em;
    }

    &.hidden {
      opacity: 0;
      z-index: -999;
    }
  }

  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    grid-row: 1 / span 1;
    border-start-start-radius: 10px;
    border-start-end-radius: 10px;
  }

  .info {
    border: 2px var(--primary-color-light) solid;
    border-end-start-radius: 10px;
    border-end-end-radius: 10px;

    background: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    z-index: 99;

    .title {
      width: 90%;
    }

    .price {
      font-weight: 300;
    }

    .counter {
      display: flex;
      align-items: center;
      gap: 0 0.25em;
    }

    input {
      text-align: center;
      border: none;
    }
  }

  @media (min-width: 750px) {
    max-width: 330px;

    img,
    .info,
    .counter {
      max-width: 330px;
    }

    justify-self: center;

    grid-template-rows: 375px 175px;
  }

  @media (min-width: 1025px) {
    grid-template-rows: 375px 220px;
    max-width: 350px;

    img,
    .info,
    .counter {
      max-width: 400px;
    }

    .title {
      font-size: 0.85em;
    }

    .counter {
      justify-content: center;
    }

    input {
      font-size: 1.25em;
      width: 40%;
    }
  }
`;

export { Item };
