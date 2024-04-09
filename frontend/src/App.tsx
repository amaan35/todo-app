import { useEffect, useState } from "react";
import { addTodo, deleteTodo, getTodos, updateTodo } from "./API";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TypeTodo[]>([]);
  const fetchTodos = (): void => {
    getTodos()
      .then(({ data }: TypeTodo[] | any) => setTodos(data))
      .catch((err: Error) => console.log(err));
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  const handleSaveTodo = (e: React.FormEvent, formData: TypeTodo): void => {
    e.preventDefault();
    addTodo(formData)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Todo not saved");
        }
        setTodos(data.todos);
      })
      .catch((err: Error) => console.log(err));
  };

  const handleUpdateTodo = (todo: TypeTodo): void => {
    updateTodo(todo)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Todo not updated");
        }
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Todo not deleted");
        }
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-5 flex flex-col gap-5 justify-center items-center">
      <h1 className="text-3xl font-semibold">My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {todos && todos.map((todo: TypeTodo) => {
          return (
            <TodoItem
              key={todo._id}
              updateTodo={handleUpdateTodo}
              deleteTodo={handleDeleteTodo}
              todo={todo}
            />
          );
        })}
    </div>
  );
};

export default App;
