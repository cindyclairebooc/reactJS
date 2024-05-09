import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  const activeClass = 'rounded-md bg-indigo-200 p-2 text-orange-500';

  const NavLinkFunction = () => {
    const sideBarArray = [
      { label: 'Dashboard', path: '/dashboard', icon: 'fa-table' },
      { label: 'Admin', path: '/admin', icon: 'fa-user-cog' },
      { label: 'Students', path: '/students', icon: 'fa-user-graduate' },
    ];

    return (
      <ul>
        {sideBarArray.map(({ label, path, icon }) => (
          <li key={path} className="mb-2">
            <NavLink
              exact={true}
              to={path}
              className={`text-neutral-50 font-serif font-bold ${location.pathname === path ? activeClass : ''}`}
            >
              <i className={`fas ${icon} mr-2`} /> {/* Icon */}
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <aside className="bg-orange-500 w-60 px-8 py-6">
      <h2 className="font-semibold mb-0 text-3xl font-shrikhand text-white">Sidebar</h2>
      <hr />
      <br />
      {NavLinkFunction()}
    </aside>
  );
}

export default Sidebar;
