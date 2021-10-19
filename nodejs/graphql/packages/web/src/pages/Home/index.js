import React, { useState } from 'react';

import './index.css';

import ClientList from '../../components/ClientList';
import ClientEdit from '../../components/ClientEdit';

const Home = () => {
  const [clientId, setClientId] = useState(null);

  return (
    <main>
      <ClientList onSelectClient={setClientId} />
      <ClientEdit clientId={clientId} />
    </main>
  );
};

export default Home;
