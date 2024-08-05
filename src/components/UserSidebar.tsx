import React from 'react';
import { Link } from 'react-router-dom';

const UserSidebar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/user/profile">Profile</Link></li>
        <li><Link to="/user/settings">Settings</Link></li>
      </ul>
    </div>
  );
}

export default UserSidebar;
