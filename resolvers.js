import TodoModel from "./models/Todo.js";
import UserModel from "./models/User.js";
const resolvers = {
  Query: {
    welcome: () => {
      return "welkome to bro";
    },
    getTodos: async () => {
      const todos = await TodoModel.find().populate("user");
      return todos;
    },
    getTodo: async (root, args) => {
      const todo = await TodoModel.findById({ userId: args.id }).populate(
        "user"
      );
      return todo;
    },
    getUser: async () => {
      const User = await TodoModel.find();
      return User;
    },
  },
  Mutation: {
    addTodo: async (root, args) => {
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

    deleteTodo: async (root, args) => {
      const deleteTodo = TodoModel.FindByIdAndDelete(args.id);
      return "the deleted todo succesfully";
    },

    updateTodo: async (root, args) => {
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
      const newTodo = TodoModel.FindByIdAndUpdate(id, updateTodo, {
        new: true,
      });

      return newTodo;
    },
  },
};
export default resolvers;
