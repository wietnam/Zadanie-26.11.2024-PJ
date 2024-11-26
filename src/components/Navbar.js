import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">MedicalFunc</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Product</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
          <button className="btn btn-primary ms-3">Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
