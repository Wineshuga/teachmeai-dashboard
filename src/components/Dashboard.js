import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <Link to="all-tasks">My Tasks</Link>
    <Link to="add-task">Create New Task</Link>
  </div>
);

export default Dashboard;
