import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todoItems: [],
  isLoading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async (thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:5005/posts");
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async (author, title, content, thunkAPI) => {
    let body = { author: author, title: title, content: content };
    console.log("body:", body.stringify());
    try {
      console.log("todoItem:", author.stringify());
      const response = await axios.post("http://localhost:5005/posts", body);
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.push(payload);
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [fetchTodos.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.todoItems = payload;
      //   console.log("payload:", payload);
    },
    [fetchTodos.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
      //   console.log("payload.error:", payload.error);
    },
    [addTodo.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [addTodo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.todoItems = state.todoItems.concat(payload);
      console.log("payload:", payload);
    },
    [addTodo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
      console.log("payload.error:", payload.error);
    },
  },
});

export default todoSlice.reducer;
