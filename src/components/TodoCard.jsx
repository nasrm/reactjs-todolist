import React from "react";

export default function TodoCard(props) {
  const { children, removeTodo, editTodo, index } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => editTodo(index)}>
          <i class="fa-solid fa-pen-to-square" ></i>
        </button>
        <button onClick={() => removeTodo(index)}>
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
