import TodoModel from "./models/Todo.js";
import UserModel from "./models/User.js";
const resolvers = {
  Query: {
    welcome: () => {
      return "welkome to bro";
    },
    getTodos: async () => {
      const todos = await TodoModel.find()
      return todos;
    },
    getTodo: async (root, args) => {
      const todo = await TodoModel.findById({ userId: args.id })
      return todo;
    },
    getUser: async () => {
      const User = await UserModel.find();
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

    deleteTodo:  async (parent, args) => {
      try {
          await TodoModel.findOneAndRemove({_id: args.id});
          return "delete successfully"
      } catch (error) {
          console.log('Error while delete:',error);
          return false;
      }
      
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
