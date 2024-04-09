import { Response, Request } from "express";
import { TypeTodo } from "../../types/todo";
import Todo from "../../models/todo";

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: TypeTodo[] = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
};

const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<TypeTodo, "name" | "desc" | "completed">;
    const todo: TypeTodo = new Todo({
      name: body.name,
      desc: body.desc,
      completed: body.completed,
    });
    const savedTodo: TypeTodo = await todo.save();
    const todos: TypeTodo[] = await Todo.find();
    res.status(200).json({ message: "Todo added", todo: savedTodo, todos });
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updatedTodo: TypeTodo | null = await Todo.findByIdAndUpdate(
      { _id: id },
      body
    );
    const todos: TypeTodo[] = await Todo.find();
    res.status(200).json({
      message: "Todo updated",
      todo: updatedTodo,
      todos,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedTodo: TypeTodo | null = await Todo.findByIdAndDelete(
      req.params.id
    );
    const todos: TypeTodo[] = await Todo.find();
    res.status(200).json({
      message: "Todo deleted",
      todo: deletedTodo,
      todos,
    });
  } catch (error) {
    console.log(error);
  }
};

export { getTodos, addTodo, updateTodo, deleteTodo }