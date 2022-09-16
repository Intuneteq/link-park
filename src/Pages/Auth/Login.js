import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../../Constants";
import { AiOutlineEyeInvisible } from "react-icons/ai";

import "./Auth.scss";

const Login = () => {
  return (
    <div className="main-div app__flex">
      <div className="main">
        <div className="nav">
          <img src={Images.logo} alt="" />
          <div>
            <q>
              Education is what remains after <br /> one has forgotten
              everything he <br></br> learned in school. – Albert Einstein
            </q>
          </div>
        </div>
        <div className="body">
          <form>
            <div className="h">
              <h1>Welcome back!</h1>
              <p>Please login to your account.</p>
            </div>
            <div className="email">
              <input type="email" placeholder="Email" /> <br />
              <br />
              <div className="eyes">
                <input type="text" placeholder="Password" />
                <AiOutlineEyeInvisible />
              </div>
            </div>
            <div className="remember">
              <span>
                <input type="checkbox"></input> Remember me
              </span>
              <br />
              <p>Forgot password?</p>
            </div>
            <Link to="/fullname/dashboard">
              <div className="app__flex">
                <button className="btn-primary login-btn">Login</button>
              </div>
            </Link>
          </form>
          <section>
            <img src={Images.reading} alt="" />
          </section>
        </div>
        <div className="foot">
          <span>
            Don't have an account yet?{" "}
            <Link to="/selectschool">Create a Link Park account</Link>
          </span>
          <p>Got Questions? +2349020551592</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
