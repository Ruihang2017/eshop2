import React from "react";
import './Home.css'
import Product from './Product.js'

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
                        alt="" className="home__image" />
                    <div className="home__row">
                        <Product
                            id="1"
                            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women(Blue)"
                            price={11.96}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                            alt="product-image" />
                        <Product
                            id="2"
                            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women(Blue)"
                            price={1.12}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                            alt="product-image" />

                    </div>
                    <div className="home__row">
                        <Product
                            id="3"
                            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women(Blue)"
                            price={1.11}
                            rating={3}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                            alt="product-image" />
                        <Product
                            id="4"
                            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women(Blue)"
                            price={2.22}
                            rating={2}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                            alt="product-image" />
                        <Product
                            id="5"
                            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women(Blue)"
                            price={1.1}
                            rating={1}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                            alt="product-image" />
                    </div>
                    <div className="home__row">
                        <Product
                            id="6"
                            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women(Blue)"
                            price={0.1}
                            rating={0}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                            alt="product-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
