import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Task from '../components/Task';
import { filterTask } from '../redux/tasksSlice';

const AllTasksPage = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const handleClick = (e) => {
    const inputValue = e.target.textContent;
    setFilter(inputValue);
    dispatch(filterTask(inputValue));
  };

  return (
    <>
      <h2>My Tasks</h2>
      <div>
        <p>Filter</p>
        <button type="button" value={filter} onClick={(e) => handleClick(e)}>All</button>
        <button type="button" value={filter} onClick={(e) => handleClick(e)}>pending</button>
        <button type="button" value={filter} onClick={(e) => handleClick(e)}>completed</button>
      </div>
      <Task />
    </>
  );
};

export default AllTasksPage;
