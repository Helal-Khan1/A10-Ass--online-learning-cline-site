import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hook/useAuth";
import { auth } from "../../Firebase/firebase.init";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Register = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const { createUser, signWithGoogle } = useAuth();
  const googleloginhandalar = () => {
    signWithGoogle().then(() => {
      alert("User login successfully!");
      setTimeout(() => {
        navigate(`${location.state ? location.state : "/"}`);
      }, 2000);
    });
  };
  const registerhandalar = (event) => {
    3;
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photo = event.target.photo.value;
    const password = event.target.password.value;
    console.log({ name, email, photo, password });
    if (name.length < 4) {
      toast("Name must be at least 3 characters long.");
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast(
        "❌ Password must have uppercase, lowercase & at least 6 characters!"
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
        toast("user Register sucssfully");
      })
      .catch((err) => {
        console.log(err);
        toast(err.code);
      });
  };
  return (
    <div className=" h-screen ">
      <div className="hero bg-base-200 min-h-screen w-full">
        <div className="hero-content flex-col lg:flex-row-reverse w-full ">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className=" text-center font-bold  mt-2  text-2xl text-fast">
              Ragister Naw
            </h1>
            <div className="card-body">
              <form onSubmit={registerhandalar}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  {/* name semcation */}
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Name"
                    required
                  />
                  {/* photo Url */}
                  <label className="label">image_Url</label>
                  <input
                    type="url"
                    name="photo"
                    className="input"
                    placeholder="image_Url......"
                    required
                  />
                  {/* email section  */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  {/* password section */}
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                    required
                  />

                  <button
                    type="submit"
                    className="btn bg-[#00a598] text-white font-bold text-second mt-5 "
                  >
                    Login
                  </button>
                </fieldset>
                <p>
                  Already you have account?{" "}
                  <Link to="/login">
                    <span className="text-[#00a598]">Login</span>
                  </Link>
                </p>
              </form>
              <div>
                <h1 className="text-center">Or</h1>
              </div>
              <button onClick={googleloginhandalar} className="btn  ">
                <FcGoogle /> Sign With Google{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
