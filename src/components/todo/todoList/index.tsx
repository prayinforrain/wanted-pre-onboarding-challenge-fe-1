import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { Todo } from "../../../types/Todo";
import { HttpUtil } from "../../../utils/http";
import TodoListItem from "./TodoListItem";
import { selectedTodo } from "../../../atom";

function TodoList() {
  const [params] = useSearchParams();
  const setCurrentTodo = useSetRecoilState<null | string>(selectedTodo);

  const fetchTodos = async (): Promise<Todo[]> => {
    const response = await HttpUtil("http://localhost:8080/todos", "GET");
    return response.data;
  };
  const { data: Todos } = useQuery("todo", fetchTodos, { suspense: true });

  useEffect(() => {
    setCurrentTodo(params.get("id") ?? null);
  }, [params, Todos]);

  return (
    <>
      {Todos?.map((item: Todo) => (
        <TodoListItem key={item.id} item={item} />
      ))}
      {Todos?.length === 0 && <div>일정이 없습니다!</div>}
    </>
  );
}

export default React.memo(TodoList);
