import React, { useReducer, ReactElement } from 'react';
import Logo from 'assets/images/logo.svg';

const Navbar = (): ReactElement => {
  const menus = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Portfolio',
      url: '/portfolio',
    },
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Contact',
      url: '/contact',
    },
  ];

  const [toggle, changeToggle] = useReducer(
    (toggle: boolean) => !toggle,
    false
  );

  return (
    <div>
      <nav className="lg:shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16 lg:h-20 px-2 lg:px-0">
            <div className="flex-1 flex items-center sm:items-stretch">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="lg:block h-8 w-auto"
                  src={Logo}
                  alt="Workflow"
                />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="absolute inset-y-0 right-2 flex items-center sm:hidden">
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-expanded="false"
                  onClick={changeToggle}
                >
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>

                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {menus.map((menu) => (
                    <a
                      href={menu.url}
                      className=" text-gray-900 px-3 py-2 rounded-md text-lg font-medium"
                    >
                      {menu.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** Mobile Menu hidden sm:hidden*/}
        <div
          className={`${
            !toggle ? 'hidden' : 'absolute '
          } bg-white w-full shadow`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menus.map((menu) => (
              <a
                href={menu.url}
                className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"
              >
                {menu.name}
              </a>
            ))}
          </div>
        </div>
        {/** End Mobile Menu */}
      </nav>
    </div>
  );
};

export default Navbar;
