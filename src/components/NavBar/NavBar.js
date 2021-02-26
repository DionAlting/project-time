import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="Navbar">
      <div className="link">
        <NavLink
          className="inactive"
          activeClassName="active"
          exact={true}
          to="/"
        >
          Home
        </NavLink>
      </div>
      <div className="link">
        <NavLink
          className="inactive"
          activeClassName="active"
          exact={true}
          to="/about"
        >
          About
        </NavLink>
      </div>
    </div>
  );
}
