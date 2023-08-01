import React from "react";

type ToDoDateProps = {
  date: Date;
};

const ToDoListDate: React.FC<ToDoDateProps> = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "2-digit" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div>
      ~{year}.{month}.{day}
    </div>
  );
};

export default ToDoListDate;
