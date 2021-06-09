import React, { Component } from "react";
import { menuItems } from "./MenuItems";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          React <i class="fab fa-react"></i>
        </h1>
        <div className="menu-icon"></div>
        <ul>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.tittle}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
