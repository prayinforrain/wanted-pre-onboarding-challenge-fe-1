import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Todo } from "../../../types/Todo";
import { HttpUtil } from "../../../utils/http";
import "../../../styles/todo.scss";
import TodoListItem from "./TodoListItem";
import LoadingSpinner from "../../common/LoadingSpinner";

function TodoList() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [currentTodo, setCurrentTodo] = useState<null | Todo>(null);

  const fetchTodos = async (): Promise<Todo[]> => {
    const response = await HttpUtil("http://localhost:8080/todos", "GET");
    return response.data;
  };
  const { data, isLoading, isError, error } = useQuery("todo", fetchTodos, {
    onSuccess: (res) => {
      console.log(res);
    },
  });

  useEffect(() => {
    if (!data) return;
    setCurrentTodo(data.find((item) => item.id === params.get("id")) ?? null);
  }, [params]);

  const signOut = () => {
    localStorage.removeItem("auth");
    navigate(0);
  };

  return (
    <div className="todoPage">
      <ul className="todoListContainer">
        <h1>
          <Link to="/">Todo List</Link> <button type="button">+</button>
        </h1>
        {isLoading && <LoadingSpinner />}
        <div className="todoList">
          {!isLoading &&
            data &&
            data.map((item: Todo) => (
              <TodoListItem key={item.id} item={item} />
            ))}
          {!isLoading && data?.length === 0 && <div>일정이 없습니다!</div>}
        </div>
        <Link className="btnSignOut" to="/" onClick={signOut}>
          Sign Out
        </Link>
      </ul>
      <div className="todoDetailContainer">
        {currentTodo ? (
          <>
            <h1>
              {currentTodo.title} <button type="button">×</button>
            </h1>
            <div className="todo-createdAt">
              {new Date(currentTodo.createdAt).toLocaleString()}
            </div>
            <div className="todo-content">{currentTodo.content}</div>
          </>
        ) : (
          <span>목록에서 할 일을 선택해 주세요!</span>
        )}
      </div>
    </div>
  );
}

export default React.memo(TodoList);
