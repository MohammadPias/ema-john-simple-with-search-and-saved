import React from 'react';
import useProducts from '../../Hooks/UseProducts';
import useCart from '../../Hooks/useCart'
import Cart from '../Cart/Cart'
import ReviewItems from '../ReviewItems/ReviewItems';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [cart, setCart] = useCart();
    const history = useHistory();
    // console.log(cart)
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }
    const handlePlaceOrder = () => {

        // setCart([]);
        // clearTheCart();
        history.push('/shipping');

    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItems
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="btn-regular">Proceed to Shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;