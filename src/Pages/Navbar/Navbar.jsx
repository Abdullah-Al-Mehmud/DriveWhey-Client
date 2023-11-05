import { Link } from "react-router-dom";
import { initFlowbite } from "flowbite";
import logo from "../../assets/icons/logo2.png";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import profileImg from "../../assets/images/user.png";
const Navbar = () => {
  useEffect(() => {
    initFlowbite();
  }, []);
  const { user, logOutUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <Link
          to="/"
          className="block py-2 pl-3 pr-4 font-bold  bg-[#ed2845] rounded md:bg-transparent md:text-[#ed2845] md:p-0 md:dark:text-blue-500"
          aria-current="page">
          Home
        </Link>
      </li>
      {/* dropdown */}

      {user ? (
        <li>
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ed2845] md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
            Dashboard{" "}
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {/* Dropdown menu */}
          <div
            id="dropdownNavbar"
            className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-400"
              aria-labelledby="dropdownLargeButton">
              <li>
                <Link
                  to="/myServices"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#ed2845] text-bold dark:hover:bg-gray-600 dark:hover:text-white">
                  My Services
                </Link>
              </li>
              <li>
                <Link
                  to="/addServices"
                  className="block px-4 py-2  hover:text-[#ed2845] text-bold  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Add Services
                </Link>
              </li>
              <li>
                <Link
                  to="/mySchedules"
                  className="block px-4 py-2  hover:text-[#ed2845] text-bold  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  My Schedules
                </Link>
              </li>
            </ul>
          </div>
        </li>
      ) : (
        ""
      )}

      <li>
        <Link
          to="/services"
          className="block py-2 pl-3 pr-4 font-bold  rounded md:hover:bg-transparent md:hover:text-[#ed2845] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
          Services
        </Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOutUser().then().catch();
  };
  return (
    <div>
      <nav className=" dark:bg-gray-900  w-full  left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl h-28 pb-10 flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img src={logo} className=" w-28 mr-3" alt=" Logo" />
          </Link>
          {/* login and register */}
          <div className="flex md:order-2">
            <div className="flex items-center gap-5">
              {/* profile */}
              {user ? (
                <div className="pr-10">
                  <button
                    type="button"
                    className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button"
                    aria-expanded="false"
                    data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user?.photoURL ? user.photoURL : `${profileImg}`}
                      alt="user photo"
                    />
                  </button>
                  <div
                    className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown">
                    <div className="px-4 py-3 font-bold">
                      <span className="block text-sm text-gray-900 dark:text-white">
                        {user?.displayName}
                      </span>
                      <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                        {user?.email}
                      </span>
                    </div>
                    <div className="px-4 py-3 font-bold">
                      <Link>Visit Profile</Link>
                    </div>
                    <ul
                      className="py-2 font-bold"
                      aria-labelledby="user-menu-button">
                      <li>
                        <Link
                          onClick={handleLogOut}
                          className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                          Sign out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="flex gap-3">
                  <Link to="/login">
                    <button className="px-6 py-3 bg-[#e93f58] text-white font-bold rounded-lg">
                      Log in
                    </button>
                  </Link>
                  <Link to="/registration">
                    <button className="px-6 py-3 bg-[#e93f58] text-white font-bold rounded-lg">
                      Registration
                    </button>
                  </Link>
                </div>
              )}
            </div>
            {/* responsive */}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
              {/* dropdown */}
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {links}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
