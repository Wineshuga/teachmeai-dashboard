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
      {filteredTask.length === 0 && taskList.length === 0 && (
        <div className="flex flex-col justify-center items-center h-40">
          <p>You have no tasks on the list</p>
          <Link
            className="bg-sky-500 text-white p-3 mt-2 rounded hover:bg-sky-700"
            to="../add-task"
          >
            Create a New Task
          </Link>
        </div>
      )}

      {(filteredTask.length > 0 ? filteredTask : taskList).map((item) => (
        <div className="md:mx-auto md:w-11/12 border-2 border-sky-500 mt-3 px-3 py-2" key={item.id}>
          <section
            style={{ display: editingTaskId === item.id ? 'none' : 'block' }}
          >
            <div className="flex gap-2 mt-3 md:justify-end justify-end items-center">
              <button className="bg-sky-500 hover:bg-sky-700 text-white px-1 rounded" type="button" onClick={() => handleEditing(item.id)}>
                Edit
              </button>
              <span className={`border text-sm px-2 rounded ${
                item.status === 'completed' ? 'border-green-400 bg-green-100' : 'border-red-400 bg-red-100'
              }`}
              >
                {item.status}
              </span>
            </div>
            <h3 className="text-xl font-bold">
              Title:
              {' '}
              {item.title}
            </h3>
            <p>
              <span className="font-bold">Description:</span>
              {' '}
              {item.desc}
            </p>
            <p>
              <span className="font-bold">Due Date:</span>
              {' '}
              {item.dueDate}
            </p>
          </section>
          <form
            style={{ display: editingTaskId === item.id ? 'block' : 'none' }}
            onSubmit={handleUpdatedDone}
          >
            <label htmlFor="title" className="flex gap-2 my-2">
              Title:
              { ' ' }
              <input
                className="outline outline-sky-500 indent-1"
                id="title"
                type="text"
                value={item.title}
                onChange={(e) => handleUpdate(item.id, e.target.value, item.desc)}
                required
              />
            </label>
            <label htmlFor="desc" className="flex flex-col gap-2 my-2">
              Description:
              <textarea
                className="outline outline-sky-500 indent-1"
                maxLength={500}
                rows={10}
                cols={30}
                id="desc"
                type="text"
                value={item.desc}
                onChange={(e) => handleUpdate(item.id, item.title, e.target.value)}
                required
              />
            </label>
            <input className="bg-green-700 hover:bg-green-500 text-white p-1 rounded" type="submit" value="Save" />
          </form>
        </div>
      ))}
    </>
  );
};

export default Task;
