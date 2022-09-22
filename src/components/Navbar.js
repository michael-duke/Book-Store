import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  const activeClassName = 'opacity-100';
  return (
    <nav className="relative bg-white flex justify-between items-center gap-2 p-8 sm:p-6 border border-divider-grey">
      <div className="navigation flex flex-wrap items-center sm:flex-col">
        <h1 className="text-book-blue text-4xl font-bold sl:text-2xl sm:mr-0 self-start inline-block mr-8">Bookstore CMS</h1>
        <ul className="mr-8 sm:mr-0">
          {links.map(({ id, path, text }) => (
            <li className="inline-block mr-8 sl:mr-0 sl:ml-3 uppercase text-sm sl:text-xs tracking-widest text-opaque-grey" key={id}>
              <NavLink
                end
                to={path}
                className={({ isActive }) => (isActive ? activeClassName : 'opacity-50')}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-2 rounded-full p-2 fold:p-1 fold:absolute fold:top-0 fold:right-0">
        <UserIcon className="h-8 w-8 stroke-book-blue fill-book-blue" />
      </div>
    </nav>
  );
};

export default Navbar;
