import React from 'react';
import { Link } from 'react-router-dom';

const HRDSidebar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/hrd/dashboard">Dashboard</Link></li>
        <li><Link to="/hrd/employees">Manage Employees</Link></li>
      </ul>
    </div>
  );
}

export default HRDSidebar;
