const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");
const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;
const resolvers = {
  Query: {
    sayHi: () => "hello world",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect("mongodb://localhost:27017/graphql", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({
      port: 4000,
    });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
