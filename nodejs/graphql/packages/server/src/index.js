import express from 'express';
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const PORT = parseInt(process.env.PORT) || 8000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

const ALLOWED_PASSWORD = '1234';

// const enableCors = cors({ origin: 'http://localhost:3000' });

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({
  app,
  cors: {
    origin: 'http://localhost:3000'
  },
  bodyParserConfig: true
});

// server.get('/status', (_, res) => {
//   res.json({
//     status: 'OK'
//   });
// });

// app
//   .options('/authenticate', enableCors)
//   .post('/authenticate', enableCors, express.json(), (req, res) => {
//     const { email, password } = req.body;
//     if (password === ALLOWED_PASSWORD) {
//       res.send({
//         message: 'Authenticated'
//       });
//     } else {
//       res.status(403).send({
//         message: 'Not Allowed'
//       });
//     }
//   });

app.listen(PORT, HOSTNAME, () => {
  console.log(`Running on http://${HOSTNAME}:${PORT}`);
});
