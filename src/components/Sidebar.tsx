import React from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import HRDSidebar from './HRDSidebar';
import UserSidebar from './UserSidebar';

const Sidebar = ({ role, isLoggedIn, onLogout }) => {
  return (
    <div>
      {isLoggedIn ? (
        <div>
          {role === 'admin' && <AdminSidebar />}
          {role === 'hrd' && <HRDSidebar />}
          {role === 'user' && <UserSidebar />}
          <button onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <form>
            {/* Tambahkan elemen form login */}
            <label>
              Username:
              <input type="text" />
            </label>
            <label>
              Password:
              <input type="password" />
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
