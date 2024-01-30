import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getTasks = createAsyncThunk('tasks/getTasks', async () => {
  const response = await fetch('tasks.json');
  const data = await response.json();
  return data.tasks;
});

const initialState = {
  taskList: [],
  status: 'idle',
};

const tasksSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
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

export default tasksSlice.reducer;
