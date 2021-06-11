import { React, useEffect, useState } from "react";
import "./App.css";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import $ from "jquery";
import M from "materialize-css";
import {
  faFacebook,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [userName, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    $(document).ready(function () {
      M.updateTextFields();
    });

    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  });

  const showPassCondition = (x) => {
    if (x.type === "password") {
      console.log(x);

      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  const showPass = () => {
    let element = document.querySelector(".passwd");
    showPassCondition(element);
  };

  const validateEmail = (inputText) => {
    console.log(inputText);
    const mailFormat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.match(mailFormat)) {
      console.log("correct");
    } else {
      console.log("bad operand");
    }
  };
  const validateReg = (input) => {
    if (input.length < 1 || input === " ") {
      console.log("input cannot be empty or less than two characters");
    }
  };

  const setValues = (e) => {};
  return (
    <div className="App">
      <div className="p-container" id="container">
        <div className="form-container sign-up-container">
          <form action="#" className="form">
            <div className="header">
              <h1 className="h1">Create Account</h1>
              <div className="error"></div>
              {/* <span>or use your email for registration</span> */}
            </div>
            <div className="input-elements">
              <div className="input-field ">
                <input
                  // placeholder="Placeholder"
                  id="user_name"
                  type="text"
                  // class="validate"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label for="first_name">Username </label>
              </div>
              <div className="input-field ">
                <input
                  // placeholder="Placeholder"
                  id="first_name"
                  type="text"
                  // class="validate"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label for="first_name">First Name</label>
              </div>

              <div class="input-field">
                <input
                  id="email"
                  type="email"
                  // class="validate"
                  onChange={(e) => {
                    setEmailReg(e.target.value);
                  }}
                />
                <label for="email">Email</label>
              </div>
              {/* <div class=""> */}
              <div class="input-field">
                <input
                  id="lastName"
                  type="text"
                  // class="validate"
                  onChange={(e) => setLastName(e.target.value)}
                />
                <label for="password">Last Name</label>
              </div>

              {/* </div> */}
              <span className="span">
                <label>
                  <input
                    className="check"
                    type="checkbox"
                    // onClick={showPassReg}
                  />
                  <span style={{ color: "#614D4D  " }}>
                    I agree with the <a href="#">Terms Of Use</a>
                  </span>
                </label>
              </span>

              <button
                className="button sign-in-btn "
                onClick={(e) => {
                  e.preventDefault();
                  validateEmail(emailReg);
                }}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#" className="form">
            <h1>Sign in</h1>

            <div class="input-field">
              <input
                id="email"
                type="email"
                // removed validate class from  all the text input fields
                // class=""
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="email">Email</label>
            </div>
            <div class="input-field">
              <input
                id="password "
                type="password"
                class=" passwd"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="password">Password</label>
            </div>
            <div className="show-password">
              <a href="#" style={{ fontSize: "0.9rem" }}>
                Forgot your password?
              </a>{" "}
              <div id="togglePassword">
                <span className="">
                  <label>
                    <input
                      className="small "
                      type="checkbox"
                      // size=""
                      onClick={showPass}
                    />
                    <span style={{ color: "#212121", fontSize: "0.9rem" }}>
                      Show password
                    </span>
                  </label>
                </span>
                {/* <button className="red"></button> */}
              </div>
            </div>

            <button className="button">Sign In</button>
            <div>
              <span>or use your account</span>
            </div>
            <div class="social-container">
              <a href="#" class="social">
                <FontAwesomeIcon icon={["far", "microsoft"]} />

                {/* <FontAwesomeIcon icon={faHome} size="lg" /> */}
                <FontAwesomeIcon icon={faFacebook} size="lg" />

                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" class="social">
                <FontAwesomeIcon icon={faGoogle} size="lg" />
              </a>
            </div>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-let">
              <h1>Welcome Back!</h1>
              <p className="p">
                To keep connected with us please login with your personal info
              </p>
              <button class="ghost" id="signIn" className="button">
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hey, There!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="ghost" id="signUp" className="button">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
