import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import ShoppingItem from '../../components/ShoppingItem';
import { ItemsList, Title } from './styles';

const Shopping = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('storeItems')) || []
  );
  const [cartTotal, setCartTotal] = useState(
    JSON.parse(localStorage.getItem('cart'))?.length || 0
  );

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const savedIds = {};
    cart.forEach((item) => {
      savedIds[item.id] = item.count;
    });

    const updatedItems = items.map((item) => {
      if (Object.keys(savedIds).includes(item.id.toString())) {
        item.count = savedIds[item.id];
      } else {
        item.count = 0;
      }
      return item;
    });

    setItems(updatedItems);

    return () => setItems([]);
  }, []);

  useEffect(() => {
    const cart = items.filter((item) => item.count > 0);
    const totalItems = cart.reduce((previous, current) => {
      return previous + current.count;
    }, 0);
    setCartTotal(totalItems);
    localStorage.setItem('storeItems', JSON.stringify(items));
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [items]);

  const handleItem = (e, currentItem, operation) => {
    const operations = {
      add: (item) => ++item,
      remove: (item) => --item,
      edit: (item) => e.target.value
    };
    const updatedItems = items.map((item) => {
      if (item.id === currentItem.id) {
        item.count = operations[operation](item.count);
        item.count = item.count < 0 ? 0 : item.count;
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <Header cartTotal={cartTotal} />
      <Title>Available Items</Title>
      <ItemsList>
        {items.map((item) => (
          <ShoppingItem key={item.id} item={item} handleItem={handleItem} />
        ))}
      </ItemsList>
    </>
  );
};

export default Shopping;
