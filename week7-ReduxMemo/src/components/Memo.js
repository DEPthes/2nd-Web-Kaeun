import React from "react";
import { useDispatch } from "react-redux";
import { memoActions } from "../store/memo-slice";
import "../App.css";

const Memo = ({ memo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(memoActions.deleteMemo(memo.id));
  };

  const handleContentChange = (event) => {
    const content = event.target.value;
    dispatch(memoActions.updateMemo({ id: memo.id, content }));
  };

  return (
    <div className="card">
      <textarea value={memo.content} rows="3" onChange={handleContentChange} />
      <button className="deletebtn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Memo;
