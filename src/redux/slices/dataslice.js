import { createSlice } from "@reduxjs/toolkit";
import { cardData } from "../../constant";

const dataSlice = createSlice({
  name: "data",
  initialState: cardData,
  reducers: {
    add: (state, action) => {
      console.log(action.payload);
      state.unshift(action.payload);
    },
    remove: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.length) {
        state.splice(index, 1); // Remove the item at the specified index
      }
    },
  },
});

export const { add, remove } = dataSlice.actions;
export default dataSlice.reducer;
