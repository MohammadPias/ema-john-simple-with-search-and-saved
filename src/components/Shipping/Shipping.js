import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    reset();
                    alert('Your order has been enrolled');
                    clearTheCart();
                }
            })
    };
    return (
        <div className="shippingForm-container">
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("Name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                <input placeholder="city" {...register("city", { required: true })} />
                <input placeholder="address" {...register("address", { required: true })} />
                <input placeholder="phone" {...register("phone", { required: true })} />
                {errors.exampleRequired && <span className="error">This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;