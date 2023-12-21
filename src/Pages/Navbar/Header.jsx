import { Link } from "react-router-dom";
import { initFlowbite } from "flowbite";
import { Navbar, Dropdown, Avatar } from "flowbite-react";

// import { Button, Navbar } from "flowbite-react";
import logo from "../../assets/icons/logo2.png";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import profileImg from "../../assets/images/user.png";
const Header = () => {
  useEffect(() => {
    initFlowbite();
  }, []);
  const { user, logOutUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <Link
          to="/"
          className="block py-2 pl-3 pr-4 font-bold text-lg  bg-[#ed2845] rounded md:bg-transparent md:text-[#ed2845] md:p-0 text-white md:dark:text-blue-500"
          aria-current="page">
          Home
        </Link>
      </li>
      {/* dropdown */}

      {user ? (
        <Dropdown className="w-fit px-5  text-start" label="Dashboard" inline>
          <Link to="/addServices">
            <Dropdown.Item className="font-bold text-lg text-[#ed2845]">
              Add Services
            </Dropdown.Item>
          </Link>
          <Link to="/manageServices">
            <Dropdown.Item className="font-bold text-lg text-[#ed2845]">
              Manage Services
            </Dropdown.Item>
          </Link>
          <Link to="/mySchedules">
            <Dropdown.Item className="font-bold text-lg text-[#ed2845]">
              My Schedules
            </Dropdown.Item>
          </Link>
        </Dropdown>
      ) : (
        ""
      )}

      <li>
        <Link
          to="/services"
          className="block text-lg  py-2 pl-3 pr-4 font-bold  rounded md:hover:bg-transparent md:hover:text-[#ed2845] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
          Services
        </Link>
      </li>
      <li>
        <Link
          to="/reviews"
          className="block text-lg py-2 pl-3 pr-4 font-bold  rounded md:hover:bg-transparent md:hover:text-[#ed2845] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
          Reviews
        </Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOutUser().then().catch();
  };
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar fluid rounded>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="w-28 mr-3" />
          </Link>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {/* profile */}
          {user ? (
            <Navbar fluid rounded>
              <div className="flex md:order-2">
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <Avatar
                      alt="User settings"
                      img={user?.photoURL ? user.photoURL : `${profileImg}`}
                      rounded
                    />
                  }>
                  <Dropdown.Header>
                    <span className="block text-sm">{user?.displayName}</span>
                    <span className="block truncate text-sm font-medium">
                      {user?.email}
                    </span>
                  </Dropdown.Header>

                  <Link to="/profile">
                    <Dropdown.Item className="font-bold">
                      Visit Profile
                    </Dropdown.Item>
                  </Link>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogOut} className="font-bold">
                    Sign out
                  </Dropdown.Item>
                </Dropdown>
                {/* <Navbar.Toggle /> */}
              </div>
            </Navbar>
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
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>{links}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
