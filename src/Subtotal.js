import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";



function Subtotal() {

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={value => {
                    <>
                        <p>
                            Subtotal ({1} items): <strong>${value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                        </small>
                    </>
                }}

                decimalScale={2}
                value={2}
                displayType={"text"}
                thousandSeparator={true}

            />
            <button>Proceed to Checkout</button>

        </div >
    )
}

export default Subtotal;