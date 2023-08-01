import React from "react";
import ToDoListDate from "./ToDoListDate";
import styled from "styled-components";

type ToDo = {
  id: string;
  finish: boolean;
  todo: string;
  date: Date;
};

type ToDoItemProps = {
  todo: ToDo;
  CheckboxChangeHandler: (id: string) => void;
};

const ToDoDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  color: #c37a7a;

  & p {
    margin: 0.5rem;
  }
`;

const ToDoCheck = styled.input`
  accent-color: #c37a7a;
  cursor: pointer;
`;
const TodoItem: React.FC<ToDoItemProps> = ({ todo, CheckboxChangeHandler }) => {
  return (
    <ToDoDiv>
      <ToDoCheck
        type="checkbox"
        checked={todo.finish}
        onChange={() => CheckboxChangeHandler(todo.id)}
      />
      <p>{todo.todo} </p>
      (<ToDoListDate date={todo.date} />)
    </ToDoDiv>
  );
};

export default TodoItem;
