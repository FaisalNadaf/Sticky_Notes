import { createSlice } from "@reduxjs/toolkit";
import { cardData } from "../../constant";

const dataSlice = createSlice({
  name: "data",
  initialState: cardData,
  reducers: {
    add: (state, action) => {
      state.unshift(action.payload);
    },
    remove: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.length) {
        state.splice(index, 1); // Remove the item at the specified index
      }
    },
    toggleDone: (state, action) => {
      const card = state.find((_, idx) => idx === action.payload);
      if (card) {
        card.done = !card.done;
      }
    },
    clearall: (state) => {
      return (state = []);
    },
  },
});

export const { add, remove, clearall, toggleDone } = dataSlice.actions;
export default dataSlice.reducer;
