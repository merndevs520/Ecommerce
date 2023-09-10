import logoimg from "../../assets/img/download (1).png";
import { MdDelete, MdNotifications } from "react-icons/md";
import useDropdownPopup from "../../hooks/DropdownPopup";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../features/Auth/authapiSlice";
import { CreateTost } from "../../utils/toastifyAlert";
import { setMessageEmpty } from "../../features/Auth/authSlice";
import { useAuthUser } from "../../hooks/useAuthUser";

const Header = () => {
  const { user } = useAuthUser();
  console.log(user);
  const navagate = useNavigate();
  const dispatch = useDispatch();
  const { show, handleshow, dropdownRef } = useDropdownPopup();
  const auth = useSelector((state) => state.auth);
  const navagte = useNavigate();
  const handlelogout = (e) => {
    console.log(e.target);
    dispatch(userLogout());
  };
  useEffect(() => {
    if (auth.error) {
      CreateTost(auth.error, "error");
      dispatch(setMessageEmpty());
    }
    if (auth.message) {
      CreateTost(auth.message, "success");
      dispatch(setMessageEmpty());
    }
  }, [auth.error, auth.message, auth.user]);
  return (
    <div className="header ">
      {/* <!-- Logo --> */}
      <div className="header-left flex items-center gap-3">
        <a href="index.html" className="logo ">
          <img src={logoimg} alt="Logo" />
        </a>
        <p className="text-zinc-800 font-semibold text-2xl">welcome</p>
        <a href="index.html" className="logo logo-small">
          <img src={logoimg} alt="Logo" width="30" height="30" />
        </a>
      </div>
      {/* <!-- /Logo --> */}

      <a href="javascript:void(0);" id="toggle_btn">
        <i className="fe fe-text-align-left"></i>
      </a>

      <div className="top-nav-search">
        <div className="border mt-2 rounded-md p-1">
          <input
            type="text"
            className="htmlForm-control  "
            placeholder="Search here"
          />
          <button className="btn" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>

      {/* <!-- Mobile Menu Toggle --> */}
      <a className="mobile_btn" id="mobile_btn">
        <i className="fa fa-bars"></i>
      </a>
      {/* <!-- /Mobile Menu Toggle -->/ */}

      {/* <!-- Header Right Menu --> */}
      <ul className="nav user-menu ">
        {/* <!-- Notifications --> */}
        <li className="nav-item dropdown noti-dropdown relative">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-toggle="dropdown"
          >
            <MdNotifications className="text-3xl" />
            <span className="badge badge-pill">3</span>
          </a>

          {/* notifation bar */}
          <div className="w-80 absolute right-0 top-16 border  pb-3 rounded-md   bg-white hidden">
            <p className="text-zinc-700 border-b-2  px-4 py-2 font-semibold">
              Notification
            </p>

            <p className="p-2 flex items-center gap-3 mb-2">
              <img
                className="w-8  h-8 object-cover rounded-full border"
                src="https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png"
                alt=""
              />

              <div>
                <p className="text-zinc-700 ">User {user.username}</p>
                <p className="text-xs font-semibold text-zinc-500">
                  5 minites ago
                </p>
              </div>
              <p className="group ml-auto">
                <MdDelete className=" group-hover:hidden   text-2xl text-red-400 w-9 h-9 p-1 rounded-full bg-slate-200  " />
                <img
                  src="https://lordicon.com/icons/wired/flat/185-trash-bin.gif"
                  className="w-9 border h-9 object-cover  hidden group-hover:block  rounded-full"
                  alt=""
                />
              </p>
            </p>
          </div>
          {/* notifation bar */}
        </li>
        {/* <!-- /Notifications --> */}

        {/* <!-- User Menu --> */}
        <li
          onClick={handleshow}
          className="nav-item dropdown has-arrow relative "
          ref={dropdownRef}
        >
          <a href="#" className="dropdown-toggle nav-link">
            <span className="user-img">
              <img
                className="rounded-circle"
                src={
                  user.photo
                    ? user.photo
                    : "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png"
                }
                width="31"
                alt="Ryan Taylor"
              />
            </span>
          </a>
          {/* profile bar */}
          {show && (
            <div className=" absolute right-10 top-16 border w-60   pb-3 rounded-md  bg-white">
              <p className="text-zinc-700 border-b-2  px-4 py-2 font-semibold">
                profile
              </p>
              <p className="p-2 flex items-center gap-3 mb-2">
                <img
                  className="w-8  h-8 object-cover rounded-full border"
                  src={
                    user.photo
                      ? user.photo
                      : "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png"
                  }
                  alt=""
                />

                <div>
                  <p className="text-zinc-700 ">{user.username}</p>
                  <p className="text-xs font-semibold text-zinc-500">
                    5 minites ago
                  </p>
                  <p className="text-xs font-semibold text-zinc-500">
                    {user.role.name}
                  </p>
                </div>
              </p>{" "}
              <Link to="/profile">
                <p className=" mb-2 text-sm font-semibold text-zinc-500 p-2 border hover:bg-slate-200 mx-2 rounded-md">
                  My profile
                </p>
              </Link>
              <p className=" mb-2 text-sm font-semibold text-zinc-500 p-2 border hover:bg-slate-200 mx-2 rounded-md">
                Settings
              </p>
              <p
                onClick={(e) => handlelogout(e)}
                className=" mb-2 text-sm font-semibold text-zinc-500 p-2 border hover:bg-slate-200 rounded-md mx-2"
              >
                Logout
              </p>
            </div>
          )}
          {/* profile bar */}
        </li>
        {/* <!-- /User Menu -->/ */}
      </ul>
      {/* <!-- /Header Right Menu --> */}
    </div>
  );
};

export default Header;
