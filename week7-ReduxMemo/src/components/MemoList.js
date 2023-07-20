import React from "react";
import { useSelector } from "react-redux";
import Memo from "./Memo";

const MemoList = () => {
  const memos = useSelector((state) => state.memo);

  return (
    <div className="memos">
      {memos.map((memo) => (
        <Memo key={memo.id} memo={memo} />
      ))}
    </div>
  );
};

export default MemoList;
