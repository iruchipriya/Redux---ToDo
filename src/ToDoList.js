import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createToDo, deleteToDo } from './redux/actions';

const ToDoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const todo = { text: 'New Todo' };
    dispatch(createToDo(todo));
  };

  const handleRemoveTodo = (index) => {
    dispatch(deleteToDo(index));
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
