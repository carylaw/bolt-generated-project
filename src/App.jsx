import React, { useState } from 'react';

    function App() {
      const [todos, setTodos] = useState([]);
      const [newTodo, setNewTodo] = useState('');

      const addTodo = () => {
        if (newTodo.trim()) {
          setTodos([...todos, newTodo.trim()]);
          setNewTodo('');
        }
      };

      const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
      };

      return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <div className="flex mb-4">
              <input
                type="text"
                className="border p-2 flex-grow"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
              />
              <button
                className="bg-blue-500 text-white p-2 ml-2"
                onClick={addTodo}
              >
                Add
              </button>
            </div>
            <ul>
              {todos.map((todo, index) => (
                <li key={index} className="flex justify-between items-center mb-2">
                  <span>{todo}</span>
                  <button
                    className="bg-red-500 text-white p-1"
                    onClick={() => removeTodo(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    export default App;
