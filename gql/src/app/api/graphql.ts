import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "../../graphql";
async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server);
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}
startApolloServer();
