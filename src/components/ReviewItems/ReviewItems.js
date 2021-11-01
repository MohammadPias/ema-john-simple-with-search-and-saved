import React from 'react';

const ReviewItems = (props) => {
    const {name, price, key, quantity} = props.product
    return (
        <div className="product">
            <div>
                <h4 className="product-name">{name}</h4>
                <h5>Price: {price}</h5>
                <p>Quantity: {quantity}</p>
                <button onClick={()=> props.handleRemove(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItems;