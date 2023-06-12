import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';

export const LoginComponent = () =>{
    return (
        <>
                <div className={styles.loginPage}>
      <h2>Login</h2>
      <form onSubmit={()=>{}}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>New user? <Link to="/signup">Sign up</Link></p>
      <button onClick={()=>{}}>Login as Guest</button>
    </div>
        </>
    )
}