import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
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
      <h2 className="text-3xl">My Tasks</h2>
      <div className="flex gap-2 mt-3 md:justify-end justify-center items-center">
        <p className="border px-2 text-sm">
          <FontAwesomeIcon icon={faFilter} />
          {' '}
          Filter
        </p>
        <button
          type="button"
          className="border border-sky-500 rounded text-sm px-2"
          value={filter}
          onClick={(e) => handleClick(e)}
        >
          All
        </button>
        <button
          type="button"
          className="border border-red-400 rounded text-sm px-2 bg-red-100"
          value={filter}
          onClick={(e) => handleClick(e)}
        >
          pending
        </button>
        <button
          type="button"
          className="border border-green-400  rounded text-sm px-2 bg-green-100"
          value={filter}
          onClick={(e) => handleClick(e)}
        >
          completed
        </button>
      </div>
      <Task />
    </>
  );
};

export default AllTasksPage;
