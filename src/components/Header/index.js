import React from "react";
import { Link } from "react-router-dom";
import pathnames from "../../pathnames";
import "./style.scss";

const NAV_LOGGED_IN_LINKS = [
  { name: "LOGIN", to: pathnames.LOGIN },
  { name: "CHAT", to: pathnames.CHAT },
  { name: "PROFILE", to: pathnames.PROFILE },
];
function Header() {
  return (
    <div className="header">
      {NAV_LOGGED_IN_LINKS.map(({ name, to }) => (
        <Link key={name} className="header-link" to={to}>
          {name}
        </Link>
      ))}
    </div>
  );
}

export default Header;
