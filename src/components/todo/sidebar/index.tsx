import React, { Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import TodoList from "../../../components/todo/todoList";

export default function Sidebar() {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("auth");
    navigate(0);
  };

  return (
    <ul className="todoListContainer">
      <h1>
        <Link to="/">Todo List</Link>{" "}
        <button
          type="button"
          onClick={() => {
            navigate("/?id=new");
          }}
        >
          ＋
        </button>
      </h1>
      <div className="todoList">
        <Suspense fallback={<LoadingSpinner />}>
          <TodoList />
        </Suspense>
      </div>
      <Link className="btnSignOut" to="/" onClick={signOut}>
        Sign Out
      </Link>
    </ul>
  );
}
