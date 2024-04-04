import { gql } from "graphql-tag";
const typeDefs = gql`
  scalar Date
  type Todo {
    id: ID
    userId: String
    title: String
    detail: String
    date: Date
  }
  type User {
    id: ID
    name: String
    hobby: String
  }
  type Query {
    welcome: String
    getTodos: [Todo]
    getTodo: Todo
    getUsers: [User]
  }
  type Mutation {
    addTodo(title: String, detail: String, date: Date, userId: String): Todo
    deleteTodo(id: ID): String
    updateTodo(id: ID, title: String, detail: String, date: Date): Todo
    updateUser(userId: ID!, name: String, hobby: String): User
    addUser(name: String, hobby: String): User
    deleteUser(userId: ID!): String
  }
`;
export default typeDefs;
