import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectedTodo } from "../../../atom";
import { Todo } from "../../../types/Todo";

export default function TodoListItem({ item }: { item: Todo }) {
  const currentTodo = useRecoilValue(selectedTodo);
  const navigate = useNavigate();

  const onSelectItem = (id: string) => {
    navigate(`/?id=${id}`);
  };

  return (
    <label className="todoListItem" htmlFor={`todoItem${item.id}`}>
      {item.title}
      <input
        type="radio"
        name="test"
        id={`todoItem${item.id}`}
        onClick={() => onSelectItem(item.id)}
        checked={currentTodo === item.id}
        readOnly
      />
    </label>
  );
}
