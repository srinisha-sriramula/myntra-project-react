import { createSlice } from "@reduxjs/toolkit";

const initialBag = JSON.parse(localStorage.getItem("bag")) || [];

const bagSlice = createSlice({
  name: "bag",
  initialState: initialBag,
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);

      localStorage.setItem("bag", JSON.stringify(state));
    },
    removeFromBag: (state, action) => {
      const newState = state.filter((itemId) => itemId !== action.payload);

      localStorage.setItem("bag", JSON.stringify(newState));

      return newState;
    },
  },
});

export const bagActions = bagSlice.actions;
export default bagSlice;
