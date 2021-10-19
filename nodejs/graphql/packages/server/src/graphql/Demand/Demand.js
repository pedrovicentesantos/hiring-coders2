import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Demand {
    id: ID!
    name: String!
    client: Client!
    deadline: String
  }

  extend type Query {
    demands: [Demand]!
  }
`;

const resolvers = {
  Query: {
    demands: () => []
  }
};

export { typeDefs, resolvers };
