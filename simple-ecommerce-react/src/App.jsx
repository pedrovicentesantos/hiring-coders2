import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Routes from './routes';

import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    const savedIds = {};
    items.forEach((item) => {
      savedIds[item.id] = item.count;
    });

    axios
      .get('https://fakestoreapi.com/products')
      .then((resp) => resp.data)
      .then((apiItems) => {
        const updatedItems = apiItems.map((apiItem) => {
          apiItem.count = 0;
          return apiItem;
        });
        return updatedItems;
      })
      .then((storeItems) =>
        localStorage.setItem('storeItems', JSON.stringify(storeItems))
      )
      .then(() => setLoading(false));

    return () => setLoading(true);
  }, []);

  return <>{loading ? <p className="loader">Loading...</p> : <Routes />}</>;
}

export default App;
