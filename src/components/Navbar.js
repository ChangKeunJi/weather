import React from "react";
import Search from "./utils/Search";
import { Link, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-light bg-secondary">
        <div className="container">
          {/* Home Link */}
          <Link
            className="text-light border border-light rounded-lg p-2 d-none d-md-block
          "
            style={{ textDecoration: "none" }}
            to="/"
          >
            Weather App
          </Link>
          {/* Search */}
          <Search />
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
