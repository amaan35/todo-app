import React from "react";

type Props = TodoProps & {
  updateTodo: (todo: TypeTodo) => void;
  deleteTodo: (_id: string) => void;
};

const TodoItem: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <div className="bg-gray-500 text-gray-200 w-[300px] h-fit rounded-lg border-2 border-gray-400 p-4">
      <div>
        <h1 className={`${todo.completed?"line-through":""} text-xl font-semibold`}>{todo.name}</h1>
        <span className={`${todo.completed?"line-through":""} text-lg`}>{todo.desc}</span>
      </div>
      <div className="flex justify-between">
        <button
          disabled={todo.completed}
          onClick={() => updateTodo(todo)}
          className={`${todo.completed?"bg-gray-400":"bg-green-500 hover:bg-green-600"} px-3 py-2 rounded-lg text-white`}
        >
          Complete
        </button>
        <button
          onClick={() => deleteTodo(todo._id)}
          className="bg-red-600 px-3 py-2 rounded-lg text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
