import { createSlice } from "@reduxjs/toolkit";

const memoSlice = createSlice({
  name: "memo",
  initialState: [],
  reducers: {
    addMemo: (state, action) => {
      state.push(action.payload);
    },
    deleteMemo: (state, action) => {
      return state.filter((memo) => memo.id !== action.payload);
    },
    updateMemo: (state, action) => {
      const { id, content } = action.payload;
      const memo = state.find((memo) => memo.id === id);
      if (memo) {
        memo.content = content;
      }
    },
  },
});

export const memoActions = memoSlice.actions;
export default memoSlice.reducer;
