import React from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import { fetchTodos } from "./features/Todo/todoSlice";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import ListTodo from "./components/ListTodo";

function App() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  React.useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className='container'>
      <InputTodo />
      <ListTodo />
    </div>
  );
}

export default App;
