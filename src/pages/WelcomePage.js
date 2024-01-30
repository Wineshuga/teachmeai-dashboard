import React from 'react';
import { Outlet } from 'react-router';
import Dashboard from '../components/Dashboard';

const WelcomePage = () => (
  <section>
    <Dashboard />
    <section>
      <Outlet />
    </section>
  </section>
);

export default WelcomePage;
