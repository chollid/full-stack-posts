import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todoSlice";

const InputTodo = () => {
  const [author, setAuthor] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const dispatch = useDispatch();

  const onSubmitForm = () => {
    if (author && title && content) {
      dispatch(addTodo(author, title, content));
      setTitle("");
      setContent("");
    } else {
      return alert("Please enter all fields");
    }
  };

  return (
    <Fragment>
      <h1 style={{ fontSize: "24px" }}>To Do List</h1>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <input
          type='text'
          placeholder='Add an Author'
          id='author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type='text'
          placeholder='Add a title'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='text'
          placeholder='Add content'
          id='content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          style={{ border: "none", padding: "10px" }}
          onClick={() => onSubmitForm()}
        >
          Add Post
        </button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
