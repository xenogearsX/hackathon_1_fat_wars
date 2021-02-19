import React, { Component } from "react";
import "./Header.css";
import Logo from "./Logo";
import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Nav />
      </div>
    );
  }
}
export default Header;
