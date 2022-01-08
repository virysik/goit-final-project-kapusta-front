import { createSlice } from '@reduxjs/toolkit';

const year = String(new Date().getFullYear());
const month = String(new Date().getMonth() + 1);
const day = String(new Date().getDate());

const initialState = {
  date: { day, month, year },
};

const dateSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addDate: (state, action) => {
      state.date = action.payload;
    },

    goBackOneMonth: (state, action) => {
      if (Number(state.date.month) === 1) {
        state.date.year = Number(state.date.year) - 1;
        state.date.month = 12;
        return;
      }

      state.date.month = Number(state.date.month) - 1;
    },
    goForwardOneMonth: (state, action) => {
      if (Number(state.date.month) === 12) {
        state.date.year = Number(state.date.year) + 1;
        state.date.month = 1;
        return;
      }

      state.date.month = Number(state.date.month) + 1;
    },
  },
});

export const { addDate, goBackOneMonth, goForwardOneMonth } = dateSlice.actions;

export default dateSlice.reducer;
