import React from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import MaskedInput from 'react-text-mask';

const AddressForm = ({ address, setAddress, handleSubmit }) => {
  const handleInput = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleRegionCountryInput = (value, e) => {
    setAddress({ ...address, [e.target.name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="street"
          placeholder="Street Address"
          value={address.street}
          onChange={handleInput}
          required
        />
        <input
          type="number"
          name="number"
          min="0"
          placeholder="Street Number"
          value={address.number}
          onChange={handleInput}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={address.city}
          onChange={handleInput}
          required
        />
        <div className="region">
          <CountryDropdown
            name="country"
            value={address.country}
            onChange={handleRegionCountryInput}
            required
          />
          <RegionDropdown
            disableWhenEmpty={true}
            name="region"
            country={address.country}
            value={address.region}
            onChange={handleRegionCountryInput}
            required
          />
        </div>
        <MaskedInput
          name="cep"
          type="text"
          mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
          value={address.cep}
          onChange={handleInput}
          placeholder="Postcode"
          required
        />
        <button>Save!</button>
      </form>
    </>
  );
};

export default AddressForm;
