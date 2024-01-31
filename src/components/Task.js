import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Task = () => {
  const { filteredTask, taskList } = useSelector((store) => store.task);

  return (
    <>
      { (filteredTask.length === 0 && taskList.length === 0) && (
        <div>
          <p>You have no tasks on the list</p>
          <Link to="../add-task">Create a New Task</Link>
        </div>
      ) }

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
