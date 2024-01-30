import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getTasks = createAsyncThunk('tasks/getTasks', async () => {
  const response = await fetch('tasks.json');
  const data = await response.json();
  return data.tasks;
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
    filterTask: (state, action) => {
      const filtered = action.payload;
      const filteredTask = state.taskList.filter((task) => task.status.includes(filtered));
      state.filteredTask = filteredTask.length > 0 ? filteredTask : [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTasks.fulfilled, (state, { payload }) => {
        state.taskList = payload;
        state.status = 'success';
      })
      .addCase(getTasks.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { filterTask } = tasksSlice.actions;
export default tasksSlice.reducer;
