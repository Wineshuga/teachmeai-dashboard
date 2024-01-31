import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Dashboard = ({ visible }) => (
  <>
    <button type="button" onClick={visible} className="md:hidden absolute p-1 m-2 rounded text-sm text-white bg-sky-700 top-px right-1">
      esc
    </button>
    <h1 className="text-2xl mb-2 font-bold italic ">TeachMe Dashboard</h1>
    <hr className="mb-5" />
    <Link className="block text-lg mb-2 rounded pl-2 py-2 text-white font-bold hover:bg-sky-700" to="/">My Tasks</Link>
    <Link className="block text-lg mb-2 rounded pl-2 py-2 text-white font-bold hover:bg-sky-700" to="add-task">Create New Task</Link>
  </>
);

Dashboard.propTypes = {
  visible: PropTypes.func.isRequired,
};
export default Dashboard;
