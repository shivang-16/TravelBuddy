import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <div className="nav-brand">
            <h1>
              Travel<span>Buddy</span>
            </h1>
            <p>Your ultimate travel companion</p>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
