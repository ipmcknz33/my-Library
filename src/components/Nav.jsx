import React from 'react';

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
        <img src="" alt="Logo" />
        </a>
        <ul className="nav__links">
            <li className="nav__link">
                <a href="/" className="nav__link-a">
                Home
                </a>
            </li>
            <button className="btn__menu">
                <FontAWesomeIcon icon="bars" />
            </button>
        </ul>
      </div>
    </nav>
  );
}   
export default Nav;