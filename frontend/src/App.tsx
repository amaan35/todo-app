import { useEffect, useState } from "react";
import { addTodo, deleteTodo, getTodos, updateTodo } from "./API";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TypeTodo[]>([]);
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

  const fetchTodos = (): void => {
    getTodos()
      .then(({ data: { todos } }: TypeTodo[] | any) => setTodos(todos))
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
    <>
      <main className="App">
        <h1>My Todos</h1>
        <AddTodo saveTodo={handleSaveTodo} />
        {todos?.map((todo: TypeTodo) => (
          <TodoItem
            key={todo._id}
            updateTodo={handleUpdateTodo}
            deleteTodo={handleDeleteTodo}
            todo={todo}
          />
        ))}
      </main>
    </>
  );
};

export default App;