// import { SportsBasketball } from "@material-ui/icons";
// import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import React from "react";
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct";

import Subtotal from "./Subtotal";

function Checkout() {

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="" className="checkout_ad" />
                <div>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>
                    {/* {ShoppingBasketIcon.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))} */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>

    )
}

export default Checkout