import React from 'react'
import logo from '../assets/logo.png';
import '../App.css';

export  const Navbar = ()=> {
    return (
        <div>
        <header className="contain">
            <a className="logo bg-img" href="#" />
            <div id="appNav">
            <div className="mobile nav-btn">
                <div className="nav-btn-bar" />
            </div>
            <nav className="close-nav">
                <span className="close close-nav-btn mobile" />
                <a className="nav-item" href="#">Buy Electricity</a>
                <a className="nav-item" href="#">Merchant</a>
                <a className="nav-item" href="#">FAQ</a>
                <a className="nav-item" href="#">Contact Us</a>
                <a href="tel:08136821740" className="nav-item desktop"><b>24 Hour Support &nbsp; 08136821740</b></a>
                <a className="nav-item button" href="#">LOGIN</a>
            </nav>
            </div>
        </header>  
</div>

    )
}
