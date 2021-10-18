import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  gap: 2em;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 1em;
  text-align: center;
`;

const TextInput = styled.input`
padding: 0.75rem 2rem;
  border: #CCC solid 1px;
  border-radius: 5px;
  font-size: 1.25rem;
  &:focus,
  &:active {
    outline: none;
  }
`;

const SearchBtn = styled.button`
  cursor: pointer;
  border: #CCC solid 1px;
  border-radius: 5px;
  padding: 0.75rem 2rem;
  background: rgb(67, 66, 66);
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 1.25em;
`;

export {
  InputContainer,
  Title,
  TextInput,
  SearchBtn,
  ErrorMessage
}