import { Link, useNavigate } from "react-router-dom";

import styles from "./SignUpPage.module.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("manoj");
  const [lastName, setLastName] = useState("dalle");
  const [email, setEmail] = useState("manoj@dalle.com");
  const [password, setPassword] = useState("1234");

  const { user, setUser } = useContext(AuthContext);

  const signUpHandler = async () => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      const responseData = await response.json();
      //console.log(response);
      if (response.status === 201 || response.status === 200) {
        console.log("mil gaya :", responseData);
        setUser({
          user: responseData.createdUser,
          token: responseData.encodedToken,
        });
        navigate("/products");
      }
      if (response.status === 422) {
        console.log("chutiya hai kya lawde");
      }
      // setUser({user:responseData.createdUser, token:responseData.encodedToken})
      // navigate("/products");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className={styles.signupPage}>
        <h2>Sign Up</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signUpHandler();
          }}
        >
          <input
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            placeholder="Password"
          />
          {/* <input type="password" placeholder="Confirm Password" /> */}
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
};
