import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ListTodo = () => {
  const dispatch = useDispatch();

  const todoItems = useSelector((store) => {
    return store.todo.todoItems;
  });

  return (
    <div>
      {todoItems.map((todoItem) => {
        return (
          <div key={todoItem.id}>
            <h1>{todoItem.author}</h1>
            <h1>{todoItem.title}</h1>
            <h1>{todoItem.content}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default ListTodo;
