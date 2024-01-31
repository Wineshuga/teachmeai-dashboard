import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet } from 'react-router';
import Dashboard from '../components/Dashboard';

const WelcomePage = () => {
  const [dashboardVisible, setDashboardVisible] = useState(false);

  const toggleVisibility = () => {
    setDashboardVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <section className="flex">
      <button
        type="button"
        onClick={toggleVisibility}
        className="md:hidden absolute py-3 mx-2 text-xl"
      >
        {' '}
        <FontAwesomeIcon icon={faBars} />
      </button>
      <section
        className={`md:block ${
          dashboardVisible ? 'visible' : 'hidden'
        } md:sticky absolute bg-sky-500 pt-12 p-3 md:w-1/3 h-screen`}
      >
        <Dashboard visible={toggleVisibility} />
      </section>
      <section className="md:pt-3 md:p-5 md:mx-5 m-1 p-2 mt-12 border-2 border-sky-500 w-screen h-full">
        <Outlet />
      </section>
    </section>
  );
};

export default WelcomePage;
