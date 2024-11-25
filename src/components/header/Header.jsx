import React from "react";
import "./Header.scss";
import { NAVBAR_LIST } from "../../static/";

const Header = () => {
  const navbarList = NAVBAR_LIST.map((item) => (
    <li key={item.id} className="navbar__item">
      <a href={item.link} className="navbar__link">
        {item.icon && <item.icon className="navbar__icon" />}
        <span>{item.name}</span>
      </a>
    </li>
  ));
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <ul className="navbar__collection">{navbarList}</ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
