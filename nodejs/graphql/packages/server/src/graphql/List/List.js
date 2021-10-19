import { gql } from 'apollo-server-express';

const typeDefs = gql`
  interface List {
    items: [Node!]!
    totalItems: Int!
  }

  enum ListAssortmentEnum {
    ASC
    DESC
  }

  input ListSort {
    sorter: String!
    assortment: ListAssortmentEnum!
  }
`;

const ListAssortmentEnum = Object.freeze({
  ASC: 'ASC',
  DESC: 'DESC'
});

const resolvers = {
  List: {
    __resolveType: () => null
  }
};

export { typeDefs, resolvers, ListAssortmentEnum };
