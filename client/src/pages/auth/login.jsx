import "../../../admin/assets/css/style.css";
import "../../../admin/assets/css/bootstrap.min.css";
import logoimg from "../../assets/img/logo-white.png";
import { FaFacebook, FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CreateTost } from "../../utils/toastifyAlert";
import { setMessageEmpty } from "../../features/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/Auth/authapiSlice";
const Login = () => {
  const auth = useSelector((state) => state.auth);
  const navagte = useNavigate();
  const [input, setinput] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleInputchange = (e) => {
    setinput((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = () => {
    if (!input.email || !input.password) {
      CreateTost("All fields are required", "warning");
    }
    dispatch(userLogin(input));

    // CreateTost("Login success");
  };

  useEffect(() => {
    if (auth.user) {
      navagte("/");
    }
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
    <div>
      {" "}
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left bg-mainbg">
                <img className="img-fluid " src={logoimg} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Login</h1>
                  <p className="account-subtitle">Access to our dashboard</p>

                  {/* <!-- Form --> */}
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="email"
                      value={input.email}
                      onChange={handleInputchange}
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="password"
                      value={input.password}
                      onChange={handleInputchange}
                      className="form-control"
                      type="text"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    {" "}
                    <button
                      onClick={handleLogin}
                      className="btn btn-primary hover:border-white font-semibold   btn-block hover:bg-mainbg border-zinc-300 text-zinc-500 "
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  {/* <!-- /Form --> */}

                  <div className="text-center forgotpass">
                    <Link to="/forgotpass">Forgot Password?</Link>
                  </div>
                  <div className="login-or">
                    <span className="or-line"></span>
                    <span className="span-or">or</span>
                  </div>

                  {/* <!-- Social Login --> */}
                  <div className="social-login">
                    <span className="">Login with</span>

                    <a href="#" className="facebook p-2">
                      {" "}
                      <FaFacebookF className="" />{" "}
                    </a>
                    <a href="#" className="  bg-mainbg google p-2 ">
                      <FaGoogle className=" " />
                    </a>
                  </div>
                  {/* <!-- /Social Login --> */}

                  <div className="text-center dont-have">
                    Don’t have an account?{" "}
                    <Link to={"/register"}>Register</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
