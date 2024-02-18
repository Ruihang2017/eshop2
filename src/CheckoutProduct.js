import React from "react";
import "./CheckoutProduct.css";


function CheckoutProduct({ id, image, title, price, rating }) {
    const removeFromBasket = () => {
        console.log("removeFromBasket")
    }
    return (
        <div>
            <img src={image} alt="" className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">

                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
