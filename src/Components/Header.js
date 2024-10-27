import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <Link className="navbar-brand text-white">Travel Journal</Link>
    <div className="navbar-nav ml-auto">
      <Link className="nav-item nav-link text-white" to="/"> Home </Link>
      <Link className="nav-item nav-link text-white" to="/add-entry">Add Entry</Link>
      <Link className="nav-item nav-link text-white" to="/view-entries">View Entries</Link>
    </div>
  </nav>
);

export default Header;
