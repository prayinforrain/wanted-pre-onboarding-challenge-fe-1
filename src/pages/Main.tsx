import React, { Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/common/LoadingSpinner";
import Sidebar from "../components/todo/sidebar";
import TodoDetail from "../components/todo/todoDetail";
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
        <Sidebar />
        <Suspense fallback={<LoadingSpinner />}>
          <TodoDetail />
        </Suspense>
      </div>
    </div>
  );
}
