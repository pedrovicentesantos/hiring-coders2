import React, { useState } from 'react';
import { FiPlusCircle, FiMinusCircle, FiXCircle } from 'react-icons/fi';
import { Item } from './styles';

const ShoppingItem = ({ item, handleItem }) => {
  const [showDescription, setShowDescription] = useState(false);
  const handleDescription = () => {
    setShowDescription((description) => !description);
  };

  return (
    <Item key={item.id}>
      <img onClick={handleDescription} src={item.image} alt="Item" />
      <div
        onClick={handleDescription}
        className={showDescription ? 'description' : 'description hidden'}
      >
        <p>{item.description}</p>
        <FiXCircle />
      </div>
      <div className="info">
        <p className="title">{item.title}</p>
        <p className="price">${item.price.toFixed(2)}</p>
        <div className="counter">
          <FiMinusCircle onClick={(e) => handleItem(e, item, 'remove')} />
          <input
            type="number"
            value={item.count}
            min="0"
            onChange={(e) => handleItem(e, item, 'edit')}
          />
          <FiPlusCircle onClick={(e) => handleItem(e, item, 'add')} />
        </div>
      </div>
    </Item>
  );
};

export default ShoppingItem;
