import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Nav.css"
class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <NavLink to="/" className="nav" activeClassName="selected">
            Vaisseau Mère
            </NavLink>
          </li>
          <li className="header">
            <NavLink to="/APIimc" className="nav" activeClassName="selected">
              Toi-même tu connaîtras
            </NavLink>
          </li>
          <li className="header">
            <NavLink to="/match" className="nav" activeClassName="selected">
              Ton Match tu trouveras
            </NavLink>
          </li>
          <li className="header">
            <NavLink to="/training" className="nav" activeClassName="selected">
              Ta force tu développeras
            </NavLink>
          </li>
          <li className="header">
            <NavLink to="/credits" className="nav" activeClassName="selected">
              Je suis ton Dev!
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
export default Nav;
