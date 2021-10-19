import React, { useEffect, useMemo, useState } from 'react';
import { useQuery, useMutation } from 'react-apollo';
import gql from 'graphql-tag';

const CLIENT = gql`
  query CLIENT($clientId: ID!) {
    client(id: $clientId) {
      id
      name
      email
    }
  }
`;

const UPDATE_CLIENT = gql`
  mutation UPDATE_CLIENT($id: ID!, $name: String!, $email: String!) {
    updateClient(input: { id: $id, name: $name, email: $email }) {
      id
      name
      email
    }
  }
`;

const ClientEdit = ({ clientId }) => {
  const { data } = useQuery(CLIENT, {
    variables: {
      clientId
    },
    skip: !clientId,
    fetchPolicy: 'cache-first'
  });

  const [updateClient] = useMutation(UPDATE_CLIENT);

  const initialValues = useMemo(
    () => ({
      name: data?.client.name ?? '',
      email: data?.client.email ?? ''
    }),
    [data]
  );

  const [values, setValues] = useState(initialValues);

  useEffect(() => setValues(initialValues), [initialValues]);

  const handleNameChange = (e) => {
    e.persist();

    setValues((values) => ({
      ...values,
      name: e.target.value
    }));
  };

  const handleEmailChange = (e) => {
    e.persist();

    setValues((values) => ({
      ...values,
      email: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateClient({
      variables: {
        id: clientId,
        name: values.name,
        email: values.email
      }
    }).then(console.log);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <fieldset className="user-fieldset">
        <input type="text" value={values.name} onChange={handleNameChange} />
      </fieldset>
      <fieldset className="user-fieldset">
        <input type="email" value={values.email} onChange={handleEmailChange} />
      </fieldset>
      <button>Save!</button>
    </form>
  );
};

export default ClientEdit;
