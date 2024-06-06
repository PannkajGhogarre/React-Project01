import React from 'react'
import './header.css';



const Header = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <i class="ri-briefcase-line"></i>
                    <h2>Preferable</h2>
                </div>


                <div className="search">
                    <i class="ri-search-line" />
                    <input class="input-field" type="text" placeholder='Search for Anything' />
                </div>

                <ul className="navlist">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Product<select></select></a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>

                <div className="buy">
                    <h4>Buy Now</h4>
                </div>
            </header>
        </>
    )
}

export default Header