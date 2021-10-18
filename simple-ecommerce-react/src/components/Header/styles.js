import styled from 'styled-components';

const StyledHeader = styled.header`
  background: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.25em 1em;
  position: fixed;
  top: 0;
  right: 0;
  height: 2.5em;
  width: 100%;
  z-index: 9999;

  .logo {
    position: absolute;
    left: 0;
    height: 2.5em;
    width: auto;
  }

  a {
    color: white;
    position: relative;

    span {
      position: absolute;
      top: -5px;
      right: -15px;
    }
  }

  a:first-of-type {
    margin-right: 2em;
  }

  svg {
    width: 1.25em;
    height: auto;
  }
  @media (min-width: 1025px) {
    height: 4em;

    .logo {
      position: absolute;
      left: 0;
      height: 4em;
      width: auto;
      cursor: pointer;
    }

    a {
      span {
        font-size: 1.25rem;
      }
    }

    svg {
      width: 2em;
      height: auto;
    }
  }
`;

export default StyledHeader;
