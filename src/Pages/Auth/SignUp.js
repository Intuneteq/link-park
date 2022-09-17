import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BsCheck } from "react-icons/bs";
import { MdError } from "react-icons/md";
import axios from "../../api/axios";
import { toast } from "react-hot-toast";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

import "./Auth.scss";

const Email_REGEX = /^\S+@\S+\.\S+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = "/api/register";

const SignUp = () => {
  const firstNameRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState(null);
  const [parentPhoneNumber, setParentPhoneNumber] = useState(null);
  const [parentEmail, setParentEmail] = useState("");

  const [studentClass, setStudentClass] = useState("ss3b");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []); //focus on the first name on refresh

  useEffect(() => {
    setValidEmail(Email_REGEX.test(email));
  }, [email]); //validates email regex

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]); //validates password regex and matching password

  useEffect(() => {
    setErrMsg("");
  }, [email, password, matchPwd]); // if email regex and password validation is failing

  const handleSelectChange = (e) => {
    setStudentClass(e.target.value);
  }; ///selects class value

  const handleSubmit = async (e) => {
    //prevent default
    e.preventDefault();
    console.log(
      email,
      firstName,
      lastName,
      password,
      phoneNumber,
      parentPhoneNumber,
      parentEmail,
      studentClass,
      "check here"
    );

    //if button is attacked by hackers

    const v1 = Email_REGEX.test(email);
    const v2 = PWD_REGEX.test(password);

    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    //log userin

    try {
      //fetch data from api using axios
      const res = await axios.post(
        REGISTER_URL,
        {
          email,
          firstName,
          lastName,
          password,
          phoneNumber,
          parentPhoneNumber,
          parentEmail,
          studentClass,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(res?.data);
      console.log(res?.accessToken);
      toast.success("login success");
      setSuccess(true);
      navigate("/Login");

      //clear state and controlled inputs
      //need value attrib on inputs for this
      setEmail("");
      setPassword("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("email Taken");
      } else {
        setErrMsg("Registration Failed");
        toast.error("failed");
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
    <div className="signup">
      <div className="signup__nav app__flex-2">
        <article>
          <AdvancedImage cldImg={myImage} />
        </article>
        <p className="p-text">
          Already have an account? <Link to="/Login">Sign in</Link>
        </p>
      </div>
      {success ? (
        <section>
          <h1>Success!</h1>
        </section>
      ) : (
        <div className="signup__input column-flex">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="head-text">Create your Link Park account</h1>
          <form onSubmit={handleSubmit} className="column-flex" id="form">
            <div>
              <label htmlFor="FirstName" />
              <input
                type="text"
                placeholder="First Name"
                id="firstname"
                ref={firstNameRef}
                autoComplete="off"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
              />
            </div>
            <br />
            <div>
              <label htmlFor="LastName" />
              <input
                type="text"
                placeholder="Last Name"
                autoComplete="off"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />{" "}
              <br />
            </div>
            <div className="red-dot">
              <label htmlFor="email">
                <BsCheck className={validEmail ? "valid" : "hide"} />
                <MdError
                  className={validEmail || !email ? "hide" : "invalid"}
                />
              </label>
              <input
                type="email"
                placeholder="Email"
                autoComplete="off"
                value={email}
                required
                aria-describedby="uidnote"
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  emailFocus && email && !validEmail
                    ? "instructions"
                    : "offscreen"
                }
              >
                {/* <MdError /> */}
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
            </div>
            <br />
            <div>
              <label htmlFor="phone number" />
              <input
                type="number"
                placeholder="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="signup__class">
              <div className="app__flex-2">
                <span>Class: </span>
                <select onChange={handleSelectChange} className="select-class">
                  <option value={((e) => handleSelectChange(e.target.value))}/>
                  <option value="JSS1">Junior Secondary School 1</option>
                  <option value="JSS2">Junior Secondary School 2</option>
                  <option value="JSS3">Junior Secondary School 3</option>
                  <option value="SS1">Senior Secondary School 1</option>
                  <option value="SS2">Senior Secondary School 2</option>
                  <option value="SS3">Senior Secondary School 3</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="parent-email" />
              <input
                type="email"
                placeholder="Parent Email"
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
              />
            </div>
            <br />
            <div>
              <label htmlFor="parent-number" />
              <input
                type="number"
                placeholder="Parent Number"
                value={parentPhoneNumber}
                onChange={(e) => setParentPhoneNumber(e.target.value)}
              />
            </div>
            <br />
            <div className="red-dot">
              <label htmlFor="password">
                <BsCheck className={validPwd ? "valid" : "hide"} />
                <MdError
                  className={validPwd || !password ? "hide" : "invalid"}
                />
              </label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />{" "}
              <p
                id="pwdnote"
                className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
              >
                {/* <MdError /> */}
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>
            </div>
            <br />
            <div className="red-dot">
              <label htmlFor="confirm_pwd">
                <MdError
                  className={validMatch && matchPwd ? "valid" : "hide"}
                />
                <MdError
                  className={validMatch || !matchPwd ? "hide" : "invalid"}
                />
              </label>
              <input
                type="password"
                id="confirm_pwd"
                placeholder="Confirm Password"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? "instructions" : "offscreen"
                }
              >
                {/* <MdError /> */}
                Must match the first password input field.
              </p>
            </div>
            <br />
            <button
              className="btn-primary"
              disabled={!validEmail || !validPwd || !validMatch ? true : false}
            >
              Sign up
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
