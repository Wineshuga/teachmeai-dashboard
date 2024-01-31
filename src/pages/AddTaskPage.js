import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addTask } from '../redux/tasksSlice';

const AddTaskPage = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'desc') {
      setDesc(value);
    } else {
      setDueDate(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const inputDate = new Date(dueDate);

    const status = inputDate > currentDate ? 'pending' : 'completed';

    const newTask = {
      id: nanoid(),
      title,
      desc,
      dueDate,
      status,
    };

    dispatch(addTask(newTask));
    setTitle('');
    setDesc('');
    setDueDate('');
  };

  return (
    <section>
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="desc">
          Description:
          <textarea
            maxLength={500}
            rows={10}
            cols={30}
            type="text"
            name="desc"
            id="desc"
            value={desc}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="dueDate">
          Due date:
          <input
            type="date"
            name="dueDate"
            id="dueDate"
            value={dueDate}
            onChange={handleChange}
            required
          />
        </label>
        <input type="submit" value="Create Task" />
      </form>
    </section>
  );
};

export default AddTaskPage;
