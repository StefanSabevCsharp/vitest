import { useState } from "react";


export default function ToDoList(){
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        data-testid="todo-input"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button
        data-testid="add-todo-button"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
      <ul data-testid="todo-list">
        {todos.map((todo, index) => (
          <li key={index} data-testid={`todo-item-${index}`}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

