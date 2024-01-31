import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateTask } from '../redux/tasksSlice';

const Task = () => {
  const { filteredTask, taskList } = useSelector((store) => store.task);

  const dispatch = useDispatch((store) => store.task);

  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleEditing = (taskId) => {
    setEditingTaskId(taskId);
  };

  const handleUpdate = (id, updatedTitle, updatedDesc) => {
    dispatch(updateTask({ id, updatedTitle, updatedDesc }));
  };

  const handleUpdatedDone = (event) => {
    event.preventDefault();
    setEditingTaskId(null);
  };

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
          <div style={{ display: editingTaskId === item.id ? 'none' : 'block' }}>
            <button type="button" onClick={() => handleEditing(item.id)}>Edit</button>
            <span>{item.status}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <p>{item.dueDate}</p>
          </div>
          <form style={{ display: editingTaskId === item.id ? 'block' : 'none' }} onSubmit={handleUpdatedDone}>
            <input
              type="text"
              value={item.title}
              onChange={(e) => handleUpdate(item.id, e.target.value, item.desc)}
              required
            />
            <input
              type="text"
              value={item.desc}
              onChange={(e) => handleUpdate(item.id, item.title, e.target.value)}
              required
            />
            <input type="submit" value="Save" />
          </form>
        </div>
      )) }
    </>
  );
};

export default Task;
