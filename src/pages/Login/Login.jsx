import React from "react";
import MyContaner from "../../component/Mycontaner";
import { FcGoogle } from "react-icons/fc";
import { Link, Links, useLocation, useNavigate } from "react-router";
import useAuth from "../../Hook/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const { sigUser, signWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const googlesignhandalar = () => {
    signWithGoogle()
      .then(() => {
        toast("User login successfully!");
        setTimeout(() => {
          navigate(`${location.state ? location.state : "/"}`);
        }, 2000);
      })
      .catch((err) => {
      toast(err.code);
      });
  };
  const loginhandalar = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log({ password, email });
    sigUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
        toast("user login successfully");
      })
      .catch((err) => {
        toast(err.code);
      });
  };
  return (
    <div className=" h-screen ">
      <div className="hero bg-base-200 min-h-screen w-full">
        <div className="hero-content flex-col lg:flex-row-reverse w-full ">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className=" text-center font-bold  mt-5 text-4xl text-fast">
              Login Now
            </h1>
            <div className="card-body">
              <form onSubmit={loginhandalar}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                    required
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>

                  <button
                    type="submit"
                    className="btn bg-[#00a598] text-white font-bold text-second  "
                  >
                    Login
                  </button>
                  <p>
                    You have no account?
                    <Link to="/register">
                      <span className="text-[#00a598]">Registeer</span>
                    </Link>
                  </p>
                </fieldset>
              </form>
              <div>
                <h1 className="text-center">Or</h1>
              </div>
              <button onClick={googlesignhandalar} className="btn ">
                <FcGoogle /> Sign With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
