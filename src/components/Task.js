import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../redux/tasksSlice';

const Task = () => {
  const dispatch = useDispatch();
  const { filteredTask, taskList } = useSelector((store) => store.task);

  useEffect(() => {
    if (taskList.length === 0) {
      dispatch(getTasks());
    }
  }, [taskList.length, dispatch]);

  return (
    <>
      { (filteredTask.length > 0 ? filteredTask : taskList).map((item) => (
        <div key={item.id}>
          <span>{item.status}</span>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <p>{item.dueDate}</p>
        </div>
      )) }
    </>
  );
};

export default Task;
