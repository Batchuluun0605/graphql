import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers.js";
import typeDefs from "./typeDefs.js";
import mongoose from "mongoose";
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
try {
  mongoose.connect(
    "mongodb+srv://batchuluun:XN2IklfthS9eVHa9@gql.oxxl7ma.mongodb.net/?retryWrites=true&w=majority&appName=gql"
  );
  console.log("connected");
} catch (error) {
  console.log(error);
}
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
