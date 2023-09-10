import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
// import logoimg from '../../assets//img/undraw_htmlForgot_password_re_hxwm.png'
import logoimg from "../../assets/img/download (1).png";
import {
  MdHome,
  MdMale,
  MdMan,
  MdNotifications,
  MdPeople,
  MdSailing,
  MdShoppingCartCheckout,
} from "react-icons/md";
import Header from "../../components/Header/Header";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  GetAllpermition,
  GetAllrole,
  GetAllusers,
} from "../../features/Admin/adminapiSlice";
import { useAuthUser } from "../../hooks/useAuthUser";
const PageLayout = () => {
  const { user } = useAuthUser();
  // console.log(auth.user.role);
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllpermition());
    dispatch(GetAllrole());
    dispatch(GetAllusers());
  }, []);

  return (
    <div>
      <div className="main-wrapper">
        {/* <!-- Header --> */}
        <Header />
        {/* <!-- /Header -->/ */}

        {/* side bar */}

        {/* <!-- Sidebar --> */}
        <div className="sidebar" id="sidebar">
          <div className="sidebar-inner slimscroll ">
            <div id="sidebar-menu" className="sidebar-menu ">
              <ul>
                <li className="menu-title">
                  <span>Main</span>
                </li>
                {user?.role?.permissions?.includes("Dashboard") &&
                  user?.role?.status && (
                    <li className={location.pathname == "/" && "active"}>
                      <Link to="/">
                        <MdHome className=" text-2xl" /> <span>Dashboard</span>
                      </Link>
                    </li>
                  )}

                {user?.role?.permissions?.includes("Users") && (
                  <li className={location.pathname == "/users" && "active"}>
                    <Link to="/users">
                      <MdPeople className=" text-2xl" /> <span>Users</span>
                    </Link>
                  </li>
                )}
                {user?.role?.permissions?.includes("Role") && (
                  <li className={location.pathname == "/role" && "active"}>
                    <Link to="/role">
                      <MdPeople className=" text-2xl" /> <span>Role</span>
                    </Link>
                  </li>
                )}
                {user?.role?.permissions?.includes("Permition") && (
                  <li className={location.pathname == "/permition" && "active"}>
                    <Link to="/permition">
                      <MdPeople className=" text-2xl" /> <span>Permition</span>
                    </Link>
                  </li>
                )}

                {/* <li className="">
                  <Link to="/message">
                    <MdPeople className=" text-2xl" /> <span>Message</span>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- /Sidebar --> */}

        {/* side bar */}

        {/* <!-- Page Wrapper --> */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            <Outlet />
          </div>
        </div>
        {/* <!-- /Page Wrapper --> */}
      </div>
    </div>
  );
};

export default PageLayout;
