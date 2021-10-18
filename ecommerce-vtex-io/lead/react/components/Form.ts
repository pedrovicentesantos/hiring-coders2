import styled from  'styled-components'

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
  border-radius: 10px;

  @media (max-width: 820px) {
    flex-direction: row;
    gap: 0 0.25rem;
    flex-wrap: wrap;

    input, button {
      width: 45% !important;
    }
  }

  button {
    border-radius: 10px;
    padding: 0.5rem;
    cursor: pointer;
    width: 100%;
    background: #59ff00;
    border-color: #59ff00;

    &:hover {
      background: rgb(62, 178, 0);
    }
  }

  input {
    border-radius: 10px;
    border: 1px solid #3C3C3C;
    padding: 0.5rem;
    width: 100%;
    color: #3C3C3C;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #3C3C3C;
    }

    &:hover {
      border-color: #59ff00;
    }
  }
`

export {
  Form
}