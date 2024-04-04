import TodoModel from "./model/Todo.js";
import UserModel from "./model/User.js";
const resolvers = {
  Query: {
    welcome: () => {
      return "welkome to bro";
    },
    getTodos: async () => {
      const todos = await TodoModel.find();
      return todos;
    },
    getTodo: async (_, args) => {
      const todo = await TodoModel.findById({ userId: args.id }).populate(
        "user"
      );
      return todo;
    },
    getUsers: async () => {
      const User = await UserModel.find();
      return User;
    },
  },
  Mutation: {
    addTodo: async (_, args) => {
      const newTodo = new TodoModel({
        userId: args.userId,
        title: args.title,
        detail: args.detail,
        date: args.date,
      });
      await newTodo.save();
      return newTodo;
    },

    addUser: async (_, args) => {
      const newUser = new UserModel({
        name: args.name,
        hobby: args.hobby,
      });
      await newUser.save();
      return newUser;
    },

    deleteTodo: async (_, { userId }) => {
      try {
        const deleteTodo = await TodoModel.FindByIdAndDelete(userId);
        return "the deleted todo succesfully";
      } catch (error) {
        throw new Error("Failed delete user");
      }
    },

    deleteUser: async (_, { userId }) => {
      try {
        await UserModel.findByIdAndDelete(userId);
        return "the deleted user succesfully";
      } catch (error) {
        throw new Error("Failed delete user");
      }
    },

    updateUser: async (_, { userId }, args) => {
      try {
        const updateUser = await UserModel.findByIdAndUpdate(
          userId,
          args.name,
          args.hobby
        );
        return updateUser;
      } catch (error) {
        throw new Error("failed update user");
      }
    },

    updateTodo: async () => {
      const { id, title, detail, date } = args;
      const updateTodo = {};
      if (title !== undefined) {
        updateTodo.title = title;
      }
      if (detail !== undefined) {
        updateTodo.detail = detail;
      }
      if (date !== undefined) {
        updateTodo.date = date;
      }
      const newTodo = TodoModel.findByIdAndUpdate(id, updateTodo, {
        new: true,
      });

      return newTodo;
    },
  },
};
export default resolvers;
