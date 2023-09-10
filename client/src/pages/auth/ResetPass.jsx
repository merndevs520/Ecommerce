import "../../../admin/assets/css/style.css";
import "../../../admin/assets/css/bootstrap.min.css";
import logoimg from "../../assets/img/undraw_Access_account_re_8spm.png";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, redirect, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  userPasRestVerify,
  userRegister,
} from "../../features/Auth/authapiSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  sweelAlert,
  sweelAlertBasic,
  sweelAlertConfrom,
} from "../../utils/sweetAlert";
import { CreateTost } from "../../utils/toastifyAlert";
import { setMessageEmpty } from "../../features/Auth/authSlice";
const ResetPass = () => {
  const navagte = useNavigate();
  const { token } = useParams();
  console.log(token);
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const dispatch = useDispatch();
  const [input, setinput] = useState({
    token,
    password: "",

    confirmpasword: "",
  });

  const handleInputchange = (e) => {
    setinput((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegester = (e) => {
    e.preventDefault();

    if (!input.confirmpasword || !input.password) {
      // CreateTost("read");
      sweelAlertBasic("All fields are required");
    } else {
      if (input.password == input.confirmpasword) {
        dispatch(userPasRestVerify(input));

        setinput({
          token: "",
          password: "",

          confirmpasword: "",
        });

        navagte("/login");
        // sweelAlert({ title: "Done", msg: "Regester user done" }, "success");
      } else {
        sweelAlertBasic("Confrom password not matched");
      }
    }
  };

  // on enter button prass handler
  const handleenterbtn = (e) => {
    if (e.key === "Enter") {
      handleRegester();
    }
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
  }, [auth.error, auth.message]);

  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left bg-mainbg">
              <img
                className="img-fluid bg-mainbg rounded-2xl  "
                src={logoimg}
                alt="Logo"
              />
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Reset password</h1>
                <p className="account-subtitle">Access to our dashboard</p>

                {/* <!-- Form --> */}
                <form
                  onSubmit={handleRegester}
                  onKeyDown={handleenterbtn}
                  action=""
                >
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Password"
                      name="password"
                      value={input.password}
                      onChange={handleInputchange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="confirmpasword"
                      value={input.confirmpasword}
                      onChange={handleInputchange}
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="form-group mb-0">
                    <button
                      className="btn btn-primary btn-block text-zinc-700 hover:bg-mainbg hover:border-white border-zinc-300 hover:text-white "
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </form>
                {/* <!-- /Form --> */}

                <div className="login-or">
                  <span className="or-line"></span>
                  <span className="span-or">or</span>
                </div>

                {/* <!-- Social Login --> */}
                <div className="social-login">
                  <span>Register with</span>
                  <a href="#" className="facebook p-2">
                    <FaFacebook />
                  </a>
                  <a href="#" className="google p-2">
                    <FaGoogle />
                  </a>
                </div>
                {/* <!-- /Social Login --> */}

                <div className="text-center dont-have">
                  Already have an account? <Link to={"/login"}>Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
