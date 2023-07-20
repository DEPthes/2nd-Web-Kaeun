import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDoFilter from "./ToDoFilter";
import styled from "styled-components";
import ToDoAdd from "./ToDoAdd";

const DUMMY_TODO = [
  {
    id: "0",
    finish: true,
    todo: "리액트 강의보기",
    date: new Date("2023, 5, 31"),
  },
  {
    id: "1",
    finish: true,
    todo: "To Do List 코드 작성하기",
    date: new Date("2023, 5, 31"),
  },
  {
    id: "2",
    finish: false,
    todo: "KCU 과제하기",
    date: new Date("2023, 6, 1"),
  },
  {
    id: "3",
    finish: false,
    todo: "컴퓨터 네트워크 퀴즈 공부하기",
    date: new Date("2023, 6, 1"),
  },
];

const Card = styled.div`
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  margin: 5rem auto;
  margin-bottom: 2rem;
  width: 30rem;
  max-width: 95%;

  & h2 {
    color: #af5d5d;
    text-align: center;
  }

  & hr {
    border: 1px solid #eedfdf;
  }
`;

const LogoutBtn = styled.button`
  font-family: inherit;
  font-size: 15px;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  background: #c37a7a;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  padding: 0.3rem 1.1rem 0.5rem;
  display: flex;
  margin: 0 auto;
  cursor: pointer;
`;

const ToDoList = (props) => {
  const [todos, setTodos] = useState(DUMMY_TODO);
  const [filter, setFilter] = useState("all");

  const CheckboxChangeHandler = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, finish: !todo.finish } : todo
    );
    setTodos(updatedTodos);
  };

  const ToDoAddHandler = (newTodo, newDate) => {
    if (newTodo.trim() !== "" && newDate.trim() !== "") {
      const newId = todos.length.toString();
      const newTodoItem = {
        id: newId,
        finish: false,
        todo: newTodo,
        date: new Date(newDate),
      };
      setTodos([...todos, newTodoItem]);
    }
  };

  const FilterChangeHandler = (filterType) => {
    setFilter(filterType);
  };

  const filteredTodos = () => {
    if (filter === "finished") {
      return todos.filter((todo) => todo.finish);
    } else if (filter === "unfinished") {
      return todos.filter((todo) => !todo.finish);
    } else {
      return todos;
    }
  };

  return (
    <>
      <Card>
        <h2>To Do List</h2>
        <ToDoFilter FilterChangeHandler={FilterChangeHandler} />
        {filteredTodos().map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            CheckboxChangeHandler={CheckboxChangeHandler}
          />
        ))}
        <hr />
        <ToDoAdd todoAddHandle={ToDoAddHandler} />
      </Card>
      <LogoutBtn onClick={props.onLogout}>Logout</LogoutBtn>
    </>
  );
};

export default ToDoList;
