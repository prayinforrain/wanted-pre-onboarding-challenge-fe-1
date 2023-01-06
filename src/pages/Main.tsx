import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TodoDetail from "../components/todo/todoDetail";
import TodoList from "../components/todo/todoList";
import "../styles/todo.scss";

export default function MainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/auth");
    }
  }, []);

  return (
    <div className="page">
      <div className="todoPage">
        <TodoList />
        <TodoDetail />
      </div>
    </div>
  );
}
