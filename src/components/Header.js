import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            <li>
              <NavLink to="/" className="nav" activeClassName="selected">
                Home
              </NavLink>
            </li>
            <li className='header'>
              <NavLink to="/" className="nav" activeClassName="selected">
                Find Your Match
              </NavLink>
            </li>
            <li className='header'>
              <NavLink to="/" className="nav" activeClassName="selected">
                Training
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;
