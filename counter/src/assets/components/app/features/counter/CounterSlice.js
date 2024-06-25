import { createSlice } from "@reduxjs/toolkit";

const initialStateCount = {
  names: [
    {
      id: 1,
      name: "Zihad",
      home: "Saidpur",
      age: 30,
      university: "Rajshahi University",
    },
    {
      id: 2,
      name: "Thafujul",
      home: "Rangpur",
      age: 25,
      university: "RUET",
    },
    {
      id: 3,
      name: "Nishad",
      home: "Pangsha",
      age: 28,
      university: "BUET",
    },
    {
      id: 4,
      name: "Aman",
      home: "Dhaka",
      age: 19,
      university: "Dhaka University",
    },
    {
      id: 5,
      name: "Feroj",
      home: "BSMRST",
      age: 24,
      university: "Gopangonj",
    },
  ],
};

export let counterSlice = createSlice({
  name: "friends",
  initialState: initialStateCount,
  reducers: {
    showFriend: (state) => state,
    deleteFnd: (state, action) => {
      state.names = state.names.filter((fnd) => fnd.id !== action.payload.id);
    },
    createfnd: (state, action) => {
      state.names.unshift(action.payload);
    },
    updateFndRed: (state, action) => {
      let findIndex = state.names.findIndex(
        (fnd) => fnd.id === action.payload.id
      );
      state.names[findIndex] = action.payload;
    },
  },
});

export let { showFriend, deleteFnd, createfnd, updateFndRed } =
  counterSlice.actions;
export default counterSlice.reducer;
