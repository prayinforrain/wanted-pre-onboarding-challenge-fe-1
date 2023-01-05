import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Todo } from "../../../types/Todo";

export default function TodoListItem({ item }: { item: Todo }) {
  const [params] = useSearchParams();
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
        defaultChecked={params.get("id") === item.id}
      />
    </label>
  );
}
