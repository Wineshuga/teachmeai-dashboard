import React, { useState } from 'react';

const AddTaskPage = () => {
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
    console.log('Task submitted:', { title, desc, dueDate });
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
          />
        </label>
        <label htmlFor="desc">
          Description:
          <input
            type="text"
            name="desc"
            id="desc"
            value={desc}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="dueDate">
          Due date:
          <input
            type="date"
            name="date"
            id="date"
            value={dueDate}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Create Task" />
      </form>
    </section>
  );
};

export default AddTaskPage;
