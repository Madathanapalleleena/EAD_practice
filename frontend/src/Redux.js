import { configureStore, createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "students",
  initialState: [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 70 },
    { name: "Charlie", marks: 95 }
  ],
  reducers: {
    sortAsc(state) {
      state.sort((a, b) => a.marks - b.marks);
    },
    sortDesc(state) {
      state.sort((a, b) => b.marks - a.marks);
    }
  }
});

export const { sortAsc, sortDesc } = studentSlice.actions;

export const store = configureStore({
  reducer: {
    students: studentSlice.reducer
  }
});



Index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);


App.js
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { sortAsc, sortDesc } from "./store";

export default function App() {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Students List</h2>

      <button onClick={() => dispatch(sortAsc())}>Sort Asc</button>
      <button onClick={() => dispatch(sortDesc())} >
        Sort Desc</button>

      <ul>
        {students.map((s, i) => (
          <li key={i}>
            {s.name} — {s.marks}
          </li>
        ))}
      </ul>
    </div>
  );
}