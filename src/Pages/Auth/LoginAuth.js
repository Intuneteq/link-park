import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Images } from "../../Constants";
import { AiOutlineEyeInvisible } from "react-icons/ai";
// import { toast } from "react-hot-toast";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import SyncLoader from "react-spinners/SyncLoader";
import { useDispatch } from "react-redux";

import "./Auth.scss";
// import axios from "../../api/axios";
// import useAuth from "../../hooks/useAuth";
// import AppContext from "../../Context/AppProvider";
import useToggle from "../../hooks/useToggle";
import { setCredentials } from "../../StateManager/auth/authSlice";
import { useLoginMutation } from "../../StateManager/auth/authApiSlice";

// const LOGIN__ENDPOINT = "/api/auth";

const LoginAuth = () => {
  const navigate = useNavigate();
//   const { auth, setAuth } = useAuth();
//   const { loading, setLoading } = useContext(AppContext);
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [check, toggleCheck] = useToggle('persist', false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

    try {
      const userData = await login({ email, password }).unwrap()
      console.log('res', userData);
      const userFirstName = userData.data.firstName
      dispatch(setCredentials({...userData, email}))
      setEmail("");
      setPassword("");
    //   setLoading(false);
    //   toast.success(`${user.firstName} ${user.lastName} Sign In Successful`);
      navigate(`/${userFirstName}/dashboard`);
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

  const cld = new Cloudinary({
    cloud: {
      cloudName: "intuneteq",
    },
  });
  const myImage = cld.image("v1663392950/link-park/Link-park-logo_e8hgxr.png");
  myImage.format("auto").quality("auto");

  return (
    <div className={isLoading ? "loading app__flex" : "login app__flex"}>
      {isLoading ? (
        <SyncLoader color="#b1b1d8" />
      ) : (
        <div className="login__main app__flex">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <div className="login__main-nav app__flex-2">
            <article>
              <AdvancedImage cldImg={myImage} />
            </article>
            <div>
              <q>
                Education is what remains after <br /> one has forgotten
                everything he <br></br> learned in school. – Albert Einstein
              </q>
            </div>
          </div>
          <div className="login__main-body app__flex-4">
            <form onSubmit={handleSubmit} className="app__flex">
              <div className="body-head column__flex">
                <h1 className="head-text">Welcome back!</h1>
                <p className="p-text">Please login to your account.</p>
              </div>
              <div className="body-input">
                <div>
                  <label htmlFor="email" />
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    ref={emailRef}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
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
                  <input 
                    type="checkbox" 
                    onChange={toggleCheck}
                      checked={check}
                  /> 
                    Remember me
                </span>
                <br />
                <p>Forgot password?</p>
              </div>
              <div className="app__flex">
                <button className="btn-primary login-btn">Login</button>
              </div>
            </form>
            <section className="app__flex">
              <img src={Images.reading} alt="" />
            </section>
          </div>
          <div className="foot app__flex-2">
            <p className="p-text">
              Don't have an account yet?
              <Link to="/selectschool"> Create a Link Park account</Link>
            </p>
            <p className="p-text">Got Questions? +2349020551592</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginAuth;
