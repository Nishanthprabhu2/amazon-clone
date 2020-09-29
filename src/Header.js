import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            {/* image logo */}
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>

            {/* searchbar */}
            <div className="header__search">
                <input type="text" className="header__searchIn"/>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>
            {/* navigation actions */}
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne"> Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne"> Your</span>
                    <span className="header__optionLineTwo">Prine</span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon className="header__ShoppingBasketIcon"></ShoppingBasketIcon>
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
                
            </div>
        </div>
    )
}

export default Header
