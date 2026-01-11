import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/library.png';  

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
        <img src={LibraryLogo} alt="Logo" />
        </a>
        <ul className="nav__links">
            <li className="nav__link">
                <a href="/" className="nav__link-a">
                Home
                </a>
            </li>
                <button className="btn__menu">
                    <FontAwesomeIcon icon="bars" />
                </button>
            <li className="nav__icon">
                <a href="/cart" className="nav__link">
                <FontAwesomeIcon icon="shopping-cart" />
                </a>
                <span className="cart__length">2</span>
                </li>
        </ul>
        <button className="btn__menu btn__menu--close">
            <FontAwesomeIcon icon="bars" />
            </button>
            <ul className="menu__links">
                <li className="menu__link">
                    <a href="/" className="menu__link-a">
                    Home
                    </a> <ul className="menu__links">
                <li className="menu__link">
                    <a href="/books" className="menu__link-a">
                    Books
                    </a> <ul className="menu__links">
                <li className="menu__link">
                    <a href="/cart" className="menu__link-a">
                    Cart
                    </a>
                </li>
            </ul>
      </div>
    </nav>
  );
}   
export default Nav;