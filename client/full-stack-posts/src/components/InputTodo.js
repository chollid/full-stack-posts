import React, { Fragment } from "react";

const InputTodo = () => {
  const [author, setAuthor] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

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
          value='author'
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button style={{ border: "none", padding: "10px" }}>Add</button>
        <input
          type='text'
          placeholder='Add a title'
          id='title'
          value='title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <button style={{ border: "none", padding: "10px" }}>Add</button>
        <input
          type='text'
          placeholder='Add content'
          id='content'
          value='content'
          onChange={(e) => setContent(e.target.value)}
        />
        <button style={{ border: "none", padding: "10px" }}>Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
