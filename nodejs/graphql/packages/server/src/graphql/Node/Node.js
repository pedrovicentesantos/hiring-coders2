import { gql } from 'apollo-server-express';
const typeDefs = gql`
  interface Node {
    id: ID!
  }
`;

const resolvers = {
  Node: {
    __resolveType: () => null
  }
};

export { typeDefs, resolvers };
