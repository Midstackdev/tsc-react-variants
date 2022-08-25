import React from "react";
import { ReactComponent as Cart } from "../assets/cart.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand navbar-light bg-white shadow-sm mb-3">
      <div className="container">
        <div className="nav me-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/store" className="nav-link">
            Store
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </div>
        <button
          type="button"
          className="btn btn-outline-primary rounded-circle"
          style={{ width: "3rem", height: "3rem", position: "relative" }}
        >
          <Cart />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              color: "white",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}
          >
            3
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
