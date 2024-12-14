"use client"
import React, { useState } from 'react';

const DailyTodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">日待办</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2 flex-1"
          placeholder="添加新待办事项"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white p-2 ml-2">
          添加
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
              className="mr-2"
            />
            <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyTodoPage;

