import React, { ChangeEvent, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectedTodo } from "../../../atom";
import useToast from "../../../hooks/useToast";
import { Todo } from "../../../types/Todo";
import { HttpUtil } from "../../../utils/http";

const defaultTodoData = {
  title: "",
  content: "",
  id: "",
  createdAt: "",
  updatedAt: "",
};

export default function TodoDetail() {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const queryClient = useQueryClient();
  const currentTodo = useRecoilValue(selectedTodo);
  const [todoData, setTodoData] = useState<Todo>(defaultTodoData);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const fetchTodo = async (): Promise<void> => {
    if (!currentTodo) return;
    const response = await HttpUtil(
      `http://localhost:8080/todos/${currentTodo}`,
      "GET"
    );
    if (response.statusCode !== 200) {
      navigate("/");
      return;
    }
    setTodoData(response.data);
  };

  useEffect(() => {
    if (currentTodo === "new") {
      setTodoData(defaultTodoData);
      setIsEditing(true);
      return;
    }
    setIsEditing(false);
    fetchTodo();
  }, [currentTodo]);

  const handleEditBtn = async () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      return;
    }
    const response = await HttpUtil(
      `http://localhost:8080/todos/${currentTodo}`,
      "PUT",
      {
        title: todoData.title,
        content: todoData.content,
      }
    );
    if (response.statusCode !== 200) {
      addToast(`요청에 실패하였습니다.\n${response.details}`);
      return;
    }
    addToast(`저장되었습니다.`);
    queryClient.invalidateQueries();
    setIsEditing(false);
  };

  const handleDeleteBtn = async () => {
    const response = await HttpUtil(
      `http://localhost:8080/todos/${currentTodo}`,
      "DELETE"
    );
    if (response.statusCode !== 200) {
      addToast(`요청에 실패하였습니다.\n${response.details}`);
      return;
    }
    addToast("삭제되었습니다.");
    navigate("/");
    queryClient.invalidateQueries();
    setIsEditing(false);
  };

  const handleSubmitNew = async () => {
    const response = await HttpUtil(`http://localhost:8080/todos/`, "POST", {
      title: todoData.title,
      content: todoData.content,
    });
    if (response.statusCode !== 200) {
      addToast(`요청에 실패하였습니다.\n${response.details}`);
      return;
    }
    queryClient.invalidateQueries();
    addToast("새 할일이 추가되었습니다.");
    navigate(`/?id=${response.data.id}`);
    setIsEditing(false);
  };

  const handleChangeInput = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (!todoData) return;
    const { target } = e;
    setTodoData({
      ...todoData,
      [target.name]: target.value,
    });
  };

  return (
    <div className="todoDetailContainer">
      {currentTodo ? (
        <>
          <div className="todo-header">
            <input
              type="text"
              name="title"
              value={todoData.title}
              disabled={!isEditing}
              onChange={handleChangeInput}
              placeholder="제목"
            />
            {currentTodo !== "new" ? (
              <>
                <button type="button" onClick={handleEditBtn}>
                  {isEditing ? "저장" : "수정"}
                </button>
                <button type="button" onClick={handleDeleteBtn}>
                  삭제
                </button>
              </>
            ) : (
              <button type="button" onClick={handleSubmitNew}>
                저장
              </button>
            )}
          </div>
          <div className="todo-createdAt">
            {currentTodo !== "new" &&
              new Date(todoData.createdAt).toLocaleString()}
            <br />
            {currentTodo !== "new" &&
              todoData.createdAt !== todoData.updatedAt &&
              `Updated At ${new Date(todoData.updatedAt).toLocaleString()}`}
          </div>
          <textarea
            name="content"
            disabled={!isEditing}
            className="todo-content"
            value={todoData.content}
            onChange={handleChangeInput}
            placeholder="내용을 입력하세요..."
          />
        </>
      ) : (
        <span>목록에서 할 일을 선택해 주세요!</span>
      )}
    </div>
  );
}
