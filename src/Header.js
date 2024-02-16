import React from "react";
import "./Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';


function Header() {
    return (
        <div className="App">
            <div className='header_logo'>
                <StorefrontIcon className="header__logoImage" fontSize='large' />
                <h2 className="header_logoTitle">eShop</h2>
            </div>
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className="header__nav">
                <div className="nav__item">
                    <span className="nav_itemLineOne">Hello Guest</span>
                    <span className="nav_itemLineTwo">Sign In</span>
                </div>
                <div className="nav__item">
                    <span className="nav_itemLineOne">Your</span>
                    <span className="nav_itemLineTwo">Shop</span>
                </div>
                <div className="nav__item">
                    <ShoppingBasketIcon fontSize='large' />
                    <span className="nav_itemLineTwo nav_basketCount">0</span>
                </div>
            </div>

        </div>
    );
}

export default Header;
