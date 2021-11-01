import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, handleSignOut } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/reviewOrders">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {user?.email && <NavLink to="/orders">Orders</NavLink>}
                {user?.email && <NavLink to="/">{user?.displayName}</NavLink>}
                {
                    !user?.email ? <NavLink to="/login">Login</NavLink>

                        :

                        <button onClick={handleSignOut} >Signout</button>
                }
            </nav>
        </div>
    );
};

export default Header;