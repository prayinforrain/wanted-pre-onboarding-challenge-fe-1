import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TodoList from "../components/todo/todoList";

export default function MainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/auth");
    }
  }, []);

  return (
    <div className="page">
      <TodoList />
    </div>
  );
}
