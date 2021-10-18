import styled from "styled-components";
import { Link } from 'react-router-dom';

const List = styled.ul`
  list-style-type: none;
  min-width: 40em;
`;
  
const ListItem = styled.li`
  background: rgb(67, 66, 66);
  color: white;
  width: 100%;
  padding: 0.5em 1em;
  margin-bottom: 0.25em;
`;

const ListItemLink = styled.a`
  text-decoration: none;
  color: white;
`;

const GoBackLink = styled(Link)`
  cursor: pointer;
  border: #CCC solid 1px;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  background: rgb(67, 66, 66);
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em 0;
`;

export {
  List,
  ListItem,
  ListItemLink,
  GoBackLink,
  Container
}