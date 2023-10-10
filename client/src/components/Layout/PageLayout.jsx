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
import { BsPersonWorkspace } from "react-icons/bs";
import {
  FaBoxOpen,
  FaCreativeCommons,
  FaDAndD,
  FaGoodreads,
  FaNetworkWired,
  FaSalesforce,
  FaSdCard,
  FaUpload,
} from "react-icons/fa";
import { TbBrandAdobe, TbBrandAbstract } from "react-icons/tb";
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
import {
  GetAllCatagorys,
  GetAllTag,
} from "../../features/Product/productapiSlice";
const PageLayout = () => {
  const { user } = useAuthUser();
  // console.log(auth.user.role);
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllpermition());
    dispatch(GetAllrole());
    dispatch(GetAllusers());
    dispatch(GetAllTag());
    dispatch(GetAllCatagorys());
  }, []);

  return (
    <div>
      <div className="main-wrapper ">
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
                      <Link className="hover:no-underline" to="/">
                        <MdHome className=" text-2xl" /> <span>Dashboard</span>
                      </Link>
                    </li>
                  )}

                {user?.role?.permissions?.includes("Users") && (
                  <li className={location.pathname == "/users" && "active"}>
                    <Link className="hover:no-underline" to="/users">
                      <MdPeople className=" text-2xl" /> <span>Users</span>
                    </Link>
                  </li>
                )}
                {user?.role?.permissions?.includes("Role") && (
                  <li className={location.pathname == "/role" && "active"}>
                    <Link className="hover:no-underline" to="/role">
                      <BsPersonWorkspace className=" text-2xl" />{" "}
                      <span>Role</span>
                    </Link>
                  </li>
                )}
                {user?.role?.permissions?.includes("Permition") && (
                  <li className={location.pathname == "/permition" && "active"}>
                    <Link className="hover:no-underline" to="/permition">
                      <FaNetworkWired className=" text-2xl" />{" "}
                      <span>Permition</span>
                    </Link>
                  </li>
                )}

                <li
                  className={
                    (location.pathname == "/productCreate" && "active") ||
                    (location.pathname == "/product" && "active")
                  }
                >
                  <Link className="hover:no-underline" to="/product">
                    <FaBoxOpen className=" text-2xl" /> <span>Products</span>{" "}
                    {location.pathname == "/productCreate" && (
                      <FaUpload className="text-lg ml-3" />
                    )}
                  </Link>
                </li>

                {user?.role?.permissions?.includes("Brand") && (
                  <li className={location.pathname == "/brand" && "active"}>
                    <Link className="hover:no-underline" to="/brand">
                      <TbBrandAdobe className=" text-2xl" /> <span>Brand</span>
                    </Link>
                  </li>
                )}
                {user?.role?.permissions?.includes("Tag") && (
                  <li className={location.pathname == "/tag" && "active"}>
                    <Link className="hover:no-underline" to="/tag">
                      <TbBrandAbstract className=" text-2xl" /> <span>Tag</span>
                    </Link>
                  </li>
                )}

                <li className={location.pathname == "/catagory" && "active"}>
                  <Link className="hover:no-underline" to="/catagory">
                    <TbBrandAbstract className=" text-2xl" />{" "}
                    <span>Catagory</span>
                  </Link>
                </li>

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
