import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

/*
  Project plan:
  Create a json containing all the details of the tasks.
  Create needed routes.
  Add nav bar for page navigation
  Fetch data from the json file and display them on main page
  Create the filter feature for the tasks list
  Create a page for adding new tasks.
  ----------------update------------------------------
  Remove json file and all functions called and used
  Initialize an array for data storage.
  Render newly created tasks.
  Create the edit page for the task and update the page.
  Use tailwind for responsive styling.
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
