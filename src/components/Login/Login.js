import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const { user, handleGoogleSignIn } = useAuth();
    const location = useLocation();
    const redirect_url = location.state?.from || "/shop"
    const history = useHistory();
    const handleSignIn = () => {
        handleGoogleSignIn()
        .then(result => {
            history.push(redirect_url)
        })
    }
return (
    <div className="login-container">
        {
            user?.email && <h1>Welcome {user.displayName} </h1>
        }
        <div className="login-form">
            <form>
                <h3>Login</h3>
                <input type="email" name="email" placeholder="email" />
                <br />
                <input type="password" name="password" placeholder="password" />
                <br />
                <p>Are you new to Ema-John? <Link to="/signup"> Register</Link></p>
                <button>Login</button>
            </form>
            <p>Google Sign in</p>
            <button onClick={handleSignIn} className="google-signin">Sign in with GOOLE</button>
        </div>
    </div>
);
};

export default Login;