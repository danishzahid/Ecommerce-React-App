import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const LoginComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(AuthContext);

  const loginHandler = async () => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const responseData = await response.json();
      console.log(responseData);
      setUser({
        user: responseData.foundUser,
        token: responseData.encodedToken,
      });
      navigate("/products");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className={styles.loginPage}>
        <h2>Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginHandler();
          }}
        >
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
          <button type="submit">Login</button>
        </form>
        <p>
          New user? <Link to="/signup">Sign up</Link>
        </p>
        <button onClick={() => {}}>Login as Guest</button>
      </div>
    </>
  ); //testing
};
