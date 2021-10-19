import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';

const PAGE_SIZE = 10;

const GET_CLIENT_LIST = gql`
  query GET_CLIENT_LIST($skip: Int!, $take: Int!) {
    clients(options: { skip: $skip, take: $take }) {
      items {
        id
        name
        email
      }
      totalItems
    }
  }
`;

const ClientList = ({ onSelectClient }) => {
  const { data, error, loading, fetchMore } = useQuery(GET_CLIENT_LIST, {
    fetchPolicy: 'cache-and-network',
    variables: {
      skip: 0,
      take: PAGE_SIZE
    }
  });

  const clients = data?.clients.items ?? [];

  const handleSelectClient = (client) => () => {
    onSelectClient?.(client.id);
  };

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        skip: data.clients.items.length,
        take: PAGE_SIZE
      },
      updateQuery: (result, { fetchMoreResult }) => {
        if (!fetchMoreResult) return result;

        return {
          ...result,
          clients: {
            ...result.clients,
            items: result.clients.items.concat(fetchMoreResult.clients.items),
            totalItems: fetchMoreResult.clients.totalItems
          }
        };
      }
    });
  };

  if (error)
    return (
      <section>
        <strong>Error while getting clients</strong>
      </section>
    );

  if (loading && !data)
    return (
      <section>
        <p>Loading...</p>
      </section>
    );

  return (
    <section>
      <ul>
        {clients.map((client) => (
          <li key={client.id} onClick={handleSelectClient(client)}>
            <p>{client.name}</p>
            <p>{client.email}</p>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleLoadMore} disabled={loading}>
        Load More
      </button>
    </section>
  );
};

export default ClientList;
