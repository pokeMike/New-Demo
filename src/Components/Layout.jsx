// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  const location = useLocation();
  const showSidebar = location.pathname === '/dashboard';

  return (
    <div className="flex">
      {showSidebar && <Sidebar />}
      <div className={`flex-1 ${showSidebar ? 'ml-64' : ''}`}>
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
