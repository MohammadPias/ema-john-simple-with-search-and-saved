import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Signup = () => {
    const {user, handleGoogleSignIn} = useAuth();
    return (
        <div className="login-container">
            <div className="login-form">
                <form>
                    <h3>Login</h3>
                    <input type="email" name="email" placeholder="email" />
                    <br />
                    <input type="password" name="password" placeholder="password" />
                    <br />
                    <input type="password" name="password" placeholder="re-enter password" />
                    <br />
                    <p>Already have an account? <Link to="/login"> Login</Link></p>
                    <button>Signup</button>

                    <p>Google Signin</p>
                    <button onClick={handleGoogleSignIn} className="google-signin">Sign in with GOOLE</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;