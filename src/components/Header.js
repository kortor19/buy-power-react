import React from 'react'
import '../App.css';
export const Header = () => {
    return (
        <div>
        <div className="banner bg-img">
            <div className="contain">
            <form acceptCharset="UTF-8" id="createOrderForm">
                <h1 className="hidden">BuyPower helps you pay Electricity Bills Online in Nigeria</h1>
                <h1>Purchase electricity from the comfort of your home</h1>
                <h3>Enter your phone number to begin</h3>
                <div className>
                <input type="tel" id="phoneInput" autoComplete="off" placeholder="0000-000-0000" name="phone" required />
                </div>
                <button type="submit">Click here to buy electricity </button>
                <h2><a className="text-white" href="#">Need help? Call 08136821740</a></h2>
            </form>
            </div>
        </div>
        </div>

    )

}
