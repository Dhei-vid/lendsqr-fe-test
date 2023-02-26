import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

import PropTypes from "prop-types";
import { Formik, Field, Form, ErrorMessage } from "formik";

import Button from "../../components/Button/button.component";
import "./login.form.style.scss";

import logo from "../../assets/lendsqr_logo1.png";
import logoImage from "../../assets/pablo-sign-in.png";

const LoginUser = async (email, password) => {
  axios
    .post("http://localhost:8080/login", {
      email,
      password,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const Login = ({ setToken }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate("/dashboard");
    console.log("nov");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const token = await LoginUser(email, password);

  //   setToken(token);
  // };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .required("Required")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // handleSubmit();
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          navigate("/dashboard");
        }, 400);
      }}
    >
      <div className="login-container">
        <div className="login-body-container">
          <div className="left-half">
            <img className="logo" src={logo} alt="logo" />
            <img className="img-logo" src={logoImage} alt="logo animation" />
          </div>
          <div className="right-half">
            <h2> Welcome!</h2>
            <p>Enter details to login.</p>

            <Form>
              <Field type="text" placeholder="Email" name="email" />
              <ErrorMessage name="email" />

              <div className="passwordField">
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" />
                <span className="password-cta" onClick={toggleShowPassword}>
                  Show
                </span>
              </div>
              <span>Forgot password?</span>
              <Button children={`Log in`} onClick={navigateToDashboard} />
            </Form>
          </div>
        </div>
      </div>
    </Formik>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default Login;
