import React from "react";
import { useDispatch } from "react-redux";
import { memoActions } from "./store/memo-slice";
import MemoList from "./components/MemoList";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const handleAddNote = () => {
    dispatch(memoActions.addMemo({ id: Date.now(), content: "" }));
  };

  return (
    <div className="container">
      <h1>Memo</h1>
      <MemoList />
      <button className="addbtn" onClick={handleAddNote}>Add</button>
    </div>
  );
};

export default App;
