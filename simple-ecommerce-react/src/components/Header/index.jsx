import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import StyledHeader from './styles';
import logo from '../../../src/company.svg';

const Header = ({ cartTotal }) => {
  const history = useHistory();

  const handleLogo = () => {
    history.push('/shopping');
  };

  return (
    <StyledHeader>
      <img onClick={handleLogo} className="logo" src={logo} alt="" />

      <Link to="/cart">
        <FiShoppingCart />
        <span>{cartTotal}</span>
      </Link>
      <Link to="/user">
        <FiUser />
      </Link>
    </StyledHeader>
  );
};

export default Header;
