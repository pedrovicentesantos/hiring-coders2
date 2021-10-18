import React, { useEffect, useState } from 'react';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import { Container, CartList, CartItem } from './styles';

const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const total = cart.reduce((previous, current) => {
      return previous + current.count;
    }, 0);
    setCartTotal(total);
  }, [cart]);

  const handleItem = (e, currentItem, operation) => {
    const operations = {
      add: (item) => ++item,
      remove: (item) => --item,
      edit: (item) => e.target.value
    };
    const updatedItems = cart.map((item) => {
      if (item.id === currentItem.id) {
        item.count = operations[operation](item.count);
        item.count = item.count < 0 ? 0 : item.count;
      }
      return item;
    });
    setCart(updatedItems);
  };

  const handleRemoveItem = (currentItem) => {
    const updatedCart = cart.filter((item) => currentItem.id !== item.id);
    setCart(updatedCart);
  };

  return (
    <>
      <Header cartTotal={cartTotal} />
      <Container>
        <div className="header">
          <h1>Your cart</h1>
          <Link className="back" to="/shopping">
            Continue Shopping
          </Link>
        </div>
        {cart.length === 0 ? (
          <h2>Cart is empty</h2>
        ) : (
          <CartList>
            {cart.map((item) => (
              <CartItem key={item.id}>
                <img src={item.image} alt="Item" />
                <p className="title">{item.title}</p>
                <div className="price-info">
                  <p className="price">
                    ${(item.price * item.count).toFixed(2)}
                  </p>
                  <div className="counter">
                    <FiMinusCircle
                      onClick={(e) => handleItem(e, item, 'remove')}
                    />
                    <input
                      type="number"
                      value={item.count}
                      min="0"
                      onChange={(e) => handleItem(e, item, 'edit')}
                    />
                    <FiPlusCircle onClick={(e) => handleItem(e, item, 'add')} />
                  </div>
                  <button onClick={() => handleRemoveItem(item)}>
                    Remove Item
                  </button>
                </div>
              </CartItem>
            ))}
            <p className="total">
              Total Price: $
              {cart
                .reduce((previous, current) => {
                  return previous + current.price * current.count;
                }, 0)
                .toFixed(2)}
            </p>
          </CartList>
        )}
      </Container>
    </>
  );
};

export default Cart;
