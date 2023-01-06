import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { Todo } from "../../../types/Todo";
import { HttpUtil } from "../../../utils/http";
import TodoListItem from "./TodoListItem";
import LoadingSpinner from "../../common/LoadingSpinner";
import { selectedTodo } from "../../../atom";

function TodoList() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const setCurrentTodo = useSetRecoilState<null | string>(selectedTodo);

  const fetchTodos = async (): Promise<Todo[]> => {
    const response = await HttpUtil("http://localhost:8080/todos", "GET");
    return response.data;
  };
  const { data, isLoading } = useQuery("todo", fetchTodos);

  useEffect(() => {
    if (!data) return;
    setCurrentTodo(params.get("id") ?? null);
  }, [params, data]);

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
      {isLoading && <LoadingSpinner />}
      <div className="todoList">
        {!isLoading &&
          data &&
          data.map((item: Todo) => <TodoListItem key={item.id} item={item} />)}
        {!isLoading && data?.length === 0 && <div>일정이 없습니다!</div>}
      </div>
      <Link className="btnSignOut" to="/" onClick={signOut}>
        Sign Out
      </Link>
    </ul>
  );
}

export default React.memo(TodoList);
