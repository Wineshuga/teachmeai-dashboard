import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  taskList: [],
  filteredTask: [],
  status: 'idle',
};

const tasksSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskList = [...state.taskList, action.payload];
    },
    filterTask: (state, action) => {
      const filtered = action.payload;
      const filteredTask = state.taskList.filter((task) => task.status.includes(filtered));
      state.filteredTask = filteredTask.length > 0 ? filteredTask : [];
    },
  },
});

export const { addTask, filterTask } = tasksSlice.actions;
export default tasksSlice.reducer;
