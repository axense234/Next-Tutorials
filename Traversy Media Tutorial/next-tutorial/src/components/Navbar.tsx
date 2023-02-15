import React from "react";
// Styles
import navStyles from "../styles/Nav.module.css";
// Next Components
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
