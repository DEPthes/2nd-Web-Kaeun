import React, { useState } from "react";
import styled from "styled-components";

type ToDoAddProps = {
  todoAddHandle: (newTodo: string, newDate: string) => void;
};

const ToDoForm = styled.form`
  & input {
    font: inherit;
    font-size: 14px;
    border: 1px solid #c37a7a;
    border-radius: 10px;
    margin: 0.3rem;
    outline: none;
    padding: 0.2rem 0.5rem;
    color: #c37a7a;
  }

  & input::placeholder {
    color: #c37a7a;
  }

  & button {
    font: inherit;
    font-size: 15px;
    color: #ffffff;
    border: none;
    border-radius: 10px;
    background: #c37a7a;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    margin: 0.5rem 0.3rem;
    padding: 0.2rem 0.9rem;
    cursor: pointer;
  }
`;

const ToDoAdd: React.FC<ToDoAddProps> = ({ todoAddHandle }) => {
  const [newTodo, setNewTodo] = useState("");
  const [newDate, setNewDate] = useState("");

  const InputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const DateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewDate(event.target.value);
  };

  const ButtonClickHandler = (event: React.FormEvent) => {
    event.preventDefault();

    todoAddHandle(newTodo, newDate);
    setNewTodo("");
    setNewDate("");
  };

  return (
    <ToDoForm>
      <input
        type="text"
        value={newTodo}
        placeholder="할 일을 작성하세요"
        onChange={InputChangeHandler}
      />
      <input type="date" value={newDate} onChange={DateChangeHandler} />
      <button onClick={ButtonClickHandler}>Add</button>
    </ToDoForm>
  );
};

export default ToDoAdd;
