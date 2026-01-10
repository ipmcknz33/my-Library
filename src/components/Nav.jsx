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
            <li className="nav__link">
                <button className="btn__menu">
                    <FontAwesomeIcon icon="bars" />
                </button>
            </li>
        </ul>
      </div>
    </nav>
  );
}   
export default Nav;