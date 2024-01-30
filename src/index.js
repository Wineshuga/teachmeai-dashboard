import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

/*
  Project plan:
  Create a json containing all the details of the tasks.
  Create needed routes.
  Add nav bar for page navigation
  Fetch data from the json file and display them on main page
  Create the filter feature for the tasks list
  Create a page for adding new tasks.
  Add newly created tasks to json list and make them display
  Create the edit page for the task and update the json file.
  Use tailwind for responsive styling.
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);