import React from "react";
import styled from "styled-components";

type ToDoFilterProps = {
  FilterChangeHandler: (filterType: string) => void;
};

const ToDoFilterDiv = styled.div`
  display: flex;
  justify-content: right;
  padding: 0 1rem;

  & select {
    font: inherit;
    font-size: 13px;
    color: #c37a7a;
    padding: 0.2rem 0.5rem;
    border: 1px solid #c37a7a;
    border-radius: 100px;
    outline: none;
    cursor: pointer;
  }
`;

const ToDoFilter: React.FC<ToDoFilterProps> = ({ FilterChangeHandler }) => {
  const SelectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    FilterChangeHandler(event.target.value);
  };

  return (
    <ToDoFilterDiv>
      <select onChange={SelectChangeHandler}>
        <option value="all">ALL</option>
        <option value="finished">FINISHED</option>
        <option value="unfinished">UNFINISHED</option>
      </select>
    </ToDoFilterDiv>
  );
};

export default ToDoFilter;
