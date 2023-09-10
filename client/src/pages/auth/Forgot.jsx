import "../../../admin/assets/css/style.css";
import "../../../admin/assets/css/bootstrap.min.css";
import logoimg from "../../assets//img/undraw_Forgot_password_re_hxwm.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userPasRest } from "../../features/Auth/authapiSlice";
import { setMessageEmpty } from "../../features/Auth/authSlice";
import { CreateTost } from "../../utils/toastifyAlert";

import { CgMail } from "react-icons/cg";
export const Forgot = () => {
  const auth = useSelector((state) => state.auth);
  const [emailbar, setemailbar] = useState(false);

  const dispatch = useDispatch();
  const [email, setemail] = useState("");

  const handlesend = () => {
    dispatch(userPasRest({ email }));
    setemail("");
  };
  useEffect(() => {
    if (auth.message) {
      CreateTost(auth.message, "success");
      dispatch(setMessageEmpty());
      setemailbar(true);
    }
    if (auth.error) {
      CreateTost(auth.error, "error");
      dispatch(setMessageEmpty());
      setemailbar(false);
    }
  }, [auth.message, auth.error]);

  return (
    <div className="main-wrapper login-body">
      {/* {emailbar && ( */}
      <a
        className={`fixed bg-white text-gray-600   font-semibold px-3 py-1 rounded-md top-5 cursor-pointer hover:shadow-lg hover:no-underline hover:text-zinc-600   ${
          emailbar ? " right-10 " : " right-[-500px] "
        } flex items-center gap-2 border visited:text-gray-700`}
        href="https://mail.google.com/mail"
      >
        <CgMail className="text-2xl text-red-500 " /> Gmail
      </a>
      {/* )} */}

      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left bg-mainbg  ">
              <img
                className="img-fluid rounded-2xl "
                src={logoimg}
                alt="Logo"
              />
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Forgot Password?</h1>
                <p className="account-subtitle">
                  Enter your email to get a password reset link
                </p>
                {/* <!-- Form --> */}
                <div className="form-group">
                  <input
                    name="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group mb-0">
                  <button
                    onClick={handlesend}
                    className="btn btn-primary btn-block text-zinc-800 border-zinc-300 hover:bg-mainbg hover:border-white hover:text-white  focus:bg-mainbg"
                    type="submit"
                  >
                    Reset Password
                  </button>
                </div>
                {/* <!-- /Form --> */}

                <div className="text-center dont-have">
                  Remember your password? <Link to="/login">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
