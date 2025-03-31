import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 shadow-md bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">E-Shop</Link>
        <div>
          <Link to="/signin" className="text-lg mr-4">Sign In</Link>
          <Link to="/signup" className="text-lg mr-4">Sign Up</Link>
          <Link to="/cart" className="text-lg">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;