import { NavLink, Outlet } from "react-router-dom";
import {
  FaAdn,
  FaUsers,
  FaBlogger,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaUtensilSpoon,
} from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useInsta from "../hooks/useInsta";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInsta] = useInsta();

  // const isAdmin = true;

  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content m-2  flex flex-col items-center justify-center">
        <Outlet></Outlet>

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button mt-5 mb-5 lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div data-theme="night" className="drawer-side shadow-white shadow-xl">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4  w-80">
          {isInsta && !isAdmin ? (
            <>
              <li className="pt-5">
                <NavLink to="/dashboard/instahome">
                  <FaHome></FaHome> Instructor Home
                </NavLink>{" "}
              </li>

              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUtensils></FaUtensils> Add A Class
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/instaclass">
                  <FaUtensilSpoon></FaUtensilSpoon> My Classes
                </NavLink>
              </li>
            </>
          ) : isAdmin ? (
            <>
              <li className="pt-5">
                <NavLink to="/dashboard/adminhome">
                  <FaHome></FaHome> Admin Home
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/dashboard/manageitems">
                  <FaAdn></FaAdn> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers> Manage Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {/* Content when isInsta is false and isAdmin is false */}
              <li className="pt-5">
                <NavLink to="/dashboard/userhome">
                  <FaHome></FaHome> User Home
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaAdn></FaAdn> My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enroll">
                  <FaCalendarAlt></FaCalendarAlt> My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
            </>
          )}

          {/* For all */}
          <div className="divider"></div>

          <li className="pt-5">
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>{" "}
          </li>

          <li>
            <NavLink to="/class">
              <FaBlogger></FaBlogger> Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/instruc">
              <FaUsers></FaUsers>Instructor
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
