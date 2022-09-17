import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Images } from "../../Constants";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";

import "./Auth.scss";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const LOGIN_URL = "/api/auth";

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();  //using the authcontext

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      // const roles = response?.data?.roles;
      setAuth({ email, password, accessToken });
      setEmail("");
      setPassword("");
      toast.success(response.success);
      navigate('/fullname/dashboard');

    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="main-div app__flex">
      <div className="main">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
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
          <form onSubmit={handleSubmit}>
            <div className="h">
              <h1>Welcome back!</h1>
              <p>Please login to your account.</p>
            </div>
            <div className="email">
              <label htmlFor="email" />
              <input
                type="email"
                placeholder="Email"
                id="email"
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />{" "}
              <br />
              <br />
              <div className="eyes">
                <label htmlFor="password" />
                <input
                  type="text"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
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
            {/* <Link to="/fullname/dashboard"> */}
              <div className="app__flex">
                <button className="btn-primary login-btn">Login</button>
              </div>
            {/* </Link> */}
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
