import { createSlice } from '@reduxjs/toolkit';

const updateTaskFunc = (array, payload) => array.map((task) => {
  if (task.id === payload.id) {
    return {
      ...task,
      title: payload.updatedTitle,
      desc: payload.updatedDesc,
    };
  }
  return task;
});

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
    updateTask: (state, { payload }) => {
      state.taskList = updateTaskFunc(state.taskList, payload);
      state.filteredTask = updateTaskFunc(state.filteredTask, payload);
    },
    filterTask: (state, action) => {
      const filtered = action.payload;
      const filteredTask = state.taskList.filter((task) => task.status.includes(filtered));
      state.filteredTask = filteredTask.length > 0 ? filteredTask : [];
    },
  },
});

export const { addTask, filterTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
