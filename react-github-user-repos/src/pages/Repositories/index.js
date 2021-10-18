import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as Styled from './styles';

const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const repos = JSON.parse(localStorage.getItem('repos'));
    if (repos) {
      setRepos(repos);
      localStorage.clear();
    } else {
      history.push('/');
    }
  }, [history]);

  return (
    <>
      <Styled.Container>
        <h1>Number of repos: {repos.length}</h1>
        <Styled.GoBackLink to="/">Go Back</Styled.GoBackLink>
      </Styled.Container>
      <Styled.List>
        {repos.map((repo, index) => (
          <Styled.ListItem key={index}>
            <Styled.ListItemLink href={repo.url} target="_blank">
              Repo: {repo.name}
            </Styled.ListItemLink>
          </Styled.ListItem>
        ))}
      </Styled.List>
    </>
  )
}

export default Repositories;