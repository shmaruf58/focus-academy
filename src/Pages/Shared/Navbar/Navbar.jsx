/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import logo from "../../../assets/home/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import LazyLoad from "react-lazy-load";
import useAdmin from "../../../hooks/useAdmin";
import useInsta from "../../../hooks/useInsta";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Navbar = ({ theme, toggleTheme }) => {
  const { user, logOut } = useContext(AuthContext);

  const [isAdmin] = useAdmin();
  const [isInsta] = useInsta();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/instruc">Instructors</Link>
      </li>
      <li>
        <Link to="/class">Classes</Link>
      </li>

      {user ? (
        <>
          {isInsta && !isAdmin ? (
            <li>
              <Link to="/dashboard/instahome">Dashboard</Link>
            </li>
          ) : isAdmin ? (
            <li>
              <Link to="/dashboard/adminhome">Dashboard</Link>
            </li>
          ) : (
            <li>
              <Link to="/dashboard/userhome">Dashboard</Link>
            </li>
          )}
        </>
      ) : null}
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img className="md:w-16 w-10 ms-10" src={logo} alt="" />
            <a className="btn btn-ghost normal-case -ms-2 text-xl">
              Focus Academy
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        <div className="navbar-end">
          <button className="me-1 ms-1 text-xl" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon></FaMoon> : <FaSun></FaSun>}
          </button>

          {user ? (
            <>
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName ? user.displayName : user.email}
              >
                <LazyLoad>
                  <img
                    referrerPolicy="no-referrer"
                    className="md:w-12 md:h-12 w-8 h-8 me-2 rounded-full"
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://ionicframework.com/docs/img/demos/avatar.svg"
                    }
                  />
                </LazyLoad>
              </div>
              <button
                onClick={handleLogOut}
                className="md:btn md:btn-primary btn-sm btn-primary rounded-md md:uppercase lowercase "
              >
                LogOut
              </button>
            </>
          ) : (
            <>
              <a className="btn btn-primary mx-3 text-white">
                <Link to="/login">Log In</Link>{" "}
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
