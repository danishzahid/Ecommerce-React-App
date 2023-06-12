import { Link } from 'react-router-dom';

import styles from './SignUpPage.module.css';


export const SignUpPage = () =>{
    return(
        <>
            <div className={styles.signupPage}>
      <h2>Sign Up</h2>
      <form onSubmit={()=>{}}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
        </>
    )
}