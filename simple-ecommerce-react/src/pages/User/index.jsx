import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import UserForm from '../../components/UserForm';
import AddressForm from '../../components/AddressForm';
import Header from '../../components/Header';
import { Container, StyledAddressForm, StyledUserForm } from './styles';

const User = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || {
      name: '',
      email: '',
      cpf: '',
      phone: '',
      id: uuid()
    }
  );
  const [address, setAddress] = useState(
    JSON.parse(localStorage.getItem('address')) || {
      street: '',
      number: '',
      city: '',
      region: '',
      country: '',
      cep: '',
      user_id: user.id || uuid()
    }
  );

  const [cartTotal, setCartTotal] = useState(0);

  const [personalInfoSaved, setPersonalInfoSaved] = useState(false);
  const [addressInfoSaved, setAddressInfoSaved] = useState(false);
  const [invalidCpf, setInvalidCpf] = useState(false);
  const [invalidPhoneNumber, setInvalidPhoneNumber] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((previous, current) => {
      return previous + current.count;
    }, 0);
    setCartTotal(total);
  }, []);

  const validCpf = (cpf) => {
    const expression = new RegExp('\\d{3}.\\d{3}.\\d{3}-\\d{2}');
    if (!cpf.match(expression)) {
      setInvalidCpf(true);
      return false;
    }
    setInvalidCpf(false);
    return true;
  };

  const validPhoneNumber = (phoneNumber) => {
    const expression = new RegExp('\\(\\d{2}\\)\\d{5}-\\d{4}');
    if (!phoneNumber.match(expression)) {
      setInvalidPhoneNumber(true);
      return false;
    }

    setInvalidPhoneNumber(false);
    return true;
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    if (validCpf(user.cpf) && validPhoneNumber(user.phone)) {
      setPersonalInfoSaved(true);
      localStorage.setItem('user', JSON.stringify(user));
    }
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    setAddressInfoSaved(true);
    localStorage.setItem('address', JSON.stringify(address));
  };

  return (
    <>
      <Header cartTotal={cartTotal} />
      <Container>
        <h1>Your information</h1>
        <StyledUserForm>
          <h2>Personal</h2>
          {personalInfoSaved && <h3>Information Saved!</h3>}
          <UserForm
            user={user}
            setUser={setUser}
            handleSubmit={handleUserSubmit}
            invalidCpf={invalidCpf}
            invalidPhoneNumber={invalidPhoneNumber}
          />
        </StyledUserForm>
        <StyledAddressForm>
          <h2>Shipping Information</h2>
          {addressInfoSaved && <h3>Information Saved!</h3>}
          <AddressForm
            address={address}
            setAddress={setAddress}
            handleSubmit={handleAddressSubmit}
          />
        </StyledAddressForm>
      </Container>
    </>
  );
};

export default User;
