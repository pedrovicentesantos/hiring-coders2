import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as Styled from './styles';

function Home() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSearch = ()  => {
    axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then(resp => {
        setError(false);
        const repos = [];
        resp.data.map(item => repos.push({name: item.name, url: item.html_url}));
        localStorage.setItem('repos', JSON.stringify(repos));
        history.push('/repositories');
      })
      .catch(() => {
        setError(true);
      });
  }

  return (
    <>
      <div>
        <Styled.Title>Search for user repos</Styled.Title>
        <Styled.InputContainer>
          <Styled.TextInput
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Styled.SearchBtn
            className="btn"
            onClick={handleSearch}
          >
            Search!
          </Styled.SearchBtn>
        </Styled.InputContainer>
        {error && <Styled.ErrorMessage>Erro ao buscar o usuário. Usuário não existe ou ocorreu um erro na chamada. Tente novamente.</Styled.ErrorMessage>}
        
      </div>
    </>
  );
}

export default Home;
