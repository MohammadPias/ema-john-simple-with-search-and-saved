import React from 'react';
import useAuth from '../../Hooks/useAuth'

const Orders = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <div>
            <h1>This is orders page</h1>
        </div>
    );
};

export default Orders;